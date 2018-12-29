import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import VueRouter from 'vue-router';
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)

Vue.use(VueRouter)
new Vue({
  render: (h) => h(App),
}).$mount('#app')
