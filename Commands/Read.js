exports.command = 'read'
exports.aliases = 'n'
exports.desc = 'Reads a note'
exports.builder = {
  title: {    
    describe: 'Note title', 
    demandOption: true,             
    type: 'string'         
}
}
exports.handler = function (argv) {
  console.log('Reading a note')
}

