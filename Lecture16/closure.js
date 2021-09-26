// function outer() {
//     let arrFn=[] ;
//     for(var i=0; i<3;i++) {
//         arrFn.push(function fn() {
//             console.log(i) ;
//         })
//     }
//     return arrFn ; 
// }



// function outer() {
//     let arrFn=[] ;
//     for(var i=0; i<3;i++) {
//         arrFn.push(function fn() {
//             console.log(i) ;
//         }())
//     }
//     return arrFn ; 
// }



// function outer() {
//     let arrFn=[] ;
//     for(var i=0; i<3;i++) {
//         function outerFn() {
//             var j=i ;
//             return function fn() {
//                 console.log(j,i) ;
//             }
//         }
//         arrFn.push(outerFn());
//     }
//     return arrFn ; 
// }





function outer() {
    let arrFn=[] ;
    for(let i=0; i<3;i++) {
        arrFn.push(function fn() {
            console.log(i) ;
        }) 
    }
    return arrFn ; 
}

let arrFn=outer() ;

arrFn[0]() ;
arrFn[1]() ;
arrFn[2]() ;

https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20&%20closures/README.md#you-dont-know-js-scope--closures
https://dmitripavlutin.com/javascript-closures-interview-questions/

// working of set timeout