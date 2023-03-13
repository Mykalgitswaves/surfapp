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
import swellHeight from '../models/swellFetch'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  components: {
    Line
  },
  data(){
    return {
      buoyData: [],
      chartDataSwell: []
    }
  },
  methods: {
  async format(){
    await getFetch(0,25)
    .then(data => {
      return this.buoyData.push(data)
    })
  },
  async formatSwellHeight(){
    await swellHeight()
      .then(data => {
        return this.chartDataSwell.push(data)
      })
    }
  },
  mounted(){
    this.format()
    this.formatSwellHeight()
    console.log(this.buoyData)
    console.log(this.chartDataSwell)
    
  }
}

</script>