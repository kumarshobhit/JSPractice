
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
    // no of views - playlist
    let list = await page.$$(".style-scope.ytd-playlist-sidebar-primary-info-renderer");
    element=list[6];
     value = await page.evaluate(el => el. textContent,element);
    console.log("views ",value)
    // list first 100 videos console.table => video number,name, // time 
      list = await page.$$('a[id="video-title"]');
      let videosList=[] ;
      for(let i=0;i<list.length;i++) {
    element=list[i];
     value = await page.evaluate(el => el. textContent,element);
     value = value.replace(/\s+/g, ' ').trim();
     videosList.push({"Name":value,"Number":i+1});
      }
      list = await page.$$('span[id="text"]');
       for(let i=0;i<list.length;i++) {
    element=list[i];``
     value = await page.evaluate(el => el. textContent,element);
     value = value.replace(/\s+/g, ' ').trim();
     videosList[i].time=value ;
      }
      console.table(videosList) ;
})()






