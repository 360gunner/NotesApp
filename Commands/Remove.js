const notes = require('../notes')
exports.command = 'remove'
exports.aliases = 'r'
exports.desc = 'remove a note'
exports.builder = {
  title: {    
    describe: 'Note title', 
    demandOption: false,             
    type: 'string'         
},
all: {
  demandOption: false,
  type : Boolean
}

}
exports.handler = function (argv) {
  notes.removeNote(argv.title,argv.all)
}

