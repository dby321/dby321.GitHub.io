import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todoList: JSON.parse(localStorage.getItem("todoList"))
    },
    mutations: {
        addTodo(state, todo){
            state.todoList.push(todo)
            localStorage.setItem("todoList", JSON.stringify(state.todoList))
        },
        clearTodoList(state){
            state.todoList = []
            localStorage.setItem("todoList", JSON.stringify(state.todoList))
        },
        isDone(state,todo){
            todo.isDone = !todo.isDone
            for(let i = 0; i < state.todoList.length; i++){
                if(state.todoList[i].id === todo.id){
                    state.todoList[i].isDone = todo.isDone
                }
            }
            localStorage.setItem("todoList", JSON.stringify(state.todoList))
        }
    },
    actions: {
        addTodo(context,todo){
            this.commit("addTodo",todo)
        },
        deleteTodo(context,todo){
            for(let i = 0; i < this.state.todoList.length; i++){
                if(this.state.todoList[i].id === todo.id){
                    this.state.todoList.splice(i,1)
                }
            }
            localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
        },
        editTodo(context,index, todo){
            this.state.todoList.splice(index,1,todo)
            localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
        },
        getTodoList(){
            return this.state.todoList
        },
        clearTodoList({commit}){
            commit("clearTodoList")
        },
        isDone({commit},todo){
            commit("isDone",todo)
        }
    }
})
export default store