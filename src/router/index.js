import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home')
const CV = () => import('@/components/CV')
Vue.use(Router)

export default new Router({
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
    }
  ]
})
