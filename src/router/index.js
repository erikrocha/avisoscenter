import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ViewAd from '@/components/ViewAd'
import Category from '@/components/Category'
import Login from '@/components/Login'
import Add from '@/components/Add'
import Logout from '@/components/Logout'

import firebase from 'firebase'

Vue.use(Router)

//export default new router({
let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/add',
      name: 'Add',
      component: Add,
      meta: {
        requiresAuth: true
      }
    },
    { 
      path: '/login',
      name: 'Login',
      component: Login
    },
    { 
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:ad_id',
      name: 'view-ad',
      component: ViewAd
    },
    {
      path: '/:category',
      name: 'category',
      component: Category
    }
    
  ]
})

router.beforeEach((to, frm, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  if(requiresAuth && !currentUser) next('login')
  else if(!requiresAuth && currentUser) next('home')
  else next()
})

export default router