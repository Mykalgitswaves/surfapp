export default async function getFetch(num1, num2){
    let dataBlobArr = []
    try {
        await fetch("http://localhost:3000/buoys"
        , {
            method: 'GET',
            headers: { 'Accept': 'application/json',}
        })
        .then(response => {
            var status = response.status
            // slice full day worth of info. 
            if( 200 <= status && status < 300){
                return response.json();
            }
        }).then(data => {
            var recent_data = data.data.slice(num1,num2)
            recent_data.forEach(obj => {
                var dataBlob =  {
                   'swh': obj.SwH,
                   'time': [obj['#YY'], obj.MM, obj.DD, obj.hh, obj.mm],
                   'swp': obj.SwP,
                   'swd': obj.SwD,
                }
                 dataBlobArr.push(dataBlob)
            })
        })
        return dataBlobArr
    } catch(err) {
      console.log(err)
      return 'It Broke'
    }
  }

