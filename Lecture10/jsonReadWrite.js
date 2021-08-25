let fs=require("fs") ;
// object,array
// object -> contain string as key
// {
//     "name": "Jasbir" ;
// }
let input=["hello","how","are","you"] ; 
// write 
// let jsonWriteAble=JSON.stringify(input) ;
// fs.writeFileSync("abc.json",jsonWriteAble) ;
let content=fs.readFileSync("abc.json") ;
let jsonData=JSON.parse(content) ;
// console.log(jsonData) ;

// append 
jsonData.push("Hola") ;
let jsonWriteAble=JSON.stringify(jsonData) ;
fs.writeFileSync("abc.json",jsonWriteAble) ;