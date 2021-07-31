let fs=require("fs") ;
let path=require("path")
function printTree(srcPath) {
    let content=fs.readdirSync(srcPath) ;
    // |____
    // |____
    let parentFolderName=path.basename(srcPath) ;
    let completePath='|____'+parentFolderName ;
    for(let i=0;i<content.length;i++){
        completePath=completePath+"\n\t"+"|____"+content[i] ;
    }
    console.log(completePath) ;
}

module.exports ={
    printTree
}