let fs=require('fs') ;
let path=require('path') ;
let  inputArr=process.argv.slice(2) ;
console.log("inputArr",inputArr) ;
// ["web dev","javascript","browser","react"]
let mainDir=inputArr[0] ;
console.log(mainDir) ;
let topicFromInput=inputArr.slice(1,4) ;
console.log(topicFromInput) ;
let str=inputArr.join(" ") ;
console.log(str.split("$"))  ;
