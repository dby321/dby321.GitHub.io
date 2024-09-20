<template>
  <div class="page-list">
    <PageItem v-for="item in pageList" :key="item.title" :item="item"/>
  </div>
</template>
<script>
import PageItem from "./PageItem";

export default {
  name: 'PageList',
  data() {
    return {
      pageList: [
        {
          title: "Github",
          url: "https://github.com/",
          icon: require('../assets/icon/github.png'),
          desc: "Github"
        },
        {
          title: "Gitee",
          url: "https://gitee.com/",
          icon: require('../assets/icon/gitee.svg'),
          desc: "Gitee"
        },
        {
          title: "CSDN",
          url: "https://www.csdn.net/",
          icon:require('../assets/icon/csdn.svg')
        },
        {
          title:"掘金",
          url: "https://juejin.cn/",
          icon:'https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg'
        },
        {
          title:"开源中国",
          url: "https://www.oschina.net/",
          icon:require('../assets/icon/oschina.svg')
        },
        {
          title: "Bilibili",
          url: "https://www.bilibili.com/",
          icon:require('../assets/icon/bilibili.svg')
        },
      ]
    }
  },
  components: {
    PageItem
  }
}
</script>
<style lang="less" scoped>
.page-list{
  margin:50px 600px;
  display: flex;
  justify-content: space-around;;

}
</style>