let helpObj=require('./command/help.js')
let treeObj=require('./command/tree.js')
let organizeObj=require('./command/organize.js')

let inputArr=process.argv.slice(2) ;
let command=inputArr[0] ;
let path=inputArr[1] ;
// main input
// input -> node main.js tree "path"
// Print - > tree command executed with path ""
// input -> node main.js organize "path"
// Print -> orgazine command executed with path ""

// input -> node main.js help "path"
// Print ->  list of all the commands
    // 1.node main.js tree path 
    // 2. node main.js organzie path 
    // 3. node main.js help

//C:\Users\welcome\Desktop\pp12\Lecture5\randomFolder
if(command==='tree'){
    treeObj.printTree(path) ;
}
 //C:\Users\welcome\Desktop\pp12\Lecture5\randomFolder
else if(command==="organize"){
    organizeObj.printOrg(path) ;
}
else if(command==='help') {
    helpObj.printHelp(path) ;
}
else {
    console.log("🙏 Please enter some other option") ;
}