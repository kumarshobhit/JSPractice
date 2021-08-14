let request=require("request")
let cheerio=require("cheerio")
console.log("Before") 
request("https://www.npmjs.com/package/cheerio",cb) ; 
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
let elemRep=searchTool('#readme>h1') ;
// text 
let moduleName=elemRep.text().trim() ;
console.log("moduleName",moduleName) ;
}
console.log("After")