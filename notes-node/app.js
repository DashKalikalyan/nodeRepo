const fs = require('fs');
const _=require('lodash');
const yargs= require('yargs');

const notes = require('./notes.js');

var titleOption = {
    describe : 'Title of the note',
    demand : 'true',
    alias : 't'
}

var bodyOption = {
    describe : 'Body of the note',
    demand : 'true',
    alias : 'b'
}

const argv = yargs
            .command('add', 'To add a new note', {
                title : titleOption,
                body : bodyOption
            })
            .command('remove', 'To remove an existing note', {
                title : titleOption
            })
            .command ('read', 'To read a note from the list', {
                title : titleOption
            })
            .command('list', 'To get the list of all the books')
            .help()
            .argv;
var command=process.argv[2];
// var command=argv._[0];
console.log('Command:' , command);
console.log('Process:' , process.argv);
console.log('Yargs:' , argv);

if (command === 'list') {
    var notesList=notes.getAll();
    console.log('There are ', notesList.length, ' notes');
    notesList.forEach((note) => notes.logNote(note));
    console.log('List of all the notes');
    console.log('------------------------');
    for (var i = 0; i<notesList.length; i++) {
        console.log('Note ',i);
        notes.logNote(notesList[i]);
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNotes(argv.title);
    var message = noteRemoved ? 'Book removed' : 'No book like that';
    console.log(message);
} else if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note Added');
        notes.logNote(note);
    } else {
        console.log('Already existing node');
    }
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note Found');
        notes.logNote(note);
    } else {
        console.log('There is no note with that title');
    }
}




// console.log(_.isString(true));
// console.log(_.isString('kkd'));
// console.log(_.uniq([1,1,2,2,3,4]));


// console.log(notes.add(5,-4));
// fs.appendFile('greetings.txt','hello'+os.userInfo().username);
// fs.appendFile('greetings.txt',`hello ${os.userInfo().username} You are ${notes.age}`);