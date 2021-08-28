
let request=require("request")
let cheerio=require("cheerio")
let fs=require("fs")
let bowlersArr=[];
let bowlersCount=0;
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard"
console.log("Before")
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

for (let i = 0; i < elemRep.length; i++) {
        let cols = searchTool(elemRep[i]).find("td");
        if (cols.length > 1) {
            bowlersCount++;
        }
    }

for(let i=0;i<elemRep.length;i++) {
    // rows -> col
    let cols=searchTool(elemRep[i]).find("td") ;
    if(cols.length>1) {
        let aElem=searchTool(cols[0]).find('a') ;
    let link=aElem.attr('href') ;
    let fullLink="https://www.espncricinfo.com/"+link
    request(fullLink,newcb) ; 
    }
}

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
        // check
        if(bowlersArr.length==bowlersCount) {
            console.log(bowlersArr);
            sortBirthDay(bowlersArr);
        }
    }
}

function getBirthday(html) {
    let searchTool=cheerio.load(html) ;
    let headingsArr=searchTool(".player-card-description")
    let age=searchTool(headingsArr[2]).text();
    let name=searchTool(headingsArr[0]).text();
    bowlersArr.push({"name":name,"age":age});
}

console.log("After")

function sortBirthDay(bowlersArr) {
    // sort 
    // age -> convert      

    console.log("hello");
    let newArr=bowlersArr.map(singleFn) ;
    function singleFn(obj) {
        let name=obj.name ;
        let age=obj.age ;
        let ageArr=obj.age.split(" ") ;
        let years=ageArr[0].slice(0,ageArr[0].length-1) ;
        let days=ageArr[1].slice(0,ageArr[1].length-1) ;
        let ageInDays=Number(years) * 365 + Number(days)
        return {
            name: name,
            ageInDays: ageInDays,
            age: age
        }
    }
    let sortedArr=newArr.sort(cb);
    // console.table(sortedArr) ;
    function cb(objA,objB) { 
        return objA.ageInDays-objB.ageInDays ;
    }

    let finalArr=sortedArr.map(removeageIndays);
    function removeageIndays(obj) {
        return {
            name:obj.name,
            age:obj.age
        }
    }
    console.table(finalArr);
}
