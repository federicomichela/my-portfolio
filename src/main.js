// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

// import components
import About from '@/components/About'
import Project from '@/components/Project'
import Works from '@/components/Works'
import Contacts from '@/components/Contacts'

Vue.config.productionTip = false;

Vue.use(Router)

/* This variable defines pretty much the structure of the whole website.
 * A page describes how a component is used in the template and other relevant informations
 * ATM type is either 'mainMenu' or 'subMenu'
 * pages is also used to build up the website routes
 */
let pages = [
  {
    path: '/about',
    name: 'About',
    component: About,
    type: 'mainMenu',
  },
  {
    path: '/works/:id',
    name: 'Project',
    component: Project,
  },
  {
    path: '/works',
    name: 'Works',
    component: Works,
    type: 'mainMenu',
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    type: 'mainMenu',
  }
];


// create a route for each page by extracting only the information needed for the Vue.router to build a route (path, name, component)
let routes = [];
pages.forEach( page => {
  var route = {};
  ['path', 'name', 'component'].forEach( property => {
    route[property] = page[property];
  });
  routes.push(route);
});


// build the router
let router = new Router({
  mode: 'history',
  routes: routes
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    pages: pages
  },
  components: { App },
  template: '<App/>'
})
