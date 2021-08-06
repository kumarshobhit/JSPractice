// main -> X
// js code -> Environment 
// js -> browser,node js
// environment -> code + global + this
// node -> global
// browser -> window object 
// global area -> it is not inside any function
// JS engine -> that executes JS code 

// code + Environment(global)+JS(this)
// key word -> object given by your environment
// console.log(global) ;

// this prints -> empty object 
// console.log(this) ;

// Execution content -> code+Environment(global)+JS(this) 
// every code inside js run in an ec 
// there are 2 phases in EC
// 1.creation phase 
// memory allocate -> hoisting
// variables -> undefined  
// function memory allocate 


// 2.Code execution 
// left to right and top to bottom execute hoga 
// default -> global execution context
// EC -> is only created when a function is called

// console.log("line number 26",a) ;
// // console.log("line number 27",b) ;
// var a ;
// // var b ;
// a=10 ;
// b=[1,2,3,4,5] ;
// console.log(a) ;
// // console.log(b) ;
// fn() ;
// function fn() { 
//     console.log(a) ;
//     a++ ;
//     // console.log("Thank you calling me") ;
//     console.log(a) ;
// }
// fn() ;
// console.log(a) ;

// lexical scope
var varName=1 ;

function a() {
    console.log(varName)
}

function b() {
    var varName=2 ;
    a() ;
}

b() ;

// web scraping