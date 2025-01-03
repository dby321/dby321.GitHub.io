<template>
  <div class="todo-footer">
    <el-button type="primary" plain @click="handleClearTodoList" style="margin-top: 2rem">清空</el-button>
  </div>
</template>
<script>
import {mapActions} from "vuex";
export default {
  name: 'TodoFooter',
  data(){
    return {
    }
  },
  methods:{
    ...mapActions(["clearTodoList"]),
    handleClearTodoList(){
      this.$store.commit("clearTodoList")
    }
  }
}
</script>
<style scoped>
.todo-footer{
}
</style>