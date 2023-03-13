<template>
  <div> TODO: THis whole section i guess lol. Whelp 🫥
    <div v-for="(obj, index) in buoyData" :key="index"> 
      <div v-for="(data, index) in obj" :key="index">
         {{ data.swh }} {{ data.swp }} {{ `${data.time[0]}  ${data.time[1]}  ${data.time[2]}  ${data.time[3]}  ${data.time[4]}` }} 
      </div>
    </div>
  </div>
</template>

<script>
import getFetch  from '../models/dataHandler';

export default {
  
  data(){
     
    return {
      buoyData: [],
    }
  },
  methods: {
  async format(){
    await getFetch(0,25)
    .then(data => {
      return this.buoyData.push(data)
    })
  }
  },
  mounted(){
    this.format()
    console.log(this.buoyData)
    
  }
}

</script>