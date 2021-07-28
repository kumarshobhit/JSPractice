let fs = require("fs")
let path=require("path")
let inputDir=process.argv.slice(2)[0] ;
let allentities=fs.readdirSync(inputDir)
let isMainModulePresent=fs.existsSync(inputDir)
if(!isMainModulePresent){
    console("Directory is not present") ;
    return ;
}
let content="" ;
for(let i=0;i<allentities.length;i++){
    let entityName=allentities[i] ;
    let fullPath=path.join(inputDir,entityName) ;
    let statsOfAPath=fs.lstatSync(fullPath) ;
    if(statsOfAPath.isFile()){
        let ext=path.extname(fullPath) ;
        if(ext=='.txt'){
            content+= fs.readFileSync(fullPath) ;
        }
    }
}
let filePath=path.join(inputDir,"summary.txt") ;
fs.writeFileSync(filePath,content) ;
console.log("summary file created") ;