import Vue from 'vue'
import App from './App.vue'
import './libs/rem'
Vue.config.productionTip = false
import "assets/scss/index.scss"

import 'vant/lib/index.css'
import { Progress } from 'vant'
Vue.use(Progress)
import { List } from 'vant';

Vue.use(List);

import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);
import router from './router'
import store from './store'
import BScroll from 'better-scroll'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


