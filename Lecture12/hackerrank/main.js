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
        // search temp mail on enter
        let waitTypingPromise=page.type("input[title='Search']","temp mail");
        return waitTypingPromise ;
    }).then(function(){
        //keyboard -> specefic keys
        let enterWillBeDonePromise = page.keyboard.press("Enter")//,{delay:100}) ;
        return enterWillBeDonePromise;
    }).then(function() {
        console.log("temp mail tab opended");
        let waitForElement=page.waitForSelector(".LC20lb.DKV0Md",{visible:true});
        return waitForElement;
    }).then(function(){
        let elemClickPromise=page.click('.LC20lb.DKV0Md');
        return elemClickPromise;
    })
    .then(function(){
        console.log("temp mail opended");
        let waitForElement=page.waitForSelector("#click-to-copy",{visible:true});
        return waitForElement;
    }).then(function () {
        let waitPromise=page.waitFor(7000);
        return waitPromise;
    })
    .then(function(){
        let elemClickPromise=page.click('#click-to-copy');
        return elemClickPromise;
    })
    .then(function(){
        let newTabPromise=browser. newPage();
        return newTabPromise;
    })
    .then(function(newTab){
        page=newTab;
        console.log("new tab opened");
         let gPageOpenPromise=page.goto("https://www.google.com/");
         return  gPageOpenPromise ;

    })
    .then(function () {
        console.log("Google home page opened");
        // search hackerrank on enter
        let waitTypingPromise=page.type("input[title='Search']","hackerrank");
        return waitTypingPromise ;
    })
    .then(function(){
        //keyboard -> specefic keys
        let enterWillBeDonePromise = page.keyboard.press("Enter")//,{delay:100}) ;
        return enterWillBeDonePromise;
    })
    .then(function(){
        console.log("hackerrank tab opened");
        let waitForElement=page.waitForSelector(".LC20lb.DKV0Md",{visible:true});
        return waitForElement;
    }).then(function(){
        let elemClickPromise=page.click('.LC20lb.DKV0Md');
        return elemClickPromise;
    })
    // .then(function(){
    //     console.log("hackerrank opended");
    //     let allLisPromise=page.$$('.main-navigation--right li')
    //     return allLisPromise;
    // })
    // .then(function(allElem){
    //     console.log(allElem);
    //     // let elementWillBeClickedPromise=allElem[1].click();
    //     // return elementWillBeClickedPromise;
    // })
    .then(function(){
        console.log("hackerrank opended");
        let elemClickPromise=page.waitForSelector('.main-navigation--right li a[href="https://www.hackerrank.com/access-account/?h_r=home_v2&h_l=header"]');
        return elemClickPromise 
    })
    .then(function(){
        let elemClickPromise=page.click('.main-navigation--right li a[href="https://www.hackerrank.com/access-account/?h_r=home_v2&h_l=header"]',{delay:200});
        return elemClickPromise;
    })
    //  .then(function(){
    //     console.log("login/signup page opended");
    //     let allLisPromise=page.$$('.fl-rich-text a')
    //     return allLisPromise;
    // })
    // .then(function(allElem){
    //     let elementWillBeClickedPromise=allElem[2].click();
    //     return elementWillBeClickedPromise;
    // })
    .then(function(){
        console.log("sign/login page opended");
        let elemClickPromise=page.waitForSelector('.main-navigation--right li a[href="https://www.hackerrank.com/access-account/?h_r=home_v2&h_l=header"]');
        return elemClickPromise 
    })
    .then(function(){
        let elemClickPromise=page.click('.main-navigation--right li a[href="https://www.hackerrank.com/access-account/?h_r=home_v2&h_l=header"]',{delay:200});
        return elemClickPromise;
    })
    .then(function(){
        console.log("sign up page opended");
    })

    <a href="https://www.hackerrank.com/signup?h_r=login&amp;h_l=body_middle_left_text"><strong>Sign up</strong></a>

    
    