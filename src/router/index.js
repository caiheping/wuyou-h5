import Vue from 'vue'
import VueRouter from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: _import('login/index'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: _import('home/index'),
    meta: {
      keepAlive: true,
      hasTabBar: true,
      title: '首页'
    }
  },
  {
    path: '/message',
    name: 'message',
    component: _import('message/index'),
    meta: {
      title: '信息',
      hasTabBar: true
    }
  },
  {
    path: '/resume',
    name: 'resume',
    component: _import('resume/index'),
    meta: {
      keepAlive: true,
      hasTabBar: true,
      title: '简历'
    }
  },
  {
    path: '/user',
    name: 'user',
    component: _import('user/index'),
    meta: {
      keepAlive: true,
      hasTabBar: true,
      title: '用户'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: _import('search/index'),
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/jobLists',
    name: 'jobLists',
    component: _import('jobLists/index'),
    meta: {
      title: '职位'
    }
  },
  {
    path: '/jobDetail',
    name: 'jobDetail',
    component: _import('jobDetail/index'),
    meta: {
      title: '职位详情'
    }
  },
  {
    path: '/companyDetail',
    name: 'companyDetail',
    component: _import('companyDetail/index'),
    meta: {
      title: '公司详情'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  if (from.meta.keepAlive) {
    from.meta.saveTop = document.body.scrollTop
  } else {
    from.meta.saveTop = 0
  }
  next()
})

export default router
