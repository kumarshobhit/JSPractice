let request=require("request")
let cheerio=require("cheerio")
let fs=require("fs")
let scoreCardObj=require("./scoreCard2")
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595"
request(url,cb) ;
function cb(err, response,html) {
    if(err) {
        console.log(error) ;
    }
    else if(response.statusCode === 404) {
        console.log("Page not found")
    }
    else {
        mainPage(html) ;
    }
}

function mainPage(html) {
    let searchTool=cheerio.load(html) ;
    let elemRep=searchTool('.widget-items.cta-link')
    let aElem=searchTool(elemRep).find('a') ;
    let link=aElem.attr('href') ;
    let fullLink="https://www.espncricinfo.com/"+link
    request(fullLink,cb2) ; 
}

function cb2(error,response,html) {
      if(error) {
        console.log(error) ;
    }
    else if(response.statusCode === 404) {
        console.log("Page not found")
    }
    else {
        allMatch(html) ;
    }
}

function allMatch(html) {
    let searchTool=cheerio.load(html) ;
    let elemRep=searchTool('a[data-hover="Scorecard"]')
    for(let i=0;i<elemRep.length;i++) {
    let link=searchTool(elemRep[i]).attr('href') ;
    let fullLink="https://www.espncricinfo.com/"+link ;
    console.log(fullLink) ;
    scoreCardObj.psm(fullLink) ;
}
}