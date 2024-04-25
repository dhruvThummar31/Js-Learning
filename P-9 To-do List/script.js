const item = document.querySelector("#item");
const toDo = document.querySelector("#to-do");


item.addEventListener("keyup",function(event){
 
    if(event.key == "Enter"){
        todo(this.value);
        this.value="";
    }
})

const todo = (text)=>{
    const newList = document.createElement('li');
    newList.innerHTML= `
    
    ${text}
    <i class="fas fa-times"></i>
    `;
    toDo.appendChild(newList);

    newList.addEventListener("click" ,()=>{
        newList.classList.toggle("done");
    })

    newList.addEventListener("dblclick",()=>{
        newList.remove();
    })

    newList.querySelector("i").addEventListener("click" ,function(){
        newList.remove();
    })
}

