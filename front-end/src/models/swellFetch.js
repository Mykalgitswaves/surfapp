
// ----–----------––––––--–-–--–-–--–-–--–-––-–--–--–-- 
// Will generate decimal num of swell height from api.
// ----–----------––––––--–-–--–-–--–-–--–-––-–--–--–-- 
// ----–----------––––––--–-–--–-–--–-–--–-––-–--–--–--
 
export default async function swellHeight(){
    let dataArr = [];
    try {
        await fetch("http://localhost:3000/buoys"
        , {
            method: 'GET',
            headers: { 'Accept': 'application/json',}
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            // Parse decimal rounded num of swell height
            dataArr = data.data.slice(1,6).map(obj => parseFloat(obj.SwH))
            console.log(dataArr)
        })
        return dataArr
    } catch(err){
        console.log(err)
    }
}