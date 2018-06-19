import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '@/components/home'
import mzhf from '@/components/mzhf'

let router = new VueRouter({
  mode:'history',  //history 模式在 a 标签下会造成跳转页面，改用 router-link 标签除去默认跳转功能
  routes: [
    {
      path: '/home',
      component: home,
      alias:'/index'//设置别名，可以使默认呈现为首页（否则必须点击导航才能到首页）
    },
    {
      path:'/mzhf',
      component: mzhf
    },
    //重定向
    {
      path:'*',
      redirect:'/home'
    }
  ]
})

export default router
