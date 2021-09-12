// npm i puppeteer
let puppeteer=require('puppeteer');
// creates headless browser
let browserStartPromise=puppeteer.launch({
    // visible
    headless:false,
    // type 1 sec   
    // slowMo:1000,
    //
    defaultViewport:null,
    //setting
    args:['--start-mazimized', "--disable-notifications"]

});
let page,browser;
browserStartPromise
.then(function (browserObj) {
    console.log("Browser Opened");
    // new tab
    browser=browserObj;
    let browserTabOpenPromise=browserObj.newPage();
    return browserTabOpenPromise ;
    }).then(function (newTab) {
        page=newTab;
         console.log("new tab opened");
         let gPageOpenPromise=page.goto("https://www.google.com/");
         return  gPageOpenPromise ;
    }).then(function () {
        console.log("Google home page opened");
        // search pepcoding on enter
        let waitTypingPromise=page.type("input[title='Search']","pepcoding");
        return waitTypingPromise ;
    }).then(function(){
        //keyboard -> specefic keys
        let enterWillBeDonePromise = page.keyboard.press("Enter")//,{delay:100}) ;
        return enterWillBeDonePromise;
     })
    // .then(function(){
    //     // wait for element to be visible on the page -> whenever you go to a new page
    //     let waitForElement=page.waitForSelector(".LC20lb.DKV0Md",{visible:true});
    //     return waitForElement;
    // })
    // .then(function(){
    //     let elemClickPromise=page.click('.LC20lb.DKV0Md');
    //     return elemClickPromise;
    // })
    .then(function(){
        console.log("Search results opened");
        let wcPromise=waitAndClick('.LC20lb.DKV0Md',page);
        return wcPromise ;
    })
    .then(function () {
        let waitPromise = page.waitFor(2000);
        return waitPromise;
    })
    .then(function(){
        console.log("Pepcoding opened");
        let elemClickPromise=page.click('.site-nav-li a[href="/resources"]');
        //let allLisPromise=page.$$(.site-nav li)
        // return allLisPromise
        // allLisPromsie[6].click()';
        return elemClickPromise;
    }).then(function () {
        let waitPromise=page.waitFor(2000);
        return waitPromise;
    })
    .then(function(){
        console.log("resources opened");
        let allTabsPromise=browser.pages();
        return allTabsPromise;
    })
    // .then(function(allTabsPromise) {
    //     let rTab=allTabsPromise[allTabsPromise.length-1];
    //     page=rTab;
    //     let waitLevel1Promise=rTab.waitForSelector('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]',{visible:true});
    //     return waitLevel1Promise;
    // }).then(function() {
    //     let clickLevel1Promise=page.click('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
    //     return clickLevel1Promise;
    // })
    .then(function(allTabsPromise) {
        let rTab=allTabsPromise[allTabsPromise.length-1];
        page=rTab;
        let waitLevel1Promise=waitAndClick('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]',rTab);
        return waitLevel1Promise;
    })
    .then(function () {
        console.log("level 1 will be opened");
    })

    // user defined promise based function -> it will return 
    // a promise that will be
    //  resolved when the user has waited for the element to appear as well as clicked
    function waitAndClick(selector,cpage) {
        return new Promise(function (resolve, reject) {
        let waitPromise=cpage.waitForSelector(selector,{visible:true});
        waitPromise.then(function(){
        let clickPromise=page.click(selector,{delay:100});
        return clickPromise;
    }).then(function () {
        resolve() ;
    }).catch(function(err){
        reject(err);
    })
        })
    }
       
// promise -> banner is not present or not -> the code will run
function handleIfNotPresent(selector,cPage) {
    return new Promise(function(resolve,reject){
        // wait clickModal
        let waitAndClickPromise=waitAndClick(selector,cpage);
        waitAndClickPromise
        .then(function(){
            resolve() ;
        })
        .catch(function(err){
            resolve();
        })
    })
}
