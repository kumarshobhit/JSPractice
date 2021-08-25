let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
const path=require('path')
const pdfkit = require('pdfkit');



function getIssues(topicName,repoName,url) {
    request(url, cb);

function cb(error,response,html) {
      if(error) {
        console.log(error) ;
    }
    else if(response.statusCode === 404) {
        console.log("Page not found")
    }
    else {
        issues(html) ;
    }
}

function issues(html) {
    console.log(topicName,repoName);
    let searchTool=cheerio.load(html);
    let issuesArray=searchTool('.flex-auto.min-width-0.p-2.pr-3.pr-md-2');
    let arr=[];
    for(let i=0; i<issuesArray.length; i++){
        let aEle=searchTool(issuesArray[i]).find('a');
        let link=searchTool(aEle).attr('href');
        let fullLink='https://www.github.com'+link;
        arr.push(fullLink);
    }
     let topicPath=path.join(__dirname,"github",topicName);
    dirCreater(topicPath);
    let filePath=path.join(topicPath,repoName+".pdf");
    let text=JSON.stringify(arr);
    let pdfDoc = new pdfkit;
    pdfDoc.pipe(fs.createWriteStream(filePath));
    pdfDoc.text(text);
    pdfDoc.end();
}

}

module.exports={
    getIssues
}

function dirCreater(filePath) {
    if(fs.existsSync(filePath)==false) {
        fs.mkdirSync(filePath)
    }
}



