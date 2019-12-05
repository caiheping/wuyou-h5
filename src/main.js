import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import '@/static/icons'
import 'amfe-flexible/index.js'

import { Button, Tabbar, TabbarItem, NavBar, Search, Swipe, SwipeItem, Lazyload, Grid, GridItem, Row, Col, Icon } from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false

Vue.use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Grid)
  .use(GridItem)
  .use(Row)
  .use(Col)
  .use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
