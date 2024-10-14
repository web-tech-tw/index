import Vue from 'vue'
import './plugins/axios'
import './plugins/profile'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
