
let request=require("request")
let cheerio=require("cheerio")
let fs=require("fs")
console.log("Before") 
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard"
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
// global search tool
let searchTool=cheerio.load(html) ;
// css selector -> elem
// find 
// page -> tables -> row get
let elemRep=searchTool(".table.bowler tbody tr") ;
// let htmlData=""
// for(let i=0;i<elemRep.length;i++) {
//     htmlData+=searchTool(elemRep[i]).html() ;
// }
// fs.writeFileSync("tables.html",htmlData)
let bowler=""
let highWick=0 ;
for(let i=0;i<elemRep.length;i++) {
    // rows -> col
    let cols=searchTool(elemRep[i]).find("td") ;
    let name=searchTool(cols[0]).text().trim() ;
    let wickets=searchTool(cols[4]).text().trim() ;
    if(highWick<wickets) {
        highWick=wickets ;
        bowler=name ;
    }
    console.log(name+" "+wickets)
}

console.log(bowler)

}
console.log("After")