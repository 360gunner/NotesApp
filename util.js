var yargs = require('yargs');

/*var argv = yargs.usage('This is my awesome program')
  .options({
    'about': {
      description: 'Provide some details about the author of this program',
      required: true,
      alias: 'a',
    },
    'info': {
      description: 'Provide some information about the node.js agains!!!!!!',
      boolean: true,
      alias: 'i'
    }
  }).argv;

  yargs.version('1.0.1')*/
//on change la version ta3 --version fl command line biha

//yargs.showHelp();

//console.log('\n\nInspecting options');

var argv = yargs
  .usage('This is my awesome program\n\nUsage: $0 [options]')
  .help('help').alias('help', 'h')
  .version('version', '1.0.1').alias('version', 'V')
  .options({
    input: {
      alias: 'i',
      description: "<filename> Input file name",
      requiresArg: false,
      required: false,
     
    },
    output: {
      alias: 'o',
      description: "<filename> output file name",
      requiresArg: true,
      required: false
    }
  })
  .argv;

  if(argv.input)
    console.log('YEEES')

  console.log(argv)


  .options({
    add: {
      alias: 'a',
      description: "Adds a note",
      requiresArg: true,
      required: false,
     
    },
    remove: {
      alias: 'rm',
      description: "removes a note",
      requiresArg: true,
      required: false
    },
    list: {
      alias: 'ls',
      description: "Lists your notes",
      requiresArg: false,
      required: false,
     
    },
    read: {
      alias: 'r',
      description: "removes a note",
      requiresArg: true,
      required: false
    }
  })