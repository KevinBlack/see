<template>
  <div id="app">
    <div id="header">
      <div class="nav-global">
        <div class="container">
          <h1 class="nav-logo">
            <a href="/home"></a>
          </h1>
          <ul class="nav-aside">
            <li class="nav-user">
              <a href="javascript:;">个人中心</a>
              <!--active-->
              <div class="nav-user-wrapper">
                <div class="nav-user-list">
                  <dl class="nav-user-avatar">
                    <dd><span class="ng-scope"></span></dd>
                    <dt class="ng-binding">+86 138****9453</dt>
                  </dl>
                  <ul>
                    <li class="order"><a href="javascript:;">我的订单</a></li>
                    <li class="support"><a href="javascript:;">售后服务</a></li>
                    <li class="coupon"><a href="javascript:;">我的优惠</a></li>
                    <li class="information"><a href="javascript:;">账户资料</a></li>
                    <li class="address"><a href="javascript:;">收货地址</a></li>
                    <li class="logout"><a href="javascript:;">退出</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <!--active-->
            <car-panel></car-panel>
          </ul>
          <ul class="nav-list">
            <li class="nav-item" v-for="item,index in navBtn">
              <router-link class="nav-link" :to="item.road">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import navBtn from '@/lib/nav'
import carPanel from '@/components/car-panel'

export default {
  data () {
    return {
      navBtn:navBtn
    }
  },
  components: {
      carPanel: carPanel
  }
}
</script>

<style>

</style>

<!--
一切都是从这里开始：
1、以 index.html 为模板，以 main.js 为总 js 入口页，vue 的首页
2、引入数据：import navBtn from '@/lib/nav' @符即‘src’，引入 src 目录下的 lib 文件夹中的 nav.js 文件
3、定义数据的挂载点 ：
export default {
    data(){
        return{
            navBtn:navBtn
        }
    }
}
4、84行循环生成导航链接：<li class="nav-item" v-for="item,index in navBtn">
5、85行自定义标签，<router-link class="nav-link" :to="item.road">{{item.name}}</router-link>
 :to="item.road"属性指定每个链接对应的路由地址，{{item.name}}获取每个链接的名称
6、<router-view/>标签是页面通过路由信息在本页渲染的挂载点，可以有多个，通过<router-view name="XXX" />来与路由信息中一一对应，具体见 index.js 页
-->