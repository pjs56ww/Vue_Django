import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'  // 라이브러리
import VueSession from 'vue-session'

import App from './App.vue'
import router from './router'
// 파일을 등록하지 않으면 index.js 부터 접근한다.
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'


Vue.use(BootstrapVue)
// https://www.npmjs.com/package/vue-session
Vue.use(VueSession)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
