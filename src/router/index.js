import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home')
const CV = () => import('@/components/CV')
const Who = () => import('@/components/Whoami')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/CV',
      name: 'CV',
      component: CV
    },
    {
      path: '/who',
      name: 'Who',
      component: Who
    }
  ]
})
