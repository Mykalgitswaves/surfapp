<template>
  <div> TODO: THis whole section i guess lol. Whelp 🫥
    <p v-for=" data in buoyData[1]" :key="data">
      {{ data }}
    </p>
  </div>
  
</template>

<script>
export default {
  
  data(){
    return {
      buoyData: {}
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
      this.buoyData = response.data
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