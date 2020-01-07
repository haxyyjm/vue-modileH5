import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VueResource)
//配置全局http地址
// Vue.http.options.root = 'http://.....'
// Vue.http.options.emulateJSON = true //配置表单提交数据格式默认为json
// 按需导入mint-ui中所需要的组件
import { Header, Button, Lazyload,Switch,Swipe, SwipeItem   } from 'mint-ui';
import 'mint-ui/lib/style.css';
//导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css' //mui字体图标也需要导入
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
Vue.use(Lazyload); //懒加载
import moment from 'moment'
//定义全局过滤器 ===>时间格式化
Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss'){
  return moment(dateStr).format(pattern)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
