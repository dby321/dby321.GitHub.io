<template>
  <div>
    <div v-for="todo in todoList" :key="todo.id" style="font-size: 1rem">
      <el-checkbox v-model="todo.isDone" @change="handleIsDone(todo)"></el-checkbox>
      <span v-if="!todo.isDone">{{todo.todo}}</span>
      <span v-else style="text-decoration: line-through;">{{todo.todo}}</span>
      <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(todo)"></el-button>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";
import {mapActions} from "vuex";

export default {
  name: 'TodoContent',
  data(){
    return {
    }
  },
  computed:{
    ...mapState({
      todoList: state => state.todoList
    })
  },
  methods:{
    ...mapActions(["isDone"]),
    handleDelete(todo){
      this.$store.dispatch("deleteTodo",todo)
    },
    handleIsDone(todo){
      this.isDone(todo)
    }
  },


}
</script>
<style scoped>
.todo-header{
  margin-bottom: 20px;
}
</style>