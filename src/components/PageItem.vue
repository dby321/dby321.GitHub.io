<template>
  <div>
    <div class="page-item-title" :style="styleObj" @click="toPage">
    </div>
    <div class="title">{{item.title}}</div>
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
  width: 4rem;
  height: 4rem;
  background: #fff;
  color: #000;
  border-radius: 10px;
}
.title{
  margin-top:1rem;
  color: white;

}


</style>