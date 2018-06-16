<template>
  <div class="con1 container">
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

