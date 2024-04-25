const slide = document.querySelectorAll(".slider");

let counter = 0;

slide.forEach((slide ,index )=>{
    slide.style.left = `${index * 100}%`
})

const goNext = ()=>{
    counter++;
    slideImage();
}

const goprev = () =>{
    counter--;
    slideImage();
}

const slideImage = () =>{
    slide.forEach((slide) => {
        slide.style.transform = `transalteX(-${counter*100}%)`
    })
}