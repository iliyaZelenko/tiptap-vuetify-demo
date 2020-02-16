import Vue from 'vue'
import VueGtag from 'vue-gtag'
import Router from '../router'

Vue.use(VueGtag, {
  config: { id: 'UA-127403551-6' }
}, Router)
