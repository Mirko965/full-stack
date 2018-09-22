const fs = require('fs')

const fetchNote = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'))
  } catch (e) {
    return []
  }
}
const saveNote = (notes) => {
  return fs.writeFileSync('notes-data.json',JSON.stringify(notes))
}
const addNote = (title,body) => {
  let notes = fetchNote()
  var note = {
    title,
    body
  }

  const duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0 && note.title !== undefined) {
    notes.push(note)
    saveNote(notes)
    return note
  }
}
const allList = () => {
  return fetchNote()
}
const readNote = (title) => {
  const notes = fetchNote()
  const note = notes.filter((note) => note.title === title)
  return note[0]
}
const removeNote = (title) => {
  const notes = fetchNote()
  const note = notes.filter((note) => note.title !== title)
  saveNote(note)
  return notes.length !== note.length
}
const logNote = (note) => {
  console.log('-----')
  console.log(`Title: ${note.title}`)
  console.log(`Body: ${note.body}`)
}

module.exports = {
  addNote,
  allList,
  readNote,
  removeNote,
  logNote
}
