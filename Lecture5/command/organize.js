let fs=require("fs") ;
let path=require("path") ;
let types = {

    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function checkExtension(fileName) {
    let extName=path.extname(fileName) ;
    extName =extName.slice(1) ;
    for(let key in types){
        for(let i=0;i<types[key].length;i++){
            if(types[key][i]===extName) return key;
        }
    }
    return "other" ;
}

function copyFileToDest(folderName,fullOriginalPath,srcPath){
    let destFolderPath=path.join(srcPath,"organized_files",folderName) ;
    if(fs.existsSync(destFolderPath)=== false){
        fs.mkdirSync(destFolderPath) ;
    }
   let originalFileName=path.basename(fullOriginalPath) ;
   let destFilePath=path.join(destFolderPath,originalFileName) ;
   fs.copyFileSync(fullOriginalPath,destFilePath) ;

}


function printOrg(srcPath) {
    console.log("Organize command executed with ",srcPath) ;
    // 1 create organized_files -> directory
    let organizedFilesPath=path.join(srcPath,"organized_files") ;
    if(!fs.existsSync(organizedFilesPath)){
        fs.mkdirSync(organizedFilesPath) ;
    }
    // 2 scan whole srcPath -> extension check
    let allTheFiles=fs.readdirSync(srcPath) ;
    // console.log(allTheFiles) ;
    // 3 extension check -> classify
    for(let i=0;i<allTheFiles.length;i++){
        let fullOriginalPath=path.join(srcPath,allTheFiles[i]) ;
        if(fs.lstatSync(fullOriginalPath).isFile() === true) {
            let folderName =  checkExtension(allTheFiles[i]) ;
    //    console.log(allTheFiles[i],"will go to ",folderName) ;
            copyFileToDest(folderName,fullOriginalPath,srcPath) ; 
        
    }
}
    // 4 copy to that folder to which it belongs
    //   folder
    //   // file copy 
    //   other 
    // //   file copy

    // code 
}

module.exports ={
    printOrg 
}