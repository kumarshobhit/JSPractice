const loginLink = "https://www.hackerrank.com/auth/login";
const emailpassObj = require("./secrets");
const codesObj = require("./codes");
// console.log(codesObj.answers[0]);
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
         let gPageOpenPromise=page.goto(loginLink);
         return  gPageOpenPromise ;
    })
    .then(function() {
        console.log("enter your username") ;
          let userPromise =  page.type("input[name='username']",emailpassObj.email,{delay:50});
        return userPromise ;
    })
    .then(function() {
        console.log("enter your password") ;
          let passwordPromise =  page.type("input[type='password']",emailpassObj.password,{delay:50});
        return passwordPromise ;
    })
    .then(function() {
        console.log("time to click the button !");
         let elementClickPromise = page.click('button[data-analytics="LoginPassword"]',{delay:100});
        return elementClickPromise;
    })
    .then(function() {
        console.log("landing page");
         let elementClickPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]',page);
        return elementClickPromise;
    })
    .then(function() {
        console.log("algorithms page opened") ;
        let getToWarmUp=waitAndClick('input[value="warmup"]',page) ;
        return getToWarmUp ;
    })
    .then(function() {
        console.log(" warm up algorithms page opened") ;
        let waitFor3SecondsPromise=page.waitFor(3000);
        return waitFor3SecondsPromise ;
    })
    .then(function() {
        console.log("all challenges opened");
        let allChallengeArrPromise=page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:100}) ;
        return allChallengeArrPromise ;
    })
    .then(function(questionsArray){
        // n number of questions first
        console.log("number of questions",questionsArray.length) ;
        let qWillBeSolvedPromise=questionSolver(page,questionsArray[0],codesObj.answers[0]) ;
        return qWillBeSolvedPromise ;
    })
    .then(function(){
        console.log("Question is solved") ;
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
// return promise that will submit a given qeustion
function questionSolver(page,question,answer) {
    return new Promise(function (resolve, reject) {
        let qWillBeClickedPromise=question.click() ;
        // code read 
        // hk editor -> ctlr A + ctlr X
        // code type
        qWillBeClickedPromise
        // click
        // code type 
        // ctrl A + ctrl X
        // click on Editor
        // ctrl A + ctrl V
        .then(function(){
            let waitForEditorToBeInFocus = waitAndClick(".monaco-editor.no-user-select.vs",page);
            return waitForEditorToBeInFocus ;
        })
        .then(function(){
            let checkBoxClick=waitAndClick('input[type="checkbox"]',page) ;
            return checkBoxClick ;
        })
        .then(function(){
            return page.waitForSelector(".text-area.custominput",{visible:true})
        })
        .then(function(){
            return page.type('.text-area.custominput',answer,{delay:10}) ;
        })
        .then(function(){
            let ctrlIsPressed=page.keyboard.down('Control');
            return ctrlIsPressed ;
        })
        .then(function(){
            let AIsPressed=page.keyboard.press('A',{delay:100});
            return AIsPressed ;
        })
        .then(function(){
            let XIsPressed=page.keyboard.press('X',{delay:100});
            return XIsPressed ;
        })
        .then(function(){
            let ctrlIsPressed=page.keyboard.up('Control');
            return ctrlIsPressed ;
        })
        .then(function(){
            let waitForEditorToBeInFocus = waitAndClick(".monaco-editor.no-user-select.vs",page);
            return waitForEditorToBeInFocus ;
        })
        .then(function(){
            let ctrlIsPressed=page.keyboard.down('Control');
            return ctrlIsPressed ;
        })
        .then(function(){
            let AIsPressed=page.keyboard.press('A',{delay:100});
            return AIsPressed ;
        })
        .then(function(){
            let XIsPressed=page.keyboard.press('V',{delay:100});
            return XIsPressed ;
        })
        .then(function(){
            let ctrlIsPressed=page.keyboard.up('Control');
            return ctrlIsPressed ;
        })
        .then(function(){
            console.log("code run") ;
          return page.click('hr-monaco__run-code',{delay:50}) ;
        })
        .then(function(){
            resolve() ;
        }).catch(function(err){
            console.log(err) ;
            reject() ;
        })
    })
}
