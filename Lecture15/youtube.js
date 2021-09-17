
const puppeteer = require('puppeteer')
let page;
(async function fn() {
    let browser=await puppeteer.launch({
        headless:false,
        defaultViewport:null,
        args:['--start-maximized'],
    })
    page=await browser.newPage() ;
    await page.goto('https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq');
    await page. waitForSelector('h1[id="title"]');
    // single element
    let element = await page.$('h1[id="title"]')
    let value = await page. evaluate(el => el. textContent, element)
    console.log("title ",value)
    // multiple elements with
    element = await page.$("span.style-scope.yt-formatted-string");
     value = await page.evaluate(el => el. textContent,element)
    console.log("videos ",value)
    let videos=value ;
    // no of views - playlist
    let list = await page.$$(".style-scope.ytd-playlist-sidebar-primary-info-renderer");
    element=list[6];
     value = await page.evaluate(el => el. textContent,element);
    console.log("views ",value)
    // list first 100 videos console.table => video number,name, // time 
    //->
    let loopcount=Math.floor(videos/100);
    for(let i=0;i<loopcount;i++) {
        // load start 
        await page.click(".circle.style-scope.tp-yt-paper-spinner");
        // load finish
        await waitTillHTMLRendered(page);
        console.log("loaded the new videos");
    }

    // loader -> scroll
    // video name
    let videoNameElementList=await page.$$('a[id="video-title"]');
    // last video
    let lastVideo=videoNameElementList[videoNameElementList.length-1];
    // last video -> view
    await page.evaluate(function(elem){
        elem.scrollIntoView() ;
    },lastVideo) 

    // time 
     let timeList = await page.$$('span[id="text"]');

     let videosList=[] ;
       for(let i=0;i<timeList.length;i++) {
        let timeNTitleObj=await page.evaluate(getTimeAndTitle,timeList[i],videoNameElementList[i])
        videosList.push(timeNTitleObj);
      }
      console.table(videosList) ;
})()

function getTimeAndTitle(element1, element2) {
    return {
        time: element1.textContent.trim(),
        title: element2.textContent.trim()
    }
}


const waitTillHTMLRendered = async (page, timeout = 10000) => {
    const checkDurationMsecs = 1000;
    const maxChecks = timeout / checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCounts = 1;
    let countStableSizeIterations = 0;
    const minStableSizeIterations = 3;

    while (checkCounts++ <= maxChecks) {
        let html = await page.content();
        let currentHTMLSize = html.length;

        let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);

        console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);

        if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
            countStableSizeIterations++;
        else
            countStableSizeIterations = 0; //reset the counter

        if (countStableSizeIterations >= minStableSizeIterations) {
            console.log("Page rendered fully..");
            break;
        }

        lastHTMLSize = currentHTMLSize;
        await page.waitFor(checkDurationMsecs);
    }
};





