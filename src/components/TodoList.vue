<template>
<div class="todo-list">
  <TodoHeader></TodoHeader>
  <TodoContent></TodoContent>
  <TodoFooter ></TodoFooter>
</div>
</template>
<script>

import TodoContent from "@/components/TodoContent.vue";
import TodoFooter from "@/components/TodoFooter";
import TodoHeader from "@/components/TodoHeader.vue";
import { mapState } from 'vuex';


export default {
  name: 'TodoList',
  components: {
    TodoHeader,
    TodoContent,
    TodoFooter
  },
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{

  },
  computed: {
    ...mapState({
      todoList: state => state.todoList
    })
  }
}
</script>
<style>
.todo-list{

}
</style>