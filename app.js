const yargs = require('yargs');
const notes = require('./notes');
const titleOptions = {
        describe : 'Title of note',
        demand : true,
        alias : 't'
    }
    
var command = yargs
.command('add','Add a new note.',{
    title : titleOptions,
    body : {
        describe : 'Body of note',
        demand : true,
        alias : 'b'
    }
})
.command('list','List all notes.')
.command('read','Get note by title.',{
    title : titleOptions
})
.command('remove','Remove a note',{
    title : titleOptions
})
.help().argv['_'][0];

//console.log('Yargs commands :',yargs.argv);

if(command === 'add'){
    console.log('Adding new note.');
    let title = yargs.argv.hasOwnProperty('title')?yargs.argv.title:'';
    let note = yargs.argv.hasOwnProperty('note')?yargs.argv.note:'No Note Provided.';
    //console.log(title,note);
    notes.addNote(title,note);
}else if(command === 'list'){
    notes.listAll();
}else if(command === 'read'){
    console.log('Reading note.');
    let title = yargs.argv.hasOwnProperty('title')?yargs.argv.title:'';
    var note = notes.readNote(title);
    console.log(note);
    if(note){
        //note = JSON.parse(note);
        console.log('** Note found **');
        console.log('Title :'+note.title);
        console.log('Body :'+note.body);
    }else{
        console.log('Note not found.');
    }
}else if(command === 'remove'){
    console.log('Removing note.');
    let title = yargs.argv.hasOwnProperty('title')?yargs.argv.title:'';
    notes.removeNote(title)?('Deleting note :'+title):('Error in deleting note,no note exists with title :'+title);
}else{
    console.log('Please provide command or use --help');
}
