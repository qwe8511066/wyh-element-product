import Vue from 'vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import * as filters from './filters' // global filters
import publicComponents from "@/utils/publicComponents";
import '@/directive/dialogDrag.js' //全局弹窗拖拽
import '@/directive/enterForm.js' //全局表单回车事件
import '@/directive/customePageContainer.js' //在设计模式下 隐藏dom 还能container row col设计
import '@/directive/guideComponentDirective.js' //自定义页面的一些指令 如组件占据剩余的高度 鼠标划过col 缩放图片

import service from '@/utils/request'
import lodash from "lodash";
import UUID from "vue-uuid";
import './assets/font/iconfont.css';
import 'aos/dist/aos.css'
import AOS from 'aos'


//全局变量
import '@/global/';

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
//全局组件库
Vue.use(publicComponents);
Vue.use(UUID);

Vue.prototype.$lodash = lodash;
Vue.prototype.$http = service //全局HTTP
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted() {
    //添加col row 组件动画
    AOS.init({
      // Global settings:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    })
  },

})
