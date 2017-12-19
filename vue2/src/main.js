import Vue from 'vue'
import VueRouter from 'vue-router'
import Vue2Filters from 'vue2-filters'
import VueHead from 'vue-head'
import Carousel3d from 'vue-carousel-3d'
import VueScrollTo from'vue-scrollto'



// Main pages
import App from './App.vue'
import Lol from './Lol.vue'
import Hots from './Hots.vue'

// Inner pages
import HotsHero from './HotsHero.vue'


Vue.use(VueRouter)
Vue.use(Vue2Filters)
Vue.use(VueHead)
Vue.use(Carousel3d)

Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     cancelable: true,
     onDone: false,
     onCancel: false
 })



const routes = [
  { path: '/', component: App },
  { path: '/lol', component: Lol },
  { path: '/hots', component: Hots },
  { name: 'hero', path: '/hots-:HeroId-:Test', component: HotsHero }
]




const router = new VueRouter({
  mode: 'history',
  routes
})


const app = new Vue({
  router
}).$mount('#wrapper')

//new Vue({
//  el: '#app',
//  render: h => h(App)
//})

