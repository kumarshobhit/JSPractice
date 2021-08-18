let fs=require("fs") ;
let conent=fs.readFileSync("cb.js") ;
// a js dev can't create an async function
// environment wil give it you
console.log("Before") ;
// ensured
fs.readFile("cb.js",cb) ;
// console.log("content: " + content) ;
function cb(error,data) {
    if(error) {
        console.log("Error: "+ arr) ;
    }
    else console.log("content: "+ data) ;
}

console.log("After") ;