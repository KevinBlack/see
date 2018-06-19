<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/home"><img class="ico_logo" src="@/assets/img/logo.jpg"/></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item" v-for="item,index in navBtn">
                <router-link class="nav-link" :to="item.road">{{item.name}}</router-link>
              </li>
            </ul>
            <div class="nav-item g_login pull-right">
              <a class="nav-link" href="#">登录/注册</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="nav-sub">
      <div class="nav-sub-wrapper">
        <div class="container">
          <ul class="nav-list">
            <li><a href="javascript:;">首页</a></li>
            <li><a href="javascript:;">手机</a></li>
            <li><a href="javascript:;">“足迹系列”手感膜</a></li>
            <li class="active"><a href="javascript:;">官方配件</a></li>
            <li><a href="javascript:;">周边产品</a></li>
            <li><a href="javascript:;">第三方配件</a></li>
            <li><a href="javascript:;">全部商品</a></li>
            <li><a href="javascript:;">服务</a></li>
          </ul>
          <search-bar class="nav-search">
            <div class="cearch-bar">
              <form action class="search-form ng-untouched ng-pristine ng-valid">
                <input type="text" autocomplete="off" maxlength="30" class="search-box ng-untouched ng-pristine ng-invalid" />
                <button class="iconfont search-btn" type="submit">&#xe6ac;</button>
              </form>
            </div>
          </search-bar>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import navBtn from '@/lib/nav'


export default {
  data () {
    return {
      navBtn:navBtn
    }
  }

}
</script>

<style>

</style>
