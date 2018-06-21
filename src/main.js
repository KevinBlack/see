import Vue from 'vue'                                   //引入 vue 库
import App from './App'                                 //引入 APP 页面
import router from '@/router'                           //引入路由库

import '@/assets/css/app.css'                           //引入总的 css 文件，app.css

import BootstrapVue from 'bootstrap-vue'                //引入 bootstrap-vue 库

Vue.use(BootstrapVue);                                  //Vue.use 代表使用某个插件，这里是使用 boots-vue 插件

Vue.config.productionTip = false                        //Vue.config是一个对象，包含 Vue 的全局配置，productionTip 设置为 false 以阻止 vue 在启动时生成生产提示。


new Vue({                                               //实例化一个 Vue
  el: '#app',                                           //意思是将所有视图放在id值为app这个dom元素中
  router,                                               //使用路由，补全模式为：router: router, 如果两边名字相同，则可简写为 router
  components: { App },                                  //告知当前页面想使用App这个组件
  template: '<App/>'                                    //告知页面这个组件用这样的标签来包裹着,并且使用它
})

