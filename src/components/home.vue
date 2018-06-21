<template>
  <div class="con1 container">
    <div class="nav-sub">
      <div class="nav-sub-wrapper">
        <div class="container">
          <ul class="nav-list">
            <li><a href="javascript:;">首页</a></li>
            <li><a href="javascript:;">手机</a></li>
            <li><a href="javascript:;">“足迹系列”手感膜</a></li>
            <li><a href="javascript:;">官方配件</a></li>
            <li><a href="javascript:;">周边产品</a></li>
            <li><a href="javascript:;">第三方配件</a></li>
            <li><a href="javascript:;">全部商品</a></li>
            <li><a href="javascript:;">服务</a></li>
          </ul>
          <div class="nav-search">
            <div class="search-bar">
              <form action class="search-form ng-untouched ng-pristine ng-valid">
                <input type="text" autocomplete="off" maxlength="30" class="search-box ng-untouched ng-pristine ng-invalid" />
                <button class="iconfont search-btn" type="submit">&#xe6ac;</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-carousel id="carousel1"
                controls
                indicators
                class="carousel-fade"
                :interval="4000"
                img-width="1920"
                img-height="600"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide class="carousel-item">
        <img slot="img" class="d-block img-fluid w-100 bod-rad" src="../assets/img/con_1.jpg" alt="image slot">
      </b-carousel-slide>

      <b-carousel-slide class="carousel-item">
        <img slot="img" class="d-block img-fluid w-100 bod-rad" src="../assets/img/con_2.jpg" alt="image slot">
      </b-carousel-slide>

      <b-carousel-slide class="carousel-item">
        <img slot="img" class="d-block img-fluid w-100 bod-rad" src="../assets/img/con_3.jpg" alt="image slot">
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>

