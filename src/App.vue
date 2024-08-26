<template>
  <div id="app" ref="app">

    <el-row>
      <el-col :span="4">
        <LeftMenu></LeftMenu>
      </el-col>
      <el-col :span="20">
        <MainSearch style="margin-top: 20px"></MainSearch>
        <el-tabs v-model="activeName" style="width:25%" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="百度" name="baidu">
            <div v-for="(item,index) in baiduNews.slice(0,10)" :key="index"
                >
              <el-link :href="item.link" :type="index%2==0?'primary':'success'" target="_blank" >
                {{ item.index }}.{{ item.title}} 🔥{{ item.hotValue }}
              </el-link>
            </div>
          </el-tab-pane>
          <el-tab-pane label="知乎" name="zhihu">
            <div v-for="(item,index) in zhihuNews.slice(0,10)" :key="index"
                >
              <el-link :href="item.link" :type="index%2==0?'primary':'success'" target="_blank">
                {{ item.index }}.{{ item.title }} 🔥{{ item.hotValue }}
              </el-link>
            </div>
          </el-tab-pane>
          <el-tab-pane label="微博" name="weibo">
            <div v-for="(item,index) in weiboNews.slice(0,10)" :key="index"
                >
              <el-link :href="item.link" :type="index%2==0?'primary':'success'" target="_blank">
                {{ item.index }}.{{ item.title }} 🔥{{ item.hotValue }}
              </el-link>
            </div>
          </el-tab-pane>
        </el-tabs>
        <el-row :gutter="20" style="margin-top: 20px;">
          <el-col :span="6">
            <el-card body-style="height:400px" class="box-card" style="height: 400px">
              <div slot="header" class="clearfix">
                <span class="title">美女图片</span>
                <el-button style="float: right; padding: 3px 0" type="primary" @click="getBeautifulGirlImages">
                  点我获得一张美女图片
                </el-button>
              </div>
              <img :src="beautifulGirlImage" class="beautifulGirlImage">
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card body-style="height:400px" class="box-card" style="height: 400px">
              <div slot="header" class="clearfix">
                <span class="title">天气查询</span>
                <el-button style="float: right; padding: 3px 0" type="primary" @click="getWeather">点我获取天气
                </el-button>
              </div>
              <span><el-tag type="success">{{ weatherInfo.province }}-{{ weatherInfo.city }} {{ weatherInfo.weather }} {{ weatherInfo.temperature }}度 发布时间 {{ weatherInfo.reporttime }}</el-tag>

              </span>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card body-style="height:400px" class="box-card" style="height: 400px">
              <div slot="header" class="clearfix">

                <span class="title">磁力链接导航</span>
              </div>
              <span v-for="(item,index) in ciliList" :key="index">
                <el-tooltip class="item" content="访问不到多想想自己的原因哈哈哈~~~" effect="dark"
                            placement="top-start">
                   <el-link :href="item.url" :type="index%2==0?'primary':'success'"
                            target="_blank">{{ item.name }}</el-link>
                </el-tooltip>

                &nbsp;&nbsp;
              </span>
            </el-card>
          </el-col>
          <!--<el-col :span="24">-->
          <!--  <el-card body-style="height:800px" class="box-card" style="height: 800px">-->
          <!--    <div slot="header" class="clearfix">-->
          <!--      <el-button @click="clickToGetAnotherXjjVedio" type="primary"  style="width:200px;height:50px">点我真的换一个小姐姐视频</el-button>-->
          <!--    </div>-->
          <!--    <div class="player-container" style="display: flex;flex-direction: row">-->
          <!--       &lt;!&ndash;TODO 播放器控件&ndash;&gt;-->
          <!--      <div id="player" v-html="xjjData"></div>-->
          <!--    </div>-->
          <!--  </el-card>-->
          <!--</el-col>-->

          <el-col :span="24">
            <el-card body-style="height:400px" class="box-card" style="height: 400px">
              <vue-markdown style="text-align: left" :source="markdownText"></vue-markdown>
          </el-card>
          </el-col>

          <el-col :span="24">
            <el-card body-style="height:200px" class="box-card" style="height: 200px">
              <div slot="header" class="clearfix">

                <span class="title">联系我们</span>
              </div>
              <a href="https://github.com/dby321" target="_blank"><img
                  src="https://img.shields.io/badge/Github-grey"></a>
              &nbsp;
              <a href="#" target="_blank"><img src="https://img.shields.io/badge/QQ邮箱-1017834057@qq.com-blue"></a>
              &nbsp;
              <a href="#" target="_blank"><img src="https://img.shields.io/badge/微信-dby970522-green"></a>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-card class="uplood-card">
      <div slot="header">
        <span>😀上传你的书签</span>
      </div>
      <div class="box">
        <label>
          <span class="el-button el-button--primary" style="margin: 0 0 20px 0">上传书签</span>
          <input id="file" style="display: none" type="file">
        </label>
        <el-button id="btn" type="success" @click="submit()">确定</el-button>
      </div>
    </el-card>

  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue'
import bookmarkToJson from "@/utils/js/bookmarkToJson";
import MainSearch from "@/components/MainSearch.vue";
import VueMarkdown from "vue-markdown";
import { Octokit } from "octokit";
export default {
  name: 'App',
  mixins: [bookmarkToJson],
  components: {
    MainSearch,
    LeftMenu,
    VueMarkdown,
  },

  data() {
    return {
      beautifulGirlImage: "",
      cityCode: "420100",// 城市编码，默认是武汉
      extensions: "base",
      outputFormat: "JSON",
      weatherInfo: {},
      fanhaoText: "",// 番号搜索字段
      baiduNews: [],
      zhihuNews:[],
      doubanNews:[],
      weiboNews:[],
      activeName:"baidu",
      ciliList: [
        {
          "name": "BTDigg DHT Search Engine",
          "url": "https://btdig.com/"
        },
        {
          "name": "Torrent Kitty",
          "url": "https://www.torrentkitty.tv/search/"
        },
        {
          "name": "Torrent Kitty Alternative",
          "url": "https://www.torrentkitty.se/"
        },
        {
          "name": "Torrent Kitty Alternative",
          "url": "https://www.torrentkitty.io/"
        },
        {
          "name": "磁力天堂",
          "url": "https://www.sky2026.xyz/"
        },
        {
          "name": "SkrBT",
          "url": "https://skrbt007.xyz/"
        },
        {
          "name": "雨花阁",
          "url": "https://www.yhgbb.xyz/"
        },
        {
          "name": "BT Kitty",
          "url": "http://cnbtkitty.cc/"
        },
        {
          "name": "磁力蜘蛛",
          "url": "http://www.eclzz.site/"
        },
        {
          "name": "老牛BT",
          "url": "http://bt.laoniubt.cc/"
        },
        {
          "name": "无极磁链 ØMagnet",
          "url": "https://6mag.net/"
        },
        {
          "name": "磁力蚂蚁",
          "url": "http://www.eclmy.space/"
        },
        {
          "name": "磁力蜘蛛搜索",
          "url": "http://www.btmovi.net/"
        },
        {
          "name": "838888磁力链接",
          "url": "https://838888.net/"
        },
        {
          "name": "BT兔子",
          "url": "http://www.btrabbit.cyou/"
        },
        {
          "name": "磁力柠檬",
          "url": "https://lemon20.xyz/"
        },
        {
          "name": "The Pirate Bay",
          "url": "https://thepiratebay.org/index.html"
        },
        {
          "name": "The Pirate Bay Mirror",
          "url": "http://thepiratebay.ee/"
        },
        {
          "name": "Torrentz2 Search Engine",
          "url": "https://torrentsmirror.com/"
        },
        {
          "name": "Torrentz2 Mirror",
          "url": "https://torrentz2.is/"
        },
        {
          "name": "种子搜_种子帝",
          "url": "https://zhongziso8.com/"
        },
        {
          "name": "MAG磁力站",
          "url": "http://mag234.com/home.html"
        },
        {
          "name": "Nyaa",
          "url": "https://nyaa.si/"
        },
        {
          "name": "Zooqle",
          "url": "https://zooqle.com/"
        }
      ],// 磁力链接网站
      markdownText:"# 测试",
      xjjVedioData:{},
      xjjData:"",
    }
  },
  methods: {
    async getBeautifulGirlImages() {
      let res = await this.$axios.get("https://image.anosu.top/pixiv/json");
      console.log(res);
      this.beautifulGirlImage = res.data[0].url
      console.log(this.beautifulGirlImage)
      this.$message({
        message: `获取美女图片成功`,
        type: 'success'
      })
    },
    getWeather() {
      this.$axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?key=aa27ed324dfe80f2d6b9505fc5d057fb&&city=${this.cityCode}&&extensions=${this.extensions}&&output=${this.outputFormat}`).then(res => {
        console.log("weatherInfo", res);
        this.weatherInfo = res.data.lives[0]
        this.$message({
          message: `${this.weatherInfo.province} ${this.weatherInfo.city} ${this.weatherInfo.weather} ${this.weatherInfo.temperature}℃ 发布时间 ${this.weatherInfo.reporttime}`,
          type: 'success'
        })
      })
    },
    getNews(type) {
      this.$axios.get(`https://api.oioweb.cn/api/common/fetchHotSearchBoard?type=${type}`).then(res => {
        console.log("News", res)
        if(type === "baidu"){
          this.baiduNews = res.data.result
        }else if(type === "zhihu"){
          this.zhihuNews = res.data.result
        }else if(type==="weibo"){
          this.weiboNews = res.data.result
        }
        this.$message({
          message: `获取${type}新闻成功`,
          type: 'success'
        })
      })
    },
    getBingBackgroundImage() {
      this.$axios.get(`https://api.paugram.com/bing/?info`).then(res => {
        console.log("bingImage", res)

        this.$refs.app.style.background = `url("${res.data.link}") `;
        this.$refs.app.style.backgroundAttachment="fixed";
      })
    },
    handleClick(tab, event) {
      console.log("tab,event",tab, event);
      if(tab.name=="baidu"){
        this.getNews("baidu")
      }else if(tab.name=="zhihu"){
        this.getNews("zhihu")
      }else if (tab.name=="weibo"){
        this.getNews("weibo")
      }
    },
    async getVueMarkdownNote(){
      // https://github.com/octokit/core.js#readme
      const octokit = new Octokit({
        auth: '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'
      })

      let res =await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'dby321',
        repo: 'learningNotes',
        path: 'Vue笔记.md',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      console.log("github",res)
      let markdown=await this.$axios.get(res.data.download_url)
      console.log("markdown",markdown)
      this.markdownText=markdown.data
    },
    async getXjjVideo() {
      console.log("待完善")
    },
    clickToGetAnotherXjjVedio(){
      this.getXjjVideo();
    }
  },
  mounted() {
    this.getBeautifulGirlImages();
    this.getWeather();
    this.getNews("baidu");
    this.getBingBackgroundImage();
    this.getVueMarkdownNote()
    this.getXjjVideo();
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

.beautifulGirlImage {
  width: 300px;
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
