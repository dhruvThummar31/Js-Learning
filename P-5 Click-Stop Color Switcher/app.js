const body = document.body;
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const para = document.querySelector(".para")

var aa;
btn1.addEventListener("click" , ()=>{
     aa = setInterval((e)=>{
        let color = "#";
        const hex = "0123456789ABCDEF";
        for(let i =0;i<6 ;i++){
            color += hex[Math.floor(Math.random()*16)]
        }
        body.style.backgroundColor = color;
        para.innerHTML = color;
    },500);
})

btn2.addEventListener("click",()=>{
    clearInterval(aa);
})

