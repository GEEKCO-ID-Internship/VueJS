import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios.js'
import store from './store'
// import components from './components'

Vue.config.productionTip = false

new Vue({
  // components,
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