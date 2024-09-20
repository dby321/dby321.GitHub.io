<template>
  <div class="todo-header">
    <el-input v-model="todo" size="big" placeholder="请输入待办事项" @keyup.enter.native="handleAddTodo(todo)"></el-input>
  </div>
</template>
<script>
import {mapActions} from "vuex";
export default {
  name: 'TodoHeader',
  data() {
    return{
      todoObj: {},
      todo:""
    }
  },
  methods: {
    ...mapActions(["addTodo"]),
    handleAddTodo(todo){
      console.log(todo)
      this.todoObj ={todo:todo, id: new Date().toString(),isDone:false}
      this.addTodo(this.todoObj)
    }
  }
}
</script>
<style scoped>

</style>