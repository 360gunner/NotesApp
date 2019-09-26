const notes = require('../notes')
exports.command = 'add'
exports.aliases = 'a'
exports.desc = 'Add a new note'
exports.builder = {
    title: {    
            describe: 'Note title', 
            demandOption: true,             
            type: 'string'         
        },    
    body: {             
            describe: 'Note body',             
            demandOption: true,             
            type: 'string'         
        } 
}
exports.handler = function (argv) {
    notes.addNote(argv.title,argv.body)
}

