import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Project from '@/components/Project'
import Works from '@/components/Works'
import Contacts from '@/components/Contacts'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/works/:id',
      name: 'Project',
      component: Project
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
