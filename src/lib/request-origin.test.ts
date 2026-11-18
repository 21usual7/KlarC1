import test from 'node:test';import assert from 'node:assert/strict';import {isSameOriginRequest} from './request-origin.ts';
test('same-origin checks use browser-visible Host behind a 0.0.0.0 listener',()=>{
 const req=(origin:string,site='same-origin')=>new Request('http://0.0.0.0:3000/api/auth/register',{headers:{host:'localhost:3000',origin,'sec-fetch-site':site}});
 assert.equal(isSameOriginRequest(req('http://localhost:3000')),true);
 assert.equal(isSameOriginRequest(req('https://evil.example')),false);
 assert.equal(isSameOriginRequest(req('http://localhost:3000','cross-site')),false);
 assert.equal(isSameOriginRequest(req('https://klar.example'),'https://klar.example'),true);
});
