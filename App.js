const chalk = require('chalk')
//chalk mli7a tlouwn lktiba f command line
const yargs = require('yargs').commandDir('./Commands').usage('This is a note app\n\nUsage: $0 [options]')
.help('help').alias('help', 'h')
.version('version', '1.0.1').alias('version', 'V')
.argv;
//yargs mli7 fl command line
const notes = require('./notes')




