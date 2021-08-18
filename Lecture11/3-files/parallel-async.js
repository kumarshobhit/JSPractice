let fs=require("fs") ;
console.log("Before") ;
fs.readFile("f1.txt",cb) ;
fs.readFile("f2.txt",cb1) ;
fs.readFile("f3.txt",cb2) ;
function cb(err,content) {
    console.log("1")
    console.log("content "+content) ;
    
}
function cb1(err,content) {
    console.log("2")
    console.log("content "+content) ;
}
function cb2(err,content) {
    console.log("3") ;
    console.log("content "+content) ;
}
console.log("After")

