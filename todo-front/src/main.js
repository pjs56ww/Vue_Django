import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 파일을 등록하지 않으면 index.js 부터 접근한다.

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
