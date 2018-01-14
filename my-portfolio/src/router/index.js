import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Project from '@/components/Project'
import Projects from '@/components/Projects'
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
      path: '/projects/:id',
      name: 'Project',
      component: Project
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
