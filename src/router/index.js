import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '@/components/home'
import mzhf from '@/components/mzhf'
import Item from '@/views/item'
import Cart from '@/views/cart'
import CheckOut from '@/views/checkout'
import Payment from '@/views/payment'
import Account from '@/views/account'
import Order from '@/views/account/order'
import Address from '@/views/account/address'

let router = new VueRouter({
  mode:'history',                    //history 模式在 a 标签下会造成跳转页面，改用自定义的 <router-link></router-link> 标签除去默认跳转功能
  routes: [                          //定义路由，数组 [] 里的每一个对象 {} 都是一个路由信息（一个页面）
    {
      path: '/home',                 //页面路径
      component: home,               /*注册组件，可以是多个（变成复数形式），格式：
                                      components:{
                                        default:  home,       //default 是默认路径，对应的是 <router-view/>
                                        slider: slider,        //slider 是自定义的名称，路径和键值最好一致， <router-view name="slider"/>，引入slider.vue页面 即可
                                        ...
                                      }，
                                     对于 components 对象中的每个属性来说，其属性名就是自定义元素的名字，其属性值就是这个组件的选项对象。 */
      alias: '/index'                 //设置别名，可以使默认呈现为首页（否则必须点击导航才能到首页）
      /*
      children:[{
        path:'',
        component:''
        }]

      */
    },
    {
      path: '/mzhf',
      component: mzhf
    },
    //重定向
    {
      path: '*',                      //输入任何没有定义的路径，都默认跳转到 home 页
      redirect: '/home'
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'CheckOut',
      component: CheckOut
    },
    {
        path: '/payment',
        name: 'Payment',
        component: Payment
    },
    {
        path: '/account',
        component: Account,
        children: [
            {
              path: '',
              name: 'Account',
              component: Order
            },
            {
              path: 'address',
              name: 'Address',
              component: Address
            }
        ]
    }
  ]
})

export default router

/*
接 APP.vue 页，本页是路由信息配置页，所有的路由信息都将在此配置
6、引入必要的库：
import Vue from 'vue'
import VueRouter from 'vue-router'
7、使用 vue 路有插件 ：Vue.use(VueRouter)
8、引入相关页面：
import home from '@/components/home'
import mzhf from '@/components/mzhf'
导航作为公用组件，直接写在 APP.vue 页面中，其余页面通过点击导航链接，找到对应的路由信息，将页面挂载在 <router-view/> 标签处，home 页作为首页，直接渲染出来
9、定义一个变量router，并将其暴露出去（export default router），main.js 页面调用的 router 就是在这里定义的
10、相关语句含义见上面⤴注释，路由信息定义完成后，详见 mzhf.vue 页面
*/