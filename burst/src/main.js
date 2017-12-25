import Vue from 'vue'
import App from './App.vue'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import VueRouter from "vue-router"
Vue.use(VueRouter)



import tab1 from './components/body/01.vue'
import tab2 from './components/body/02.vue'
import tab3 from './components/body/03.vue'
import tab4 from './components/body/04.vue'
import tab5 from './components/body/05.vue'
import tab6 from './components/body/HDdetails.vue'
import tab7 from './components/body/GLdetails.vue'
import tab8 from './components/body/dengL.vue'
import tab9 from './components/body/zhuC.vue'
import tab10 from './components/daohang/game.vue'


var router  = new VueRouter({
	routes:[
		{path:'/',redirect:"tab1"},
		{path:'/tab1',component:tab1},
		{path:'/tab2',component:tab2},
		{path:'/tab3',component:tab3},
		{path:'/tab4',component:tab4},
		{path:'/tab5',component:tab5},
		{path:'/tab6',component:tab6},
		{path:'/tab7',component:tab7},
		{path:'/tab8',component:tab8},
		{path:'/tab9',component:tab9},
		{path:'/tab10/:id',component:tab10}
	]
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
