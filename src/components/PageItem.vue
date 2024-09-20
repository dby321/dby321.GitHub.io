<template>
  <div>
    <div class="page-item-title" :style="styleObj" @click="toPage">
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageItem',
  props: {
    item: Object
  },
  data()
  {
    return {
      styleObj: {
        background: `url(${this.item.icon})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }
    }
  },
  methods: {
    toPage(){
      window.open(this.item.url)
    }
  }

}
</script>
<style lang="less" scoped>
.page-item-title{
  width: 50px;
  height: 50px;
  background: #fff;
  color: #000;
  border-radius: 10px;
}
//设置svg背景色
.page-item-title svg{
  fill: #000;
}
</style>