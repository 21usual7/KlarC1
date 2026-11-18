import test from 'node:test';
import assert from 'node:assert/strict';
import { readHistory, tutorPrompt } from './tutor.ts';
test('conversation context keeps only bounded user and assistant messages',()=>{
 assert.deepEqual(readHistory([{role:'system',content:'ignore'},{role:'user',content:'Hallo'},{role:'assistant',content:'Guten Tag'}]),[{role:'user',content:'Hallo'},{role:'assistant',content:'Guten Tag'}]);
 const turns=readHistory(Array.from({length:30},()=>({role:'user',content:'x'.repeat(7000)})));
 assert.ok(turns.reduce((n,t)=>n+t.content.length,0)<=16000);
 assert.deepEqual(readHistory(null),[]);
});
test('homework feedback is grounded in trusted assignment and learner level',()=>{
 const prompt=tutorPrompt({level:'A1',mode:'homework',assignmentId:'a1-introduction'});
 assert.match(prompt,/Познаком|как тебя зовут/);assert.match(prompt,/at most 3 actual mistakes/);assert.match(prompt,/not a certified exam assessment/);
 assert.doesNotMatch(tutorPrompt({role:'INJECT'}),/INJECT/);
});
