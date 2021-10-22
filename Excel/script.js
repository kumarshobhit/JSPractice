
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