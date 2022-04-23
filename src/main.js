import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
Vue.use(VueSweetalert2)
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'

require('./assets/css/tooplate.css')
require('./assets/css/fontawesome.min.css')
require('./assets/css/bootstrap.min.css')



import axiosHttp from './http-common';
Vue.prototype.$http = axiosHttp

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
