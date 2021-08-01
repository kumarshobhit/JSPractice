let path=require("path")
let fs=require("fs") ;
let inputArr=process.argv.slice(2) ;

let optionArr=[] ;
let filesArr=[] ;

for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0) ;
    if(firstChar === '-') {
        optionArr.push(inputArr[i]) ;
    }
    else {
        filesArr.push(inputArr[i]) ;
    }
}


// read the content from the files
let content="" ;
for(let i=0;i<filesArr.length;i++){
    let filePath=filesArr[i] ;
    if(fs.existsSync(filePath) === false){
        return `the  file path "${filePath}" does not exist` ;
    }
     content+=fs.readFileSync(filePath)+'\n' ;
}
// first and second task -> to read the content from files
if(optionArr.length === 0) {
    console.log(content+"\n") ;
}

let contentArr=content.split("\r\n") ;

// 3rd task
let arr=[] ;
for(let i=0;i<contentArr.length;i++){
    arr.push(contentArr[i]) ;
}
let isPresent=optionArr.includes("-s") ;
if(isPresent){
    for(let i=1;i<arr.length;i++){
        if(arr[i]=='' && arr[i-1]==''){
            arr[i]=null ;
        }
        else if(arr[i]=='' && arr[i-1]==null){
            arr[i]=null ;
        }
    }
    let tempArr=[] ;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=null){
            tempArr.push(arr[i]) ;
        }
    }
    arr=tempArr ;
    arr=arr.join("\n") ;
    console.log(arr) ;
}

// 4th task
let arr2=[] ;
for(let i=0;i<contentArr.length;i++){
    arr2.push(contentArr[i]) ;
}

let isPresent2=optionArr.includes("-n") ;
if(isPresent2){
   for(let i=0;i<arr2.length;i++){
       console.log(`${i+1}. ${arr2[i]}`) ;
   }
}

// 5th task
let arr3=[] ;
for(let i=0;i<contentArr.length;i++){
    arr3.push(contentArr[i]) ;
}
let isPresent3=optionArr.includes("-b") ;
let cnt=1 ;
if(!isPresent2 && isPresent3){
   for(let i=0;i<arr3.length;i++){
       if(arr3[i]!=='')
       console.log(`${cnt++}. ${arr3[i]}`) ;
   }
}




// // third task -> convert big line break into singular line break 
// function removeBreak(filePath) {
//     let content=fs.readFileSync(filePath) ;
//     content=""+content ;
//     let i=0 ;
//     let ans="" ;
//     let cnt=0 ;
//     while(i<content.length){
//        if(content[i] !== "\r\n"){
//         ans+=content[i] ;
//         cnt=0 ;
//        } 
//        else {
//            cnt++ ;
//            if(cnt===1) ans+=content[i] ;
//        }
//        i++ 
//     }
//     return ans ;
// }



// if(inputArr[0]==='-s'){
//     let filePath=inputArr[1] ;
//     let ans= removeBreak(filePath) ;
//     console.log(ans) ;
// }
// else {
//     let content=readFiles(inputArr) ;
//     console.log(content) ;
// }
