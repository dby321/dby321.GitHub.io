<template>
  <div>

    <el-menu class="el-menu-vertical-demo" :collapse-transition="false" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background="">
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-api"></i>
          <span slot="title">
            你的书签
          </span>
        </template>
        <template v-if="menuList.length>0">
          <el-tree :data="menuList" :props="defaultProps" @node-click="handleNodeClick">
             <span class="custom-tree-node" slot-scope="{ node }">
               <el-link v-if="node.data.url" type="primary" >
                 <!--<i class="iconfont" :class="node.data.logo"></i>-->
                 <img :src="node.data.logo" alt="">
                 {{ node.label }}
               </el-link>
               <el-link v-else type='default'>{{ node.label }}</el-link>
            </span>
          </el-tree>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      isCollapse: false,
      menuList: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      webProps: {
        label: "icon"
      }
    }
  },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleNodeClick(data, node) {
      console.log(data, node);
      if (node.data.url) {
        console.log(node.data.url)
        window.open(node.data.url);
      } else {
        // do nothing
      }
    },
    getLocalStorage() {
      let menuList = JSON.parse(window.localStorage.getItem("menuList"));
      if (menuList) {
        this.menuList = menuList;
      } else {
        this.menuList = [];
      }
    }

  },
  mounted() {
    // JSON.parse(window.localStorage.getItem("menuList"))
    let that = this;
    window.addEventListener("setItemEvent", function (e) {
      if (e.key === "menuList") {
        that.menuList = JSON.parse(e.newValue);
      }
    })
    this.getLocalStorage();
  },
  watch: {}

}
</script>

<style lang="less" scoped>

/deep/ .el-menu{
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5); /* 半透明背景 */
  backdrop-filter:blur(10px); /* 应用毛玻璃效果 */
  -webkit-backdrop-filter:blur(10px); /* Safari 和 Chrome 的前缀 */
  border:0px;
 positon:sticky;
  top:0px;
}



</style>
