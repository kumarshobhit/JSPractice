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
(async function fn() {
    try {
        let browserObj= await browserStartPromise;
        console.log("Browser Opened");
        // new tab
        browser=browserObj;
        page = await browserObj.newPage();
        console.log("new tab opened");
         await page.goto(loginLink);
        await page.type("input[name='username']",emailpassObj.email,{delay:50});
        console.log("username entered") ;
        await page.type("input[type='password']",emailpassObj.password,{delay:50});
        console.log("password entered") ;
        await  page.click('button[data-analytics="LoginPassword"]',{delay:100});
        console.log('log in done')
        await waitAndClick('.topic-card a[data-attr1="algorithms"]',page);
        console.log("algorithms page opened") ;
        await waitAndClick('input[value="warmup"]',page) ;
        await page.waitFor(3000);
        console.log(" warm up algorithms page opened") ;
        let questionsArr=await page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:100}) ;
        console.log("all challenges opened");
        // n number of questions first
        for (let i = 0; i < questionsArr.length; i++) {
            await questionSolver(page, questionsArr[i],codesObj.answers[i]);
        }
        console.log("all challenges solved");
        
    }
    catch (err) {
        console.log(err);
    }
})(); 


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
            reject(err);
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
          return page.click('.hr-monaco__run-code',{delay:50}) ;
        })
        .then(function(){
            resolve() ;
        }).catch(function(err){
            console.log(err) ;
            reject(err) ;
        })
    })
}


//     // user defined promise based function -> it will return 
//     // a promise that will be
//     //  resolved when the user has waited for the element to appear as well as clicked
//     function waitAndClick(selector,cpage) {
//         return new Promise( async function (resolve, reject) {
//             try {
//                   await cpage.waitForSelector(selector,{visible:true});
//                   let clickPromise= await page.click(selector,{delay:100});
//                   return clickPromise;
//             }
//             catch(err) {
//                 console.log(err) ;
//             }
//     }
//     .then(function(){
//         resolve() ;
//     })
//     .catch(function(err){
//         reject(err);
//     })
//     )
// }



       
// // promise -> banner is not present or not -> the code will run
// function handleIfNotPresent(selector,cPage) {
//     return new Promise( async function(resolve,reject){
//         try {
//             // wait clickModal
//         let waitAndClickPromise=waitAndClick(selector,cpage);
//         waitAndClickPromise
//         }
//         catch (err) {
//             console.log(err) ;
//         }
//     }
//         .then(function(){
//             resolve() ;
//         })
//         .catch(function(err){
//             reject(err);
//         })
//     )
// }
// // return promise that will submit a given qeustion
// function questionSolver(page,question,answer) {
//     return new Promise( async function (resolve, reject) {
//         try {
//         await question.click() ;
//         await  waitAndClick(".monaco-editor.no-user-select.vs",page);
//         await waitAndClick('input[type="checkbox"]',page) ;
//         await page.waitForSelector(".text-area.custominput",{visible:true})
//         await  page.type('.text-area.custominput',answer,{delay:10}) ;
//         await page.keyboard.down('Control');
//          await page.keyboard.press('A',{delay:100});
//         await page.keyboard.press('X',{delay:100});
//         await page.keyboard.up('Control');
//         await waitAndClick(".monaco-editor.no-user-select.vs",page);
//         await page.keyboard.down('Control');
//         await page.keyboard.press('A',{delay:100});
//         await page.keyboard.press('V',{delay:100});
//         await page.keyboard.up('Control');
//         await page.click('.hr-monaco__run-code',{delay:50}) ;

//         }
//         catch(err){
//             console.log(err) ;
//         }
//     }
//         .then(function(){
//             resolve() ;
//         }).catch(function(err){
//             console.log(err) ;
//             reject() ;
//         })
//     )
// }
