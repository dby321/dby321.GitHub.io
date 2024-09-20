<template>
  <div id="app" ref="app">
    <PageTime></PageTime>
    <MainSearch style="margin-top: 1rem" >
    </MainSearch>
    <PageList></PageList>
  </div>
</template>

<script>
import MainSearch from "@/components/MainSearch";
import PageList from "@/components/PageList";
import PageTime from "@/components/PageTime";
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
export default {
  name: 'App',
  components: {
    MainSearch,
    PageList,
    PageTime,
  },

  data() {
    return {

    }
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
  background: url("https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-size: cover;

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
  margin: 1rem 0.5rem 1rem 0.5rem;
}

/deep/ .el-card__header {
  border-bottom: 0px;
  padding:2rem 0 0 2rem;
}

/deep/ .el-submenu__title:focus, .el-submenu__title:hover {
  background-color: rgba(255, 255, 255, 0.3); /* 半透明背景 */
  backdrop-filter: blur(1rem); /* 应用毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* Safari 和 Chrome 的前缀 */
}


.title {
  font-weight: bold;
  font-size: 2rem;
}


</style>
