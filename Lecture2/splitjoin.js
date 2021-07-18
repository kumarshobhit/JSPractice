let name="Shobhit" ;
let str=`Hello my name is ${name}`
// jab bhi input le raho always trim to it
// delimiter 
console.log(str) ;
str=str.trim() ;
// string => array of strings
let arrStr=str.split(" ") ;
console.log(arrStr) ;
// arrayString -> string 
let string=arrStr.join('$')
console.log(string)
