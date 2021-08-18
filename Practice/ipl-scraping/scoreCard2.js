// let url='https://www.espncricinfo.com//series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard'
let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
function processSinglematch(url) {
    request(url, cb);
}
function cb(error, response, html) {

    if (error) {
        console.log(error); // Print the error if one occurred
    } else if (response.statusCode == 404) {
        console.log("Page Not Found")
    }
    else {
        // console.log(html); // Print the HTML for the request made 
        dataExtracter(html);
    }
}

function dataExtracter(html) {
    console.log("********************************")
    let searchTool = cheerio.load(html)
    let bothInningArr = searchTool(".Collapsible");
    for (let i = 0; i < bothInningArr.length; i++) {
        // team name
        let teamName=searchTool(bothInningArr[i]).find('h5').text().trim() ;
        teamName=teamName.split('INNINGS')[0] ;
        console.log(teamName)
        let batsmanArr=searchTool(bothInningArr[i]).find('.table.batsman tbody tr')
        for(let j=0;j<batsmanArr.length;j++) {
            let cols=searchTool(batsmanArr[j]).find("td") ;
            if(cols.length !== 8) continue ;
             let name=searchTool(cols[0]).text().trim() ;
             console.log(name) ;
        }
        console.log("***********************************")
    }
}


module.exports={
    psm:processSinglematch
}