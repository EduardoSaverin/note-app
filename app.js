const yargs = require('yargs');
const notes = require('./notes');

var command = yargs.argv['_'][0];

//console.log('Yargs commands :',yargs.argv);

if(command === 'add'){
    console.log('Adding new note.');
    let title = yargs.argv.hasOwnProperty('title')?yargs.argv.title:'';
    let note = yargs.argv.hasOwnProperty('note')?yargs.argv.note:'No Note Provided.';
    //console.log(title,note);
    notes.addNote(title,note);
}else if(command === 'list'){
    console.log('Listing all notes.');
    notes.listAll();
}else if(command === 'read'){
    console.log('Reading note.');
    let title = yargs.argv.hasOwnProperty('title')?yargs.argv.title:'';
    notes.readNote(title);
}else if(command === 'remove'){
    console.log('Removing note.');
    let title = yargs.argv.hasOwnProperty('title')?yargs.argv.title:'';
    notes.removeNote(title);
}else{
    console.log('Command not recognized.');
}
