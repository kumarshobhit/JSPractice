// function fn(param) {
//     console.log("param is", param) ;
//     console.log("****************") ;
// }
// value pass 
// fn(10) ;
// fn("dsbkdfj") ;
// reference type value 
// let a=[1,2,3,4,5] ;
// fn(a) ;
// fn({name:"jasbir"}) ;
//function statement
// function fn() {
//     console.log("I am fn statement") ;
// }
// // statement
// fn() ;
// in js functions are treated as a variable
// variable -> assign value/address
// function address -> varialbe assign
// let b=a ;
// console.log("b",b) ;
// a.pop() ;
// console.log("b",b) ;
// //function expression
// let exp=function(){
//     console.log("I am function expression") ;
// }

// exp() ;

// let and const ke video dekh lo from youtube

// IIFE immediately invoke function expression  
(function fn() {
    console.log("I am an IFEE will called immediately"); 
})();

// arrow function -> React 
let arrowFN=() => { 
    console.log("I am arrow function") ;
}
arrowFN() ;