let fs=require("fs") ;
console.log("before") ;
// you dont know when it will completed read
// file read, network request -> sync way
// let content=fs.readFileSync("cyberpunk.txt") ;
// console.log("content"+content) ;
// console.log("after") ;
// nodejs -> async function
// function callback function 
// main app that does depend on file
// async function -> created by Environment
fs.readFile("cyberpunk.txt",cb) ;

function cb(err,data) {
    if(err) {
        console.log("error"+err) ;
    }
    else {
        console.log("data"+data) ;
    }
}

console.log("after") ;

// it is just like threading in java