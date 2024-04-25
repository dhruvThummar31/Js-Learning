var crsr = document.querySelector(".cursor");
var  container = document.querySelector("#container");
console.log(container)

document.addEventListener("mousemove" , (dets)=>{
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
})