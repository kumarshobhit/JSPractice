const  url='https://github.com/topics'
const cheerio=require("cheerio")
const request=require("request")
const fs=require("fs")
const path=require('path')
const issueObj=require('./issues')
// home page
const githubPath=path.join(__dirname,'github')
dirCreater(githubPath)

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
    let searchTool=cheerio.load(html);
    let topics=searchTool('.no-underline.d-flex.flex-column.flex-justify-center');
    for(let i=0;i<topics.length;i++) {
    let link=searchTool(topics[i]).attr('href') ;
    let fullLink="https://www.github.com/"+link
    request(fullLink,cb2) ; 
    }  
}


function cb2(error,response,html) {
      if(error) {
        console.log(error) ;
    }
    else if(response.statusCode === 404) {
        console.log("Page not found")
    }
    else {
        topic(html) ;
    }
}

function topic(html) {
    let searchTool=cheerio.load(html);
    let topicName=searchTool('.h1').text().trim() ;
    let repos=searchTool('.f3.color-text-secondary.text-normal.lh-condensed');
    for(let i=0;i<8;i++){
        let twoAnchors=searchTool(repos[i]).find('a');   
        let link=searchTool(twoAnchors[1]).attr('href');
        let fullLink='https://www.github.com'+link+"/issues";
        let repoName=searchTool(twoAnchors[1]).text().trim();
            issueObj.getIssues(topicName,repoName,fullLink)
    }
    
}


function dirCreater(filePath) {
    if(fs.existsSync(filePath)==false) {
        fs.mkdirSync(filePath)
    }
}





