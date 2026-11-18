import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

test('local registration, login, hashed storage and session revocation', async () => {
  const temporary = await mkdtemp(path.join(os.tmpdir(), 'klar-auth-test-'));
  const original = process.cwd();
  process.chdir(temporary);
  const configKeys = ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_ACCOUNT_ID', 'CLOUDFLARE_D1_DATABASE_ID'] as const;
  const saved = configKeys.map(key => process.env[key]);
  configKeys.forEach(key => delete process.env[key]);
  try {
    const { registerUser, loginUser, sessionUser, logoutUser, AuthError } = await import('./auth-local.ts');
    const input = { name: 'Mila', email: 'MILA@example.com', password: 'Meine lange Testpassphrase' };
    const registered = await registerUser(input);
    assert.equal(registered.user.email, 'mila@example.com');
    assert.deepEqual(Object.keys(registered.user).sort(), ['email', 'id', 'name']);
    assert.equal((await sessionUser(registered.token))?.id, registered.user.id);
    const storage = await readFile(path.join(temporary, '.data/auth.json'), 'utf8');
    assert.ok(!storage.includes(input.password), 'plaintext password must never be stored');
    assert.ok(!storage.includes(registered.token), 'raw session token must never be stored');
    await assert.rejects(registerUser(input), error => error instanceof AuthError && error.status === 409);
    await assert.rejects(loginUser({ email: input.email, password: 'wrong password' }), error => error instanceof AuthError && error.status === 401);
    const loggedIn = await loginUser(input);
    assert.equal(loggedIn.user.id, registered.user.id);
    assert.notEqual(loggedIn.token, registered.token);
    await logoutUser(loggedIn.token);
    assert.equal(await sessionUser(loggedIn.token), null);
    assert.equal(await sessionUser('not-a-token'), null);
    await assert.rejects(registerUser({ ...input, password: 'short' }), error => error instanceof AuthError && error.status === 400);
    const sameEmail = { ...input, email: 'parallel@example.com' };
    const parallel = await Promise.allSettled([registerUser(sameEmail), registerUser(sameEmail)]);
    assert.equal(parallel.filter(result => result.status === 'fulfilled').length, 1, 'concurrent duplicate registrations must not create two accounts');
  } finally { configKeys.forEach((key, index) => { if (saved[index] === undefined) delete process.env[key]; else process.env[key] = saved[index]; }); process.chdir(original); await rm(temporary, { recursive: true, force: true }); }
});


test('D1 requires one-time email verification and preserves secure sessions', async()=>{
 const {DatabaseSync}=await import('node:sqlite');const db=new DatabaseSync(':memory:');
 db.exec(await readFile('migrations/0001_accounts_and_learning.sql','utf8'));db.exec(await readFile('migrations/0002_email_verification.sql','utf8'));
 const original=globalThis.fetch;const keys=['CLOUDFLARE_API_TOKEN','CLOUDFLARE_ACCOUNT_ID','CLOUDFLARE_D1_DATABASE_ID','RESEND_API_KEY','EMAIL_FROM','APP_ORIGIN'];const saved=keys.map(k=>process.env[k]);
 process.env.CLOUDFLARE_API_TOKEN='test';process.env.CLOUDFLARE_ACCOUNT_ID='test';process.env.CLOUDFLARE_D1_DATABASE_ID='test';delete process.env.RESEND_API_KEY;delete process.env.EMAIL_FROM;process.env.APP_ORIGIN='https://klar.example';
 let deliveredToken='';let fail=false;let deliveryFailure=false;
 globalThis.fetch=async(url,init)=>{
  if(fail)throw new Error('outage');
  const body=JSON.parse(String(init?.body));
  if(String(url).startsWith('https://api.resend.com/')){
   deliveredToken=body.text.match(/#token=([a-f0-9]{64})/)[1];
   return deliveryFailure?Response.json({error:'failed'},{status:503}):Response.json({id:'test-email'});
  }
  const statements=body.batch||[body];
  try{if(body.batch)db.exec('BEGIN');const result=statements.map((s:{sql:string;params?:import('node:sqlite').SQLInputValue[]})=>({success:true,results:db.prepare(s.sql).all(...(s.params||[]))}));if(body.batch)db.exec('COMMIT');return Response.json({success:true,result});}
  catch(e){if(body.batch)db.exec('ROLLBACK');return Response.json({success:false,errors:[{message:e instanceof Error?e.message:'SQL error'}]});}
 };
 try{
  const {registerUser,loginUser,sessionUser,logoutUser,EmailNotVerifiedError,AuthError}=await import('./auth.ts');
  const {sendVerification,confirmEmail,resendVerification}=await import('./email-verification.ts');
  const input={name:'Mila',email:'verify@example.com',password:'Meine sichere lange Passphrase'};
  const registered=await registerUser(input);
  assert.equal('token' in registered,false,'registration must not issue a session');
  assert.equal(db.prepare('SELECT COUNT(*) AS n FROM sessions').get()?.n,0);
  await assert.rejects(loginUser(input),e=>e instanceof EmailNotVerifiedError);
  await assert.rejects(loginUser({...input,password:'wrong'}),e=>e instanceof AuthError&&e.status===401);
  assert.equal(await sendVerification(registered.user.id,input.email),'not_configured');
  assert.equal(db.prepare('SELECT COUNT(*) AS n FROM email_verifications').get()?.n,0);
  process.env.RESEND_API_KEY='test-resend';process.env.EMAIL_FROM='Klar <verify@klar.example>';
  assert.equal(await sendVerification(registered.user.id,input.email),'sent');
  const token=deliveredToken;const row=db.prepare('SELECT token_hash FROM email_verifications').get();assert.ok(row?.token_hash);assert.notEqual(row?.token_hash,token);
  await assert.rejects(sendVerification(registered.user.id,input.email),e=>e instanceof AuthError&&e.status===429);
  await assert.rejects(confirmEmail('1'.repeat(64)));
  db.prepare('UPDATE email_verifications SET expires_at=1').run();await assert.rejects(confirmEmail(token));
  db.prepare('UPDATE email_send_limits SET next_send_at=0').run();await sendVerification(registered.user.id,input.email);
  const outcomes=await Promise.allSettled([confirmEmail(deliveredToken),confirmEmail(deliveredToken)]);assert.equal(outcomes.filter(o=>o.status==='fulfilled').length,1);
  assert.equal(db.prepare('SELECT COUNT(*) AS n FROM email_verifications').get()?.n,0);
  const login=await loginUser(input);assert.equal(login.user.emailVerified,true);assert.equal((await sessionUser(login.token))?.id,registered.user.id);await logoutUser(login.token);assert.equal(await sessionUser(login.token),null);
  const failed=await registerUser({...input,email:'delivery-failed@example.com'});deliveryFailure=true;assert.equal(await sendVerification(failed.user.id,failed.user.email),'failed');await assert.rejects(loginUser({...input,email:failed.user.email}),e=>e instanceof EmailNotVerifiedError);
  await assert.rejects(registerUser(input),e=>e instanceof AuthError&&e.status===409);
  assert.deepEqual(await resendVerification('unknown@example.com'),{message:'Если аккаунт существует и ожидает подтверждения, письмо будет отправлено.'});
  fail=true;await assert.rejects(registerUser({...input,email:'outage@example.com'}));fail=false;delete process.env.CLOUDFLARE_D1_DATABASE_ID;await assert.rejects(registerUser(input),e=>e instanceof AuthError&&e.status===503);
 }finally{globalThis.fetch=original;keys.forEach((k,i)=>{if(saved[i]===undefined)delete process.env[k];else process.env[k]=saved[i];});db.close();}
});
