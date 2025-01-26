<template>
  <div class="page-list">
    <PageItem style="margin:2rem 2rem" v-for="item in pageList" :key="item.title" :item="item"/>
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
          icon: require("@/assets/icon/Github.png"),
          desc: "Github"
        },
        {
          title: "Gitee",
          url: "https://gitee.com/",
          icon: require("@/assets/icon/Gitee.png"),
          desc: "Gitee"
        },
        {
          title: "CSDN",
          url: "https://blog.csdn.net/",
          icon: require("@/assets/icon/CSDN.png"),
          desc: "CSDN"
        },
        {
          title: "V2EX",
          url: "https://www.v2ex.com/",
          icon: require("@/assets/icon/V2EX.png"),
          desc: "V2EX"
        },
        {
          title: "掘金",
          url: "https://juejin.cn/",
          icon: require("@/assets/icon/Juejin.png"),
          desc: "掘金"
        },
        {
          title: "Bilibili",
          url: "https://www.bilibili.com/",
          icon: require("@/assets/icon/Bilibili.png"),
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
.page-list {
  margin: 2rem 50rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

}
</style>