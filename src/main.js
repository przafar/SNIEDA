import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/tailwind.css'
import ScrollAnimation from './directives/scrollanimation.js'

Vue.directive('scrollanimation', ScrollAnimation)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
