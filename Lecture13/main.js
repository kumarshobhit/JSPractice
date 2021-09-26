let fs=require('fs')
// implement
function myPromisedFsReader(filePath) {
    // using this existing function
    return new Promise(function (resolve,reject) {
        fs.readFile(filePath,function cb(err,data) {
            if(err) {
                reject(err) ;
            }
            else {
                resolve(data) ;
            }
        })
    })
}

// consumer
console.log("Before") ;
let freedPromise=myPromisedFsReader("f1.txt") ;
console.log("promise",freedPromise) ;
// promise -> resolve -> data
// function pass -> resolve
freedPromise.then(function cb(data) {
    console.log("data" + data) ;
})
// function pass -> rejectCallback
freedPromise.catch(function cb(err) {
    console.log("error" + err) ;
})
console.log("After");