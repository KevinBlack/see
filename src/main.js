import Vue from 'vue'
import App from './App'
import router from '@/router'

import '@/assets/css/app.css'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
