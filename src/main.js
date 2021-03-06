import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import '@/static/icons'
import 'amfe-flexible/index.js'

import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Row,
  Col,
  Icon,
  Toast,
  Cell,
  CellGroup,
  Image,
  SwipeCell,
  Area,
  Popup,
  DropdownMenu,
  DropdownItem,
  List,
  PullRefresh,
  Divider,
  Tab,
  Tabs
} from 'vant'
import 'vant/lib/index.css'
import './static/style/common.scss'
import './static/style/vant.css'

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
  .use(Toast)
  .use(Cell)
  .use(CellGroup)
  .use(Image)
  .use(SwipeCell)
  .use(Area)
  .use(Popup)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(List)
  .use(PullRefresh)
  .use(Divider)
  .use(Tab)
  .use(Tabs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
