//NpM - npm i request
let request = require("request");
let cheerio = require("cheerio");

console.log("Before....");

request("https://www.npmjs.com/package/cheerio", cb);

function cb(error, response, html) {
    if (error) {
        console.log(error);
    }
    else if (response.statusCode == 404) {
        console.log("Page Not Found....");
    }
    else {
        console.log("html-> ");
        dataExtracter(html);
    }
}

function dataExtracter(html){
    
    let searchTool = cheerio.load(html);

    let elemRep = searchTool("#readme>h1");

    let moduleName = elemRep.text().trim();
    
    console.log("moduleName is",moduleName);

}
console.log("After....");