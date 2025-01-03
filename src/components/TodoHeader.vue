<template>
  <div class="todo-header">
    <el-input v-model="todo" placeholder="请输入待办事项，[回车/enter]添加事项" @keyup.enter.native="handleAddTodo(todo)" style="width: 20rem;margin-right: 0.5rem"></el-input>
    <el-button type="primary" @click="handleAddTodo(todo)">添加事项</el-button>
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
.todo-header{
  margin-bottom: 1rem;
}
</style>