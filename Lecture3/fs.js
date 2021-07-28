// implementation -> files/folder interact
// /directory
// files -> read /write /update delete
let fs=require("fs") ;
let path=require("path") ;
// let content=fs.readFileSync("f1.txt") ;
// buffer -> video, audio, text 
// console.log("content : ",content)
// +- -> concatinate -> string  => text
// console.log('content : '+ content)
// wrtie -> writeFileSync
// file does not exist -> file create, content put 
// file does exist -> content override
// fs.writeFileSync("abc.txt","Hi i am a new file") ;
// update 
// fs.appendFileSync("abc.txt",'Update the file') ;
// delete a file by passing it's path
// fs.unlinkSync("abc.txt") ;
// console.log("file removed") ;


// ******************** directory *****************************
// create
// fs.mkdirSync('myDir') ;
// delete
// fs.rmdirSync('myDir') ;
// path -> does it exist or not
// let doesExist=fs.existsSync('fs.js')
// console.log("This path exist ?",doesExist) ;
// path -> belongs to a folder or a file
// let statsOfAPath=fs.lstatSync('dir1')
// console.log("stats",statsOfAPath) ;
// console.log("isFile? ", statsOfAPath.isFile())
// console.log("isDirectory? ",statsOfAPath.isDirectory()) ;
// directory -> content
// let address="C:\\Users\\welcome\\Desktop\\pp12\\Lecture3"
// let content=fs.readdirSync(address)
// console.log("directory content",content)
//copy
// firstParam -> srcFilePath,destFilePath
let srcFilePath="C:\\Users\\welcome\\Desktop\\pp12\\Lecture3\\dir1\\abc.txt" ;
let destDir="C:\\Users\\welcome\\Desktop\\pp12\\Lecture5" ;
let tobeCopiedFileName=path.basename(srcFilePath) ;
console.log(tobeCopiedFileName) ;
let destPath=path.join(destDir,tobeCopiedFileName) ;
fs.copyFileSync(srcFilePath,destPath) ;
console.log("File copied") ;
