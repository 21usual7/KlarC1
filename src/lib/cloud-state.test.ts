import test from 'node:test';import assert from 'node:assert/strict';
import {normalizeLearningState,emptyLearningState,hasLearningWork} from './cloud-state.ts';
test('story drafts are dropped with the stories; profile and vocabulary count as work',()=>{
 const legacy=normalizeLearningState({progress:{writing:'Alter Text',stage:3}});
 assert.equal('writing' in legacy.progress,false);
 assert.equal(hasLearningWork(legacy),false);
 assert.equal(hasLearningWork(normalizeLearningState({progress:{profile:{name:'Mila',level:'A2'}}})),true);
 assert.equal(hasLearningWork(normalizeLearningState({progress:{modules:{'cyber-a2-angriffe':{lessons:[0]}}}})),true);
 assert.equal(hasLearningWork(emptyLearningState()),false);
});
test('cloud payload normalizes homework, chat and corrupt fields',()=>{
 const state=normalizeLearningState({chat:{role:'malformed',messages:[null,{author:'Вы',text:'Hallo'}]},homework:{'a1-introduction':{text:'Ich heiße Mila.',done:true,attempts:[{}, {text:'Ich heiße Mila.',feedback:'Richtig',date:'2026-11-18'}]}}});
 assert.equal(state.chats.length,1);assert.equal(state.chats[0].role,'Kommilitone');assert.equal(state.chats[0].messages.length,1);
 assert.equal(state.homework['a1-introduction'].attempts.length,1);
 assert.equal(state.homework['a1-introduction'].done,true);
 assert.deepEqual(normalizeLearningState(JSON.parse(JSON.stringify(state))),state);
});
test('chats keep valid entries and drop empty or broken ones',()=>{
 const state=normalizeLearningState({chats:[{id:'a',role:'Professor',created:Date.now(),messages:[{author:'Вы',text:'Hallo'}]},{id:'b',messages:[]},{id:'bad id!',messages:[{author:'Вы',text:'x'}]},null]});
 assert.deepEqual(state.chats,[{id:'a',role:'Professor',created:Date.now(),messages:[{author:'Вы',text:'Hallo'}]}]);
 assert.equal(hasLearningWork(state),true);
});
test('chats older than two weeks are removed, legacy chat counts as new',()=>{
 const day=86400000,m=[{author:'Вы',text:'Hallo'}];
 const state=normalizeLearningState({chats:[{id:'old',created:Date.now()-15*day,messages:m},{id:'fresh',created:Date.now()-13*day,messages:m}]});
 assert.deepEqual(state.chats.map(c=>c.id),['fresh']);
 assert.equal(normalizeLearningState({chat:{messages:m}}).chats.length,1);
});
