// const obj = {
//   name: 'loic'
// }
//
// const stringObj = JSON.stringify(obj);
// console.log(typeof stringObj, stringObj); 
//
// const personStr = '{"name":"loic","age":34}';
// const person = JSON.parse(personStr);
// console.log(typeof person, person); 

const fs = require('fs');

const originalNote = {
  title: 'Some title...',
  body: 'Some stuff inside body'
}

const originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteStr);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);

console.log(typeof note, note.title, note.body);
