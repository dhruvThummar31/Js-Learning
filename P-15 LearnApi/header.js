// Withoiut pass header Api repose data in Html format but we need a raw data that's why send header with api call

let url = "https://icanhazdadjoke.com/";


async function getJoke(){
    let config = {headers : {Accept : "application/json"}}
    let res = await axios.get(url,config);
    console.log(res.data)
}

getJoke();