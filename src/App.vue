<template>
  <div id="app" ref="app">
    <div ref="time" style="font-size: 200px;color:white;margin-top: 200px;">
      <span>{{time}}</span>
    </div>
    <MainSearch style="margin-top: 100px" >
    </MainSearch>
    <PageList></PageList>
  </div>
</template>

<script>
import MainSearch from "@/components/MainSearch";
export default {
  name: 'App',
  components: {
    MainSearch,
  },

  data() {
    return {
      beautifulGirlImage: "",
      cityCode: "420100",// 城市编码，默认是武汉
      extensions: "base",
      outputFormat: "JSON",
      weatherInfo: {},
      time: "",
    }
  },
  methods: {
    getWeather() {
      this.$axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?key=aa27ed324dfe80f2d6b9505fc5d057fb&&city=${this.cityCode}&&extensions=${this.extensions}&&output=${this.outputFormat}`).then(res => {
        console.log("weatherInfo", res);
        this.weatherInfo = res.data.lives[0]
      })
    },
    getBingBackgroundImage() {
      this.$axios.get(`https://api.paugram.com/bing/?info`).then(res => {
        console.log("bingImage", res)

        this.$refs.app.style.background = `url("${res.data.link}") `;
        this.$refs.app.style.backgroundSize="100%";
      })
    },
    getNowTime(){
      let time = new Date();
      setInterval(() => {
        time = new Date();
        // ${time.toLocaleDateString()}
        this.time = ` ${time.toLocaleTimeString()}`;
      }, 1000)
    }


  },
  mounted() {
    this.getWeather();
    this.getBingBackgroundImage();
    this.getNowTime();
  },

}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  width: 100%;
  height: 100%;
}

.uplood-card {
  width: 200px;
  height: 200px;
  position: fixed;
  left: 0px;
  bottom: 20px;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}



.box-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/deep/ .el-card {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3); /* 半透明背景 */
  backdrop-filter: blur(10px); /* 应用毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* Safari 和 Chrome 的前缀 */
  border: 0px;
  margin: 10px 5px 10px 5px;
}

/deep/ .el-card__header {
  border-bottom: 0px;
  padding:20px 0 0 20px;
}

/deep/ .el-submenu__title:focus, .el-submenu__title:hover {
  background-color: rgba(255, 255, 255, 0.3); /* 半透明背景 */
  backdrop-filter: blur(10px); /* 应用毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* Safari 和 Chrome 的前缀 */
}


.title {
  font-weight: bold;
  font-size: 24px;
}


</style>
