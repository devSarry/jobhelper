// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'vue-material/dist/vue-material.min.css'

import VueMaterial from 'vue-material'
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import BarChart from '@/components/BarChart';

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.component('bar-chart', BarChart);

const initialState = {
  appName: 'JobHelper'
}
store(initialState)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
