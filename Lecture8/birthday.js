// npm i request
// wikipedia http status codes
let request=require("request")
// npm i cheerio
let cheerio=require('cheerio') ;
// data extract -> cheerio
console.log("Before")
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary"
request("https://www.npmjs.com/package/cheerio",cb) ;
function cb(error,response,html) {
    // console.log("error:",error) ; Print the error if one occured
    // console.log('body:',html) ;  Print the HTML for the google homepage
    if(error) {
        console.log(error) ; //print the error if one occurred
    }
    else if(response.statusCode == 404){
        console.log("Page not found") ;
    }
    else {
        // console.log(html) ; // Print the html for the page  
        dataExtracter(html) ;
    }
}

function dataExtracter(html) {
    // search tool
    // let searchTool=cheerio.load(html) ;
    // // css selector -> elem 
    // let elemRep=searchTool('#readme>h1') ;
    // // text
    // let moduleName=elemRep.text().trim() ;
    // console.log("moduleName",moduleName) ;

    // search tool
    let searchTool=cheerio.load(html) ;
    // global tool
    // page -> tables -> row get
    
    let bowlers=searchTool(".table.bowler tbody tr") ;
    let htmlData="" ;
    for(let i=0;i<bowlers.length;i++){
        // row -> col
        let  cols=searchTool(bowlers[i]).find("td") ;
        let aElem=searchTool(cols[0]).find('a') ;
        let link=aElem.attr('href') ;
        // link
        // new page -> link get -> complete -> request
        let fullLink=`https://www.espncricinfo.com${link}` ;
        request(fullLink,ncb) ;
    }
}

function ncb(error,response,html) {
    if(error){
        console.log(error) ; // print the error if one occured
    }
    else if(response.statusCode==404){
        console.log("Page not found")
    }
    else {
        // console.log(html) ;
        console.log("********************") ;
        getBirthDay(html) ;

    }
}

function getBirthday(html) {
    let searchTool=cheerio.load(html) ;
    let headingArr=searchTool(".player-card-description") ;
    let age=searchTool(headingArr[2]) ;
}

console.log("After") ;