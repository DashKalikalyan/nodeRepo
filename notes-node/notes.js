console.log('starting notes.js');


const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title : title,
        body : body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
    return note;
    }
};

var getAll = () => {
    var notes = fetchNotes();
    return notes;
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title === title);
    return filterNotes[0];
}

var removeNotes = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return filteredNotes.length !== notes.length;
};

var logNote = (note) => {
    debugger;
    console.log('----------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`)
};

module.exports = {
    addNote : addNote,
    getAll : getAll,
    getNote: getNote,
    removeNotes: removeNotes,
    logNote: logNote
}
// module.exports.addNote=(title,body) => {
//     console.log('Adding Note:', title, body);
//
// }
//
// module.exports.add=(a,b) => {
//     console.log('add');
//     return (a+b);
// }