let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;

let btns = ["yellow" ,"green" ,"gray" , "orange"]
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started === false){
        console.log("Game start");
        started = true;

        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level is ${level}`;
    console.log(h3.innerText);

    let radIdx = Math.floor(Math.random()*3) ;
    let rdmColor = btns[radIdx];
    let rdmBtn = document.querySelector(`.${rdmColor}`);
    // console.log(radIdx);
    // console.log(rdmColor);
    // console.log(rdmBtn);
    gameSeq.push(rdmColor);
    //random button flash
    btnflash(rdmBtn);
}

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
     btn.classList.remove("flash")
    },200)
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
     btn.classList.remove("userflash")
    },200)

}

function checkAns(idx){
   
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000)
        }
    }else {
        h3.innerText = `Game over! Press any key to start`
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1)
}

let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}

