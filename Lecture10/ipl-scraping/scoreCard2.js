// let url='https://www.espncricinfo.com//series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard'
let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
const path=require('path')
let xlsx=require('xlsx')
function processSinglematch(url) {
    request(url, cb);
}
// request(url,cb)
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
    let data=searchTool('.match-info.match-info-MATCH.match-info-MATCH-half-width .description')
    data=data.text().trim().split(',');
    let matchNo=data[0]
    let venue=data[1] ;
    let date=data[2] ;

    for (let i = 0; i < bothInningArr.length; i++) {
        // team name
        let teamName=searchTool(bothInningArr[i]).find('h5').text().trim() ;
        teamName=teamName.split('INNINGS')[0] ;
        // opponent team
        let opponentIndex= i == 0 ? 1:0;
        let opponentName=searchTool(bothInningArr[opponentIndex]).find('h5').text().trim() ;
        opponentName=opponentName.split('INNINGS')[0];

        let batsmanArr=searchTool(bothInningArr[i]).find('.table.batsman tbody tr')
        for(let j=0;j<batsmanArr.length;j++) {
            let cols=searchTool(batsmanArr[j]).find("td") ;
            if(cols.length !== 8) continue ;
             let name=searchTool(cols[0]).text().trim() ;
             let runs=searchTool(cols[2]).text().trim() ;
             let balls=searchTool(cols[3]).text().trim() ;
             let fours=searchTool(cols[5]).text().trim() ;
             let sixes=searchTool(cols[6]).text().trim() ;
             let sr=searchTool(cols[7]).text().trim() ;
            processPlayer(teamName,name,runs,balls,fours,sixes,sr,opponentName,date,venue);
        }
        console.log("***********************************")
    }
}

function processPlayer(teamName,name,runs,balls,fours,sixes,sr,opponentName,date,venue) {
    name=name.split(' ');
    let playerName=name[0]+name[1] ;
    let teamPath=path.join(__dirname,"ipl",teamName);
    dirCreater(teamPath);
    let filePath=path.join(teamPath,playerName+".xlsx");
    let content=excelReader(filePath,playerName);
    let playerObj={
        teamName,
        playerName,
        runs,
        balls,
        fours,
        sixes,
        sr,
        opponentName,
        date,
        venue
    }
    content.push(playerObj);
    excelWriter(filePath,content,playerName);
}

function dirCreater(filePath) {
    if(fs.existsSync(filePath)==false) {
        fs.mkdirSync(filePath)
    }
}

function excelWriter(filePath,json,sheetName) {
    let newWb=xlsx.utils.book_new() ;
    let newWs=xlsx.utils.json_to_sheet(json) ;
    xlsx.utils.book_append_sheet(newWb,newWs,sheetName);
    xlsx.writeFile(newWb,filePath)

}

function excelReader(filePath,sheetName) {
    if(fs.existsSync(filePath) == false) {
        return [] ;
    }
    let wb=xlsx.readFile(filePath);
    let excelData=wb.Sheets[sheetName];
    let ans=xlsx.utils.sheet_to_json(excelData);
    return ans ;
}


module.exports={
    psm:processSinglematch
}

