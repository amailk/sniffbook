import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'

import App from './App.vue'

import routes from './routes'

import { rtdbPlugin } from 'vuefire'


Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(rtdbPlugin)

const router = new VueRouter({mode: 'history', routes})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
