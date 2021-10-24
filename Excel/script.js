
// A -> Z  
// Ascii values
// for loop for printing alphabets
let tRow=document.querySelector(".top_row") ;
for(let i=0;i<26;i++) {
// create cells
let div=document.createElement('div');
div.setAttribute("class","cell")
div.textContent=String.fromCharCode(65+i) ;
tRow.appendChild(div) ;
}

let leftCol=document.querySelector(".left_col") ;
for(let i=1;i<=100;i++) {
    let div=document.createElement('div');
    div.setAttribute("class","cell")
    div.textContent=i;
    leftCol.appendChild(div) ;
}
// 2D loop -> column * loops ;
// grid

let grid=document.querySelector(".grid") ;
for(let i=0;i<100;i++) {
    let row=document.createElement("div");
    row.setAttribute("class","row") ;
    for(let j=0;j<26;j++) {
        let div=document.createElement("div");
        div.setAttribute("class","cell") ;
        // div.textContent=i+","+j ;
        div.setAttribute("contentEditable","true") ;
        // every cell identification required for
        div.setAttribute("rId",i) ;
        div.setAttribute("cId",j) ;
        row.appendChild(div) ;
    }
    grid.appendChild(row) ;
}

// if i click on any of the cells
let allGridCells=document.querySelectorAll(".grid .cell") ;
// allGridCells[0].click() ;
let addressInput=document.querySelector(".address_input") ;
// -> then i will get the address
// print it to -> address bar
for(let i=0;i<allGridCells.length;i++) {
    allGridCells[i].addEventListener("click",e=>{
    // previous cell address 
    let prevAddress=addressInput.value ;
    if(prevAddress!='') {
        let prevObj=getRidCidFromAddress(prevAddress) ;
        let prevCell=document.querySelector(`.grid .cell[rId='${prevObj.rid}'][cId='${prevObj.cid}']`) ;
        prevCell.style.border="0.5px solid grey" ;
        prevCell.style.borderRight="none";
        prevCell.style.borderTop="none";
    }
    let rid=allGridCells[i].getAttribute("rId");
    let cid=allGridCells[i].getAttribute("cId");
    rId=Number(rid) ;
    cId=Number(cid) ;
    addressInput.value=String.fromCharCode(cId+65)+(rId+1); 
    allGridCells[i].style.border="2px solid green";
    })
}

// get first element
let firstCell=allGridCells[0] ;
firstCell.click() ; 

function getRidCidFromAddress(address) {
    // A-Z, 1-100
    // A20
    let AsciiValue=address.charCodeAt(0) ;
    let cid=AsciiValue-65 ;
    let rid=Number(address.substring(1))-1 ; //
    return {
        rid:rid, cid:cid
    }
}