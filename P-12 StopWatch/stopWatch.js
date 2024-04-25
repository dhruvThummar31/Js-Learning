const clock = document.querySelector(".clock");
const btn_One = document.querySelector(".one");
const btn_Two = document.querySelector(".two");
const btn_Three = document.querySelector(".three");

let intervalId;
let sec = 0;
let min = 0;
let hr = 0;



const startStopWatch = () => {
     intervalId = setInterval(() => {
        if(sec < 59){
            sec++;
        } else{
            sec = 0;
            min++;
        }
        if(min >= 59){
            min = 0;
            hr++;
        }
        
       clock.innerHTML = (`${hr}:${min}:${sec}`);
    },1000);
}

const stopStopWatch = () => {
    clearInterval(intervalId);
}

const resetStopWatch =() => {
    clearInterval(intervalId);
    sec = 0;
    min = 0;
    hr = 0;
    clock.innerHTML = "00:00:00";
}

btn_One.addEventListener("click" , startStopWatch);
btn_Two.addEventListener("click" , stopStopWatch);
btn_Three.addEventListener('click' , resetStopWatch); 