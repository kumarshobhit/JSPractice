let fontSizeInput=document.querySelector('.font_size_input') ;
let fontFamilyInput=document.querySelector('.font_family_input') ;

fontSizeInput.addEventListener('change',e=>{
    let fontSize=fontSizeInput.value ;
    let address=addressInput.value ;
    let ridcidObj=getRidCidFromAddress(address) ;
    let toBeChangedCell=document.querySelector(`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`) ;
    // change fontSize property 
    toBeChangedCell.style.fontSize=fontSize+"px" ;
})
// select -> font family
fontFamilyInput.addEventListener('change',e=>{
    let fontFamily=fontFamilyInput.value ;
    let address=addressInput.value ;
    let ridcidObj=getRidCidFromAddress(address) ;
    let toBeChangedCell=document.querySelector(`.grid .cell[rId='${ridcidObj.rid}'][cId='${ridcidObj.cid}']`) ;
    // change fontSize property 
    toBeChangedCell.style.fontFamily=fontFamily;
})