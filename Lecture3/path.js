let path=require("path")
let fs=require("fs")
// path.join()
// input
// let inputArr=process.argv.slice(2) ;
// console.log(inputArr) ;
// let fileName=inputArr[0]
// let content=inputArr[1]
// console.log("fileName",fileName)
// console.log("content",content)
// current path of directory
// let currentPath=process.cwd()
// console.log("currentPath ",currentPath)
// path -> paths -> platform independent
// let joinedPath=path.join(currentPath,"abc","def","efg")
// console.log("joinedPath",joinedPath)
// let filePath=path.join(currentPath,"dir1",fileName) ;
// console.log("filePath ",filePath) ;
// fs.writeFileSync(filePath,content) ;

// copy file from one folder to another
let srcPath="C:\\Users\\welcome\\Desktop\\pp12\\Lecture2"
let destFolderPath="C:\\Users\\welcome\\Desktop\\pp12\\Lecture3\\web-d"
let filename=path.basename(srcPath) ;
let destPath=path.join(destFolderPath,filename) ;
// fs.copyFileSync(srcPath,destPath) ;

// extension of the file if it is present at the end of path
let ext=path.extname(srcPath) ;
console.log(ext) ;




