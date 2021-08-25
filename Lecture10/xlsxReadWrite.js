let fs=require('fs')
let xlsx=require('xlsx')
let data=require('../Practice/data.json')


// write
// wb -> filePath, ws-> name, json data
// new worksheet
// let newWb=xlsx.utils.book_new() ;
// // json data -> excel format convert
// let newWs=xlsx.utils.json_to_sheet(data) ;
// // -> newwb,ws,sheet name
// xlsx.utils.book_append_sheet(newWb,newWs,"sheet-1");
// // filepath
// xlsx.writeFile(newWb,"abc.xlsx")

function excelWriter(filePath,json,sheetName) {
    let newWb=xlsx.utils.book_new() ;
    let newWs=xlsx.utils.json_to_sheet(json) ;
    xlsx.utils.book_append_sheet(newWb,newWs,sheetName);
    xlsx.writeFile(newWb,filePath)

}

function excelReader(filePath,sheetName) {
    if(fs.existsSync(filePath) == false) {
        return [] ;
    }
    let wb=xlsx.readFile(filePath);
    let excelData=wb.Sheets[sheetName];
    let ans=xlsx.utils.sheet_to_json(excelData);
    return ans ;
}
// read
// workbook get
let wb=xlsx.readFile('abc.xlsx');
// sheet
let excelData=wb.Sheets['sheet-1'];
// sheet data get
let ans=xlsx.utils.sheet_to_json(excelData);
console.log(ans) ;