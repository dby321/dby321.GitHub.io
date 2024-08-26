import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import tool from "./utils/js/tool";
import "@/assets/iconfont/iconfont"
import "@/assets/iconfont/iconfont.css"
// 改用normalize
// import "@/utils/css/reset.css"
import 'normalize.css'
import axios from 'axios'; // 导入上面创建的axios实例
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'



Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(tool);
Vue.use(VueDPlayer)
// 将axios实例绑定到Vue原型上
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
}).$mount('#app')
