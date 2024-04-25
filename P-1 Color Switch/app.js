const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const h2 = document.querySelector("h2");
 
buttons.forEach(function(buttons){
    buttons.addEventListener("click" , (e)=>{
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        h2.innerHTML = "ohhh yehhh ....!!!!"
    })
})