var uid=new ShortUniqueId() ;
let colors=["pink","blue","green","black"] ;
let defaultColor="black" ;
let input=document.querySelector(".task_input")  ;
let mainContainer=document.querySelector(".main-container") ;
input.addEventListener("keydown",function(event){
    if(event.code=="Enter" && input.value) {
        // console.log("task submitted") ;
        let id=uid() ;
        createTask(id,input.value) ;
        input.value="" ;
    }
})

function createTask(id,input) {
    let newTask=document.createElement("div") ;
    newTask.setAttribute("class", "task_container") ;
    newTask.innerHTML=`
            <div class="task_header ${defaultColor}"></div>
            <div class="task_main-container">
                <div class="task_id">${id}</div>
                <div class="text">${input}</div>
            </div>`
    
    mainContainer.appendChild(newTask) ;

    // add event listener for color change 
    let header=document.querySelector('.task_header') ;

    header.addEventListener('click',function(e) {
        let cColor=header.classList[1] ;
    let idx=colors.indexOf(cColor) ;
    let nextIdx=(idx+1)%4 ;
    let nextColor=colors[nextIdx] ;
    header.classList.remove(cColor) ;
    header.classList.add(nextColor) ;
    console.log('hello')
    })
    
}

// filter the tasks
// for(let i=0 ; i<colors.length ; i++) {
//     let element=document.querySelector(`.${colors[i]}`) ;
//     element.addEventListener('click',function(e){
//         filterTasks(colors[i]) ;
//     }) 
// }

// function filterTasks(color) {
//     let children=document.querySelectorAll('.task_container') ;
//     for(let i=0; i<children.length;i++) {
//        let taskHeader=children[i].querySelector('.task_header') ;
//        let Ccolor=taskHeader.classList[1] ;
//        if(Ccolor==color) {
//         children[i].style.display='block' ;
//        }
//        else {
//          children[i].style.opacity='none' ;
//        }
//     }
// }

// event bubbling

//  let element=children[i] ;
//         let eleChildren=element.childNodes ;
//         let newEle=eleChildren[1] ;
//         let newClass=newEle.classList[1] ;