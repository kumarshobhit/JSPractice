//declare
// array is a collection of homogenous data types -> Java,C++
// array is a collection of anything -> Javascript,Python
let arr=[1,
    true,
    1.1,
    "string",
    null,
    [1,2,3,4,5],
    function fn() {
        console.log("Hello I am function inside an array") ;
        return "rval from a fn"
    }] ;
    // get
console.log("extract 3 from 2dArray",arr[arr.length-2][2]) ;
console.log(arr) ;
// function defination
// function fn() {
//     console.log("I am function") ;
//     return 10 ;
// }
// // function Invocation
// console.log("function",fn) ;
// let rVal=fn() ;
// console.log("rVal",rVal) ;