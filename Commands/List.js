const notes = require('../notes')
exports.command = 'list'
exports.aliases = 'l'
exports.desc = 'Lists all notes'
exports.builder = {}
exports.handler = function (argv) {
  notes.listNotes()
}

