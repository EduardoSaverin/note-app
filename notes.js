const fs = require('fs');
var fetchNotes = () => {
    //Initializing notes array try..catch used to check if file exists.
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
}
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
var addNote = function (title, body) {
    //Notes Array
    var notes = fetchNotes();
    
    // Note to be added.
    var note = {
        title,
        body
    }
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length == 0){
        notes.push(note);
        saveNotes(notes);
    }else{
        console.log('Trying to add duplicate Note.');
    }
}
var readNote = function (title) {
    var notes = fetchNotes();
    // console.log('Title to search :'+title);
    var noteToSearch = undefined;
    // Remember we can never return from forEach loop.
    notes.forEach((note) => {
        if(note.title === title){
            // console.log('Title we got:'+JSON.stringify(note));
            noteToSearch = note;
        }
            
    });
    return noteToSearch;
}
var removeNote = function(title){
    var notes = fetchNotes();
    var newNotes = notes.filter((note)=> note.title !== title);
    return notes.length !== newNotes.length;
}
var listAll = function(){
    var notes = fetchNotes();
    console.log(`Printing ${notes.length} note(s).`);
    notes.forEach(function(note){
        console.log('Title :'+note.title);
        console.log('Body :'+note.body);
        console.log('--------');
    });
}
// If key and value are same then we can remove key.
module.exports = {
    addNote,
    readNote,
    removeNote,
    listAll
}