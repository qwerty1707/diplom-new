import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/langs',
    name: 'langs',
    component: () => import(/* webpackChunkName: "about" */ '../views/LangView.vue')
  },
  {
    path: '/tema',
    name: 'tema',
    component: () => import(/* webpackChunkName: "about" */ '../components/TemaList.vue')
  },
  {
    path: '/para',
    name: 'para',
    component: () => import(/* webpackChunkName: "about" */ '../components/PrimeL.vue')
  },
 



  {
    path: '/java',
    name: 'java',
    component: () => import(/* webpackChunkName: "about" */ '../components/JavaComp.vue')
  },
  {
    path: '/javas',
    name: 'javas',
    component: () => import(/* webpackChunkName: "about" */ '../components/JavaScript.vue')
  },
  {
    path: '/python',
    name: 'python',
    component: () => import(/* webpackChunkName: "about" */ '../components/PythonLang.vue')
  },
  {
    path: '/html',
    name: 'html',
    component: () => import(/* webpackChunkName: "about" */ '../components/HtmlV.vue')
  },
  {
    path: '/css',
    name: 'css',
    component: () => import(/* webpackChunkName: "about" */ '../components/CssList.vue')
  },
  {
    path: '/php',
    name: 'php',
    component: () => import(/* webpackChunkName: "about" */ '../components/PhpLang.vue')
  },
  {
    path: '/c_sharp',
    name: 'c_sharp',
    component: () => import(/* webpackChunkName: "about" */ '../components/C_sharpV.vue')
  },
  {
    path: '/c',
    name: 'c',
    component: () => import(/* webpackChunkName: "about" */ '../components/CList.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
