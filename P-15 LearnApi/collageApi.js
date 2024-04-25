let url = "http://universities.hipolabs.com/search?name="

let btn = document.querySelector("button");



btn.addEventListener("click", async()=>{

    let country = document.querySelector("#input").value;
    console.log(country);
    let colArr =  await getCollage(country);

    dataPrint(colArr);
    console.log(colArr);
  
})

async function getCollage(country){
    try{
        let res  = await axios.get(url+country);
        return res.data
        // console.log(res.data)
    } catch(Error){
        console.log("Error",Error);
    }
    
}


function dataPrint(colArr){
    let list = document.querySelector("ul");
    list.innerText = ""
    for(col of colArr){
        let li = document.createElement("li")
        li.innerText = col.name
        list.append(li);
    }
}
