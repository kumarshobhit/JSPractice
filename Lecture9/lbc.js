let request=require("request")
let cheerio=require("cheerio")
console.log("Before") 
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary"
request(url,cb) ; 
function cb(error,response,html) {
    if(error) {
        console.log(error) ;
    }
    else if(response.statusCode === 404) {
        console.log("Page not found")
    }
    else {
        dataExtracter(html) ;
    }
}
function dataExtracter(html) {
// search tool
let searchTool=cheerio.load(html) ;
// css selector -> elem
// find 
let elemRep=searchTool(".match-comment-wrapper .match-comment-long-text p") ;
// text 
// kuch functions search tool ke upper he hote hain
let lbc=searchTool(elemRep[0]).text().trim()  ;
console.log("moduleName",lbc) ;
}
console.log("After")