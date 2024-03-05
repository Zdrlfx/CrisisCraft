
// import { list } from "./collegeScript.js";

import  {Node, LinkedList} from "./linkedlist.js";

async function loadCategoryScript(modulePath) {
    try {
        const module = await import(modulePath);
        // Use module data (e.g., module.scripts) for category scripts
        console.log(module.scripts);
        // Execute additional common code
        // ...
        // ...
        // ...
    } catch (error) {
        console.error(`Error loading ${modulePath}:`, error);
    }
}

// Add event listeners to category buttons
document.getElementById('cbut1').addEventListener('click', () => {
    loadCategoryScript('./collegescript.js');
});



//timerforpopup
const timerinfoDiv= document.getElementById('popupinfo');
const timesUp=()=>{
    timerinfoDiv.innerHTML= `Time's Up!`;
}
let time=10;
const TimeDiv= document.getElementById('timerCount');
const updateTimer=()=>{
    if(time>0){
    time--;
    TimeDiv.innerHTML=time;
    }
    else{
       timesUp();
    }
}


let count=0;    //counter for crisis popup frequency

//randomly choosing if we trigger crisis or not
const shouldTriggerCrisis=()=>{
    const randomNum= Math.random();
    return randomNum <0.5;
}
//maintaining crisis popup less than or equals 3 times
const countleft=()=>{
    if(count<3){
        return true;
    }
    else{
        return false;
    }
}


const triggerCrisis=()=>{
    if(shouldTriggerCrisis() && countleft()){
        count++;
        console.log('crisis');
        displayPopup();
    }
    else{
        return false;
    }
}

const displayPopup=()=>{
    const myInterval=setInterval(updateTimer, 1000)
    const popupContainer= document.querySelector('.popup');
    popupContainer.classList.add("openPopup");
    const crisisdiv= document.getElementById('popupinfo');
    crisisdiv.innerHTML=list.currentNode.crisis;
    const closeButton= document.getElementById('closepop');
    closeButton.onclick=()=>{
        popupContainer.classList.remove("openPopup");
        clearInterval(myInterval);
        time=10;
        TimeDiv.innerHTML=time;
    }
}


//dom manipulation of script content
const changeScript=()=>{
    const titleDiv= document.getElementById('title');
    titleDiv.innerHTML=list.currentNode.title;
    const scriptDiv= document.getElementById('script');
    scriptDiv.innerHTML= list.currentNode.script;
}

//traversing to next node in list and updating the dom
const nextscript=()=>{
    list.gotoNext();    //linkedlist operation for traversing forward
    changeScript();     //changing dom according to current node in linkedlist
}
const prevscript=()=>{
    list.gotoPrev();    //linkedlist operation for traversing backwards
    changeScript();     //changing dom according to current node in linkedlist
}
changeScript();
const nextbuttonDiv= document.getElementById('next');
nextbuttonDiv.onclick=()=>{
    if(list.currpos && list.currpos!=list.no_of_nodes-1){
        triggerCrisis();
    }
    nextscript();
}

const prevbuttonDiv= document.getElementById('back');
prevbuttonDiv.onclick=()=>{
    prevscript();
}


