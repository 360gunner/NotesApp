const fs = require('fs')
const chalk = require('chalk')
const getNotes = function () {
    return 'Your notes...'
}

const addNote = function(title, body) {

    const notes = loadNotes()

    if(notes.length !== 0){
    const dupNotes = notes.filter(function (note) {
            return note.title === title
        })
    
    if(dupNotes.length === 0 ){
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.green.bold('Note Added!'))
    }
    else
    {
        console.log(chalk.bgRed.bold.black('Note already exists!'))
    }    }
    else{
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('Note Added!'))
    }


}

const removeNote = function(title,all){
    if(all){
        saveNotes([])
        console.log(chalk.red.bold('All notes was removed!'))
    }
    else{
    if(!title){
        console.log(chalk.bgRed('TITLE REQUIRED'))
    }else{
    const notes = loadNotes()
    var b = true
    for( var i = 0; i < notes.length; i++){ 
        if ( notes[i].title === title) {
          notes.splice(i, 1);
          b = false
          saveNotes(notes)
          console.log(chalk.green.bold('Note removed!'))
          
        }
     }
    if (b){
        console.log(chalk.bgRed.bold.black('Note does not exist!'))
    }
}}}

const saveNotes = function(notes){
    const jsonData = JSON.stringify(notes)
    fs.writeFileSync('./notes.json',jsonData)
}

const loadNotes = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch{
        return []
    }
}

const listNotes = function(){
    const notes = loadNotes()
    if(notes.length === 0){console.log(chalk.red.bold('No note found!'))}else{
    console.log(chalk.bold.bgBlue('Notes : \n')+'------- ')
    notes.forEach(note => {
        console.log(
           chalk.bold.green( note.title + ': ') + note.body
        )
    });
}}

const read =function(title){

    const notes = loadNotes()
    var b = true
    notes.forEach(note => {
        
    
        if ( note.title === title) {
         
            console.log(
                chalk.bold.green( title + ': ') + note.body
             )
          b = false
        }
    }) 
    if (b){
        console.log(chalk.bgRed.bold.black('Note does not exist!'))
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    read: read
}