// function
// variable
let a=10 ;
function fn() {
    console.log("hello i am func") ;
}
function notToBeExported() {
    console.log("i dont want to be exported") ;
}

// code export
module.exports={
    varName:a,
    fxn:fn
}