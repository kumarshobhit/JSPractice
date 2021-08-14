let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard"
let request=require("request") ;
let  cheerio=require("cheerio") ;
// myTeamName name venue data opponentTeamName result
request(url,cb) ;
function cb(error,response,html) {
    if(error) {
        console.log(error) ;
    }
    else if(response.statusCode==404) {
        console.log("Page not found") ;
    }
    else {
        dataExtracter(html) ;
    }
}

function dataExtracter(html) {
    let searchTool=cheerio.load(html) ;
    let anchorrep=searchTool('a[data-hover="View All Results"]') ;
    let link=anchorrep.attr("href") ;
    // console.log("link",link) ;
    let fullAllmatchPageLink=`https://www.espncricinfo.com${link}` ;
    console.log(fullAllmatchPageLink) ;
    // go to all match page 
    request(fullAllmatchPageLink,allMatchPageCb) ;
}

function allMatchPageCb(error,response,html) {
     if(error) {
        console.log(error) ;
    }
    else if(response.statusCode==404) {
        console.log("Page not found") ;
    }
    else {
        getAllScoreCardLink(html) ;
    }
    
}

function getAllScoreCardLink(html) {
    console.log('******************') ;
    let searchTool=cheerio.load(html) ;
    let scorecardsArr=searchTool("a[data-hover='Scorecard']") ;
    for(let i=0;i<scorecardsArr.length;i++) {
        let link=searchTool(scorecardsArr[i]).attr("href") ;
        let fullAllmatchPageLink=`https://www.espncricinfo.com${link}` ;
        console.log(fullAllmatchPageLink) ;
    }
}

// find ka use case - ek element search kar liya uske aage koi element nikalna hain