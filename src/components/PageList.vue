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
          title: "CSDN",
          url: "https://blog.csdn.net/",
          icon: "https://th.bing.com/th/id/R.7fe924a388019407fc54b34d5da62fbb?rik=XBn5wZGHw1iHzw&riu=http%3a%2f%2fpic.xfdown.com%2fuploads%2f2019-5%2f20195281546335697.png&ehk=xNJz0HTfHgaJnEgPqzaDYWKVraDAy31wwln5iCa%2bs0U%3d&risl=&pid=ImgRaw&r=0",
          desc: "CSDN"
        },
        {
          title: "V2EX",
          url: "https://www.v2ex.com/",
          icon: "https://th.bing.com/th/id/OIP.HaRLB-uXKOf0zFgHPf8pJgHaHa?rs=1&pid=ImgDetMain",
          desc: "V2EX"
        },
        {
          title: "掘金",
          url: "https://juejin.cn/",
          icon: "https://i-1.92sucai.com/2023/7/11/e9786a0b-3657-4391-92c5-0496dde5f90d.png",
          desc: "掘金"
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
          title: "简书",
          url: "https://www.jianshu.com/",
          icon: "https://th.bing.com/th/id/R.0f4e9d2b6657443048ff030206ae609e?rik=WjmySe77qtSLEw&riu=http%3a%2f%2fpic.danji100.com%2fupload%2f2021-1%2f2021111145019207.png&ehk=3E%2fXyyBjC98aHPrfqvj0CyA1aujguxij8LpUc2RZWxo%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          title:"豆瓣",
          url:"https://www.douban.com/",
          icon:"https://www.luibao.com/wp-content/uploads/2020/09/douban-app-logo.png",
          desc:"豆瓣"
        },
        {
          title:"小红书",
          url:"https://www.xiaohongshu.com/",
          icon:"https://th.bing.com/th/id/R.f530ed2200ab9a0a2b322610ac4740ea?rik=WIOB6SduurV8qQ&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2023%2f03-22%2f136555%2fwater_136555_698_698_.png&ehk=cbfkxHUCtJywCFnl%2bcHymGCD%2bLa2ecss4g7xfwECMDk%3d&risl=&pid=ImgRaw&r=0",
          desc:"小红书"
        },
        {
          title:"抖音",
          url:"https://www.douyin.com/",
          icon:"https://logodix.com/logo/51106.png",
        },
        {
          title: "微博",
          url: "https://weibo.com/",
          icon: "https://th.bing.com/th/id/R.7a26b2dd16ea1e67b79fb4040e3d3b4a?rik=LZkLDujijNeoHw&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2021%2f04-21%2f99520%2fwater_99520_698_698_.png&ehk=1boQVZBk48rN7lWp7Sxlqwid0X0cY5NBhgA2iQ4%2fwRM%3d&risl=&pid=ImgRaw&r=0",
          desc: "微博"
        },
    }
  },
  components: {
    PageItem
  }
}
</script>
<style lang="less" scoped>
.page-list {
  margin: 2rem 10rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

}
</style>