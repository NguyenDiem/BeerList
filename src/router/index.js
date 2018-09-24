import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/:id?',
    name: 'beers',
    alias: '/beers',
    component: HelloWorld
  }]
})
