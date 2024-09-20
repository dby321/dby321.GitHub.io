<template>
  <div>

    <div style="font-size: 10rem;color:white;margin-top: 10rem;">{{time}}</div>
    <div>
      <el-tag style="margin-right: 1rem">
        <span>{{date}}</span>
      </el-tag>
      <el-tag>
        <span>{{weatherInfo.province}}</span>
        <span>{{weatherInfo.city}}</span>
        天气：<span>{{weatherInfo.weather}}</span>
        温度：<span>{{weatherInfo.temperature}}</span>
      </el-tag>
    </div>
  </div>
</template>
<script  >
export default{
  name:"PageTime",
  mounted() {
    this.getNowTime();
    this.getWeather();
  },
  data(){
    return{
      time: "",
      date:"",
      weatherInfo:{},
      cityCode: "420100",// 城市编码，默认是武汉
      outputFormat: "JSON",
      extensions: "base",
    }
  },
  methods:{
    getWeather() {
      this.$axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?key=aa27ed324dfe80f2d6b9505fc5d057fb&&city=${this.cityCode}&&extensions=${this.extensions}&&output=${this.outputFormat}`).then(res => {
        this.weatherInfo = res.data.lives[0]
      })
    },
    getNowTime(){
      let time = new Date();
      setInterval(() => {
        time = new Date();
        this.time =time.toLocaleTimeString();
        this.date= time.toLocaleDateString();
      }, 1000)
  }
  }
}

</script>
<style lang="less" scoped>

</style>