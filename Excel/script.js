
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
    let row=document.createElement('div');
    row.setAttribute("class","row") ;
    for(let j=0;j<26;j++) {
        let div=document.createElement('div');
        div.setAttribute("class","cell") ;
        // div.textContent=i+","+j ;
        div.setAttribute("contentEditable",true) ;
        // every cell identification required for
        div.setAttribute('rid',i) ;
        div.setAttribute('cid',j) ;
        row.appendChild(div) ;
    }
    grid.appendChild(row) ;

}