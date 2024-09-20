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
          icon: "https://th.bing.com/th/id/OIP.TvyUGx7vFI7P7thCaflvMwHaE8?rs=1&pid=ImgDetMain",
          desc: "Github"
        },
        {
          title: "Gitee",
          url: "https://gitee.com/",
          icon: "https://th.bing.com/th/id/OIP.2e2Mx4ADkZMrW1XrJZ2HRAAAAA?rs=1&pid=ImgDetMain",
          desc: "Gitee"
        },
        {
          title: "Bilibili",
          url: "https://www.bilibili.com/",
          icon: "https://android-artworks.25pp.com/fs08/2021/04/15/0/110_a1c6eb62a7b1139bee62358a2f0ebf02_con_130x130.png",
        },
        {
          title: "知乎",
          url: "https://www.zhihu.com/",
          icon: "https://photo.16pic.com/00/56/07/16pic_5607016_b.jpg",
        },
        {
          title: "网易云音乐",
          url: "https://music.163.com/",
          icon: "https://th.bing.com/th/id/R.491e3a8d4b6789a136e1b348bb3aaa42?rik=uKGaPoj2%2bg1FiA&riu=http%3a%2f%2fp3.music.126.net%2ftBTNafgjNnTL1KlZMt7lVA%3d%3d%2f18885211718935735.jpg&ehk=GFBIdPYSElI0a47lMBlmmM%2fn8aqC7yMDe6t00IkC%2fbU%3d&risl=&pid=ImgRaw&r=0"
        }
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