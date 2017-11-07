import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cardDetail from '../components/cardDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path:'/cardDetail',
      name:'cardDetail',
      component:cardDetail
    }
  ]
})
