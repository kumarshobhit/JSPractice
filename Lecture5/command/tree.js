let fs=require("fs") ;
let path=require("path")
function printTree(srcPath) {
    let content=fs.readdirSync(srcPath) ;
    // |____
    // |____
    let parentFolderName=path.basename(srcPath) ;
    let completePath="└──" +parentFolderName ;
    for(let i=0;i<content.length;i++){
        completePath=completePath+"\n\t"+"├──"+content[i] ;
    }
    console.log(completePath) ;
    console.log("`````````````````");
}

module.exports ={
    printTree
}