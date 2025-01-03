<template>
  <div id="app" ref="app">
    <el-button type="info" icon="el-icon-timer"  @click="calendarDialogVisible = true" style="position:fixed;left:1rem;top:1rem">日程管理</el-button>
    <el-button type="info" icon="el-icon-check"  @click="todoListDialogVisible = true" style="position:fixed;left:1rem;top:5rem;margin-left: 0rem">TodoList</el-button>
    <PageTime/>
    <MainSearch style="margin-top: 20px" >
    </MainSearch>
    <PageList></PageList>

    <el-dialog  :visible.sync="calendarDialogVisible">
      <FullCalendar :options='calendarOptions' />
    </el-dialog>
    <el-dialog :visible.sync="todoListDialogVisible">
      <TodoList></TodoList>
    </el-dialog>
  </div>
</template>

<script>
import MainSearch from "@/components/MainSearch";
import PageList from "@/components/PageList";
import PageTime from "@/components/PageTime";
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { createEventId } from './utils/js/event-utils'
import TodoList from "@/components/TodoList.vue"
export default {
  name: 'App',
  components: {
    MainSearch,
    PageList,
    PageTime,
    FullCalendar,
    TodoList
  },
  data() {
    return {
      calendarDialogVisible:false,
      todoListDialogVisible:false,
      calendarOptions: {
        plugins: [dayGridPlugin,interactionPlugin],
        initialView: 'dayGridMonth',
        weekends: false,
        events: [
        ],
        eventClick:this.handleEventClick,
        selectable:true,
        select: this.handleDateSelect,
      }
    }
  },
  methods: {
    handleDateSelect(selectInfo) {
      console.log("selectInfo",selectInfo)
      let title = prompt('请输入你的日程');
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      if (title) {
        let event={
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        }
        localStorage.setItem("event:"+event.id,JSON.stringify(event))
        calendarApi.addEvent(event)
      }
    },
    handleEventClick(clickInfo) {
      if (confirm(`是否要删除日程【${clickInfo.event.title}】`)) {
        clickInfo.event.remove()
      }
    },
    getEvents(){
      for (let localStorageKey in localStorage) {
        if(localStorageKey.startsWith("event:")){
          let event = JSON.parse(localStorage[localStorageKey])
          this.calendarOptions.events.push(event)
        }
      }
    }
  },
  mounted(){
    this.getEvents()
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-size: cover;

}


.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
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
  margin: 1rem 0.5rem 1rem 0.5rem;
}

/deep/ .el-card__header {
  border-bottom: 0px;
  padding:2rem 0 0 2rem;
}

/deep/ .el-submenu__title:focus, .el-submenu__title:hover {
  background-color: rgba(255, 255, 255, 0.3); /* 半透明背景 */
  backdrop-filter: blur(1rem); /* 应用毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* Safari 和 Chrome 的前缀 */
}


.title {
  font-weight: bold;
  font-size: 2rem;
}


</style>
