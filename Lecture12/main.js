let fs=require('fs');
console.log('Before') ;
// callback
// fs.readFile("f1.txt",function cb(err,data) {
//     console.log("data"+data);
// })

let freadPromise=fs.promises.readFile('f1.txt');
console.log(freadPromise);
// promise -> resolve -> data

// function pass -> resolve
freadPromise.then(function cb(data){
    console.log("data "+data);
})

// function pass -> reject
freadPromise.catch(function cb(err){
    console.log("error "+err);
})
console.log('After');

