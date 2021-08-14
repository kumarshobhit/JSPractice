
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

for(let i=0;i<elemRep.length;i++) {
    // rows -> col
    let cols=searchTool(elemRep[i]).find("td") ;
    let aElem=searchTool(cols[0]).find('a') ;
    let link=aElem.attr('href') ;
    let fullLink="https://www.espncricinfo.com/"+link
    request(fullLink,newcb) ; 
}

function newcb(error,response,html) {
    if(error) {
        console.log(error) ;
    }
    else if(response.statusCode === 404) {
        console.log("Page not found")
    }
    else {
        // dataExtracter(html) ;
        console.log("*****************************")
        getBirthday(html) ;
    }
}

function getBirthday(html) {
    let searchTool=cheerio.load(html) ;
    let searchElem=searchTool('.player-card-description')
    let birthday=searchTool(searchElem[1]).text().trim() ;
    let name=searchTool(searchElem[0]).text().trim() ;
    console.log(name+" "+birthday)
}
}
console.log("After")

// hw to sort the bowlers according to their ages