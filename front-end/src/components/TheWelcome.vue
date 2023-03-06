<template>
  <div> TODO: THis whole section i guess lol. Whelp 🫥
    <p v-html="SwH"></p>
    <p v-html="SwP"></p>
    <p v-html="SwD"></p>
  </div>
  
</template>

<script>
export default {
  
  data(){
    return {
      buoyData: {},
      SwH: [],
      Date: [],
      SwP: [],
      SwD: []
    }
  },
  methods: {
    async getFetch(){
      try {
      const response = await fetch("http://localhost:3000/buoys"
      , {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      }).then((response) => {
        return response.json()
      })
        // Save all buoy data to one object?
        this.buoyData = response.data;
      
        // #TODO move these methods to models, convert to functions and handle logic there. 
        var recent_data = response.data.slice(0,20)
        // function we probably need in here? maybe. 
        recent_data.forEach(d => {
          console.log(d)
          // Swell height
          this.SwH.push(d.SwH);

          // Dates
          var YY = d['#YY'];
          var MM = d.MM;
          var DD = d.DD;
          var hh = d.hh;
          var mm = d.mm;

          // Lets see what ds makes most sense here. might be good to have an object containing 
          // arrays. or an array containing arrays. could also use strings ig.
          
          this.Date.push(
            {
              YY: YY,
              MM: MM,
              DD: DD,
              hh: hh,
              mm: mm
            })
      

          //swell period
          this.SwP.push(d.SwP)

          // Swell direction
          this.SwD.push(d.SwD)
      });
      return this.buoyData
      } catch(err) {
        console.log(err)
        return 'It Broke'
      }
    }
  },
  mounted(){
    this.getFetch()
  }
}

</script>