<template>
  <div class="wrapper"> TODO: THis whole section i guess lol. Whelp 🫥
    <Line 
      v-if="loaded"
      class="line_chart"
      :data="chartData"
      :width="width"
      :height="height"
    ></Line>
    
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
  props: {
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
  },
  data(){
    return {
      buoyData: [],
      chartDataSwell: [],
      loaded: false
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
  computed: {
    chartData(){
      if(this.chartDataSwell){
        return {
          labels: this.chartDataSwell,
            datasets: [{
              data: [this.chartDataSwell],
              backgroundColor: '#f87979',
              borderColor: '#FC2525',
            }]
      }
    }
    }
  },
  mounted(){
    this.format()
    this.formatSwellHeight()
    console.log(this.buoyData)
    console.log(this.chartDataSwell)
    if(this.chartDataSwell){
      this.loaded = true
    }
    
  }
}

</script>

<style>
 .wrapper {
  margin: auto;
 }

 .line_chart {
  max-width:  788px;
  width: 80vw;
  height: auto;
  margin: auto;
 }


</style>