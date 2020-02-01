import Vue from 'vue'
import Router from 'vue-router'
import Simple from '../examples/Simple'

Vue.use(Router)

export const routes = [
  {
    path: '/simple',
    component: Simple,
    textInfo: 'Simple usage'
  },
  {
    path: '/custom-toolbar',
    component: () => import('../examples/CustomToolbar'),
    textInfo: 'Custom toolbar'
  },
  {
    path: '/bubble-menu',
    component: () => import('../examples/BubbleMenu'),
    textInfo: 'Bubble Menu'
  },
  {
    path: '/placeholder',
    component: () => import('../examples/Placeholder'),
    textInfo: 'Placeholder'
  },
  {
    path: '/preview',
    component: () => import('../examples/Preview'),
    textInfo: 'Preview'
  }
]

export default new Router({
  mode: 'history',

  routes: [
    ...routes,
    {
      path: '/',
      redirect: '/simple'
    }
  ]
})
