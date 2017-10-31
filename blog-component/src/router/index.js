import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Bloglist from '@/components/Bloglist'
import Blogdetail from '@/components/Blogdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      child: [
        {
          path: '',
          name: 'Bloglist',
          component: Bloglist
        },
        {
          path: ':id',
          name: 'Blogdetail',
          component: Blogdetail
        }
      ]
    }
  ]
})
