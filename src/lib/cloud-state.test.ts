import test from 'node:test';import assert from 'node:assert/strict';
import {normalizeLearningState,emptyLearningState,hasLearningWork} from './cloud-state.ts';
test('legacy work is importable even when stored in a different lesson draft',()=>{
 const state=normalizeLearningState({progress:{writing:'Alter Text',stage:3}});
 assert.equal(state.progress.writing,'');
 assert.equal(state.progress.drafts['erste-woche'].writing,'Alter Text');
 assert.equal(hasLearningWork(state),true);
 assert.equal(hasLearningWork(emptyLearningState()),false);
});
test('cloud payload normalizes homework, chat and corrupt fields',()=>{
 const state=normalizeLearningState({chat:{role:'malformed',messages:[null,{author:'Вы',text:'Hallo'}]},homework:{'a1-introduction':{text:'Ich heiße Mila.',done:true,attempts:[{}, {text:'Ich heiße Mila.',feedback:'Richtig',date:'2026-11-18'}]}}});
 assert.equal(state.chat.role,'Kommilitone');assert.equal(state.chat.messages.length,1);
 assert.equal(state.homework['a1-introduction'].attempts.length,1);
 assert.equal(state.homework['a1-introduction'].done,true);
 assert.deepEqual(normalizeLearningState(JSON.parse(JSON.stringify(state))),state);
});
