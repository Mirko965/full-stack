const fs = require('fs')
const os = require('os')
const notes = require('./notes')
const yargs = require('yargs')

const titleOptions = {
  describe:'Title of note',
  demand: true,
  alias: 't'
}
const bodyOptions = {
  describe:'Text of note',
  demand: true,
  alias: 'b'
}
const argv = yargs
  .command('add','add new note',{
    title: titleOptions,
    body: bodyOptions
  })
  .command('list','list all notes')
  .command('read','read note',{
    title: titleOptions
  })
  .command('remove','remove note',{
    title: titleOptions
  })
  .help()
  .argv

var command = process.argv[2]

console.log('Command: ',argv._[0])
//console.log(`Yargs: ${JSON.stringify(argv)}`)

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body)
  if (note){
    console.log('Added Note:')
    notes.logNote(note)
  } else {
    console.log('Title still exist')
  }

} else if (command === 'list') {
  const allNote = notes.allList()
  console.log(allNote)
  allNote.map((note) => notes.logNote(note))
} else if (command === 'read') {
  const note = notes.readNote(argv.title)
  if (note) {
    console.log('Found note')
    notes.logNote(note)
  } else {
    console.log('Note not found')
  }

} else if (command === 'remove') {
  const removeNote = notes.removeNote(argv.title)
  const message = removeNote ? 'Note successfully remove' : 'Note not found'
  console.log(message)
} else {
  console.log('Command not recognize')
}
