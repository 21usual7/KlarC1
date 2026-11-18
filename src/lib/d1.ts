/** Server-only credentials. Imported only by API routes and migration/test code. */
export class D1Error extends Error {}
export function d1Configured(){return !!(process.env.CLOUDFLARE_API_TOKEN && process.env.CLOUDFLARE_ACCOUNT_ID && process.env.CLOUDFLARE_D1_DATABASE_ID);}
export function d1PartiallyConfigured(){return !!(process.env.CLOUDFLARE_API_TOKEN || process.env.CLOUDFLARE_ACCOUNT_ID || process.env.CLOUDFLARE_D1_DATABASE_ID);}
type Statement={sql:string;params?:unknown[]};
async function request(body:Statement|{batch:Statement[]}) {
 if(!d1Configured())throw new D1Error('Cloudflare D1 is not configured');
 const {CLOUDFLARE_ACCOUNT_ID:account,CLOUDFLARE_D1_DATABASE_ID:database,CLOUDFLARE_API_TOKEN:token}=process.env;
 let response:Response;
 try{response=await fetch(`https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(account!)}/d1/database/${encodeURIComponent(database!)}/query`,{method:'POST',cache:'no-store',signal:AbortSignal.timeout(20000),headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify(body)});}catch{throw new D1Error('Cloudflare D1 connection unavailable');}
 const data=await response.json();
 if(!response.ok || !data.success || !Array.isArray(data.result) || data.result.some((r:{success?:boolean})=>r.success===false)) {
  const errors=[...(data.errors||[]),...(data.result||[]).flatMap((r:{error?:string})=>r.error?[{message:r.error}]:[])];
  throw new D1Error(errors.map((e:{message?:string})=>e.message||'D1 query failed').join('; ').slice(0,500)||'D1 query failed');
 }
 return data.result as {results?:unknown[];success:boolean}[];
}
export async function d1Query<T=Record<string,unknown>>(sql:string,params:unknown[]=[]):Promise<T[]>{const result=await request({sql,params});return (result[0]?.results||[]) as T[];}
export async function d1Batch(statements:Statement[]):Promise<void>{if(statements.length)await request({batch:statements});}
