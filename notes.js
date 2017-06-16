const notes = [];
var addNote = function (title, note) {
    //console.log('Adding Note.');
    notes[title] = note;
    console.log(notes);
    return true;
}
var readNote = function (title) {
    console.log(notes[title]);
}
var removeNote = function(title){
    delete notes[title]
    return true;
}
var listAll = function(){
    notes.forEach(function(item,index,array){
        console.log(index,':',notes[index]);
    });
}
// If key and value are same then we can remove key.
module.exports = {
    addNote,
    readNote,
    removeNote,
    listAll
}