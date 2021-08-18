let fs=require("fs") ;

let files=["f1.txt", "f2.txt", "f3.txt", "f4.txt", "f5.txt"] ;
// paralley read using async function
// start the work
// also give a cb function from which we can intimate after work is documentElement
for(let i=0;i<files.length;i++) {
    fs.readFile(files[i],cb) ;
}

function cb(err,content) {
    console.log("content "+content) ;
}