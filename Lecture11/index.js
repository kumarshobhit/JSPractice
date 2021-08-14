let arr=[1,2,3,4,5]
// defination
function smaller(x) {
return x*x ;
}
function cuber(a) {
    return a*a*a ;
}
// function can passes as an argument
// implementation map js -> pre-existing -> arr map
// it will apply the cb fn to all the elements of array and return new arr
function bigger(arr,cb) {
    let newArr=[] ;
    for(let i=0;i<arr.length;i++) {
        let sqVal=cb(arr[i]) ;
        newArr.push(sqVal) ;
    }
    return newArr ;
}
let sqArr=bigger(arr,smaller) ;
console.log("arr",sqArr) ;
let qbArr=bigger(arr,cuber) ;
console.log("arr",qbArr) ;