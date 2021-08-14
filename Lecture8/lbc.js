let request = require('request');
let cheerio = require('cheerio');
console.log("before");
//request("https://www.npmjs.com/package/cheerio", cbc);
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
request(url,cbc)
function cbc(error,response,html){
    if(error){
        console.log(error);
    }
    else if(response.statusCode == 404){
        console.log("Page not Found!")
    }else{
        //console.log(response);
       dataExtractor(html)
    }
}

function dataExtractor(html){
    let searchTool = cheerio.load(html);
    let elemRep = searchTool(".match-comment-wrapper .match-comment-long-text");
    //let moduleName = elemRep.text().trim();
    let lbc = searchTool(elemRep[0]).text();
    // console.log("moduleName : ",moduleName);
    console.log("lbs",lbc);

}
console.log("after");