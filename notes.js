const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesStr = fs.readFileSync('notes-data.json');
    return JSON.parse(notesStr);
  } catch (e) {
    console.log(e);
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body,
  };
  const duplicates = notes.filter(note => note.title === title);

  if (duplicates.length == 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  return fetchNotes();
};

const getNote = title => {
  const notes = fetchNotes();
  const filtered = notes.filter(note => note.title === title);
  return filtered[0];
};

const removeNote = title => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const logNote = note => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
  console.log();
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
};
