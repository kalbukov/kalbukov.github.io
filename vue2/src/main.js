import Vue from 'vue'
import VueRouter from 'vue-router'
import Vue2Filters from 'vue2-filters'
import VueHead from 'vue-head'
import Carousel3d from 'vue-carousel-3d'




// Main pages
import App from './App.vue'
import Dota2 from './Dota2.vue'
import Lol from './Lol.vue'
import Hots from './Hots.vue'

// Inner pages
import HotsHero from './HotsHero.vue'


Vue.use(VueRouter)
Vue.use(Vue2Filters)
Vue.use(VueHead)
Vue.use(Carousel3d)


const routes = [
  { path: '/vue2/', component: App },
  { path: '/vue2/dota2', component: Dota2 },
  { path: '/vue2/lol', component: Lol },
  { path: '/vue2/hots', component: Hots },
  { name: 'hero', path: '/vue2/hots-:HeroId-:Test', component: HotsHero }
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

