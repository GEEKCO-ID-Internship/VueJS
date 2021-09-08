import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios.js'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el :'#app',
//   components: { App },
//   template : '<App />'
// })