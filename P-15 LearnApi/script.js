let btn = document.querySelector("button")

let url = "https://catfact.ninja/fact";


btn.addEventListener("click" , async()=>{
    let fact =  await getFact();
    let para  = document.querySelector("p");
    para.innerText = fact;
})

async function getFact(){
    try{
        let res = await axios.get(url)
        return res.data.fact;
    } catch(error){
        console.log("Error - ", error);
        return"Result not Found";

    }
   
}