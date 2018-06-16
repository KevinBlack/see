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
