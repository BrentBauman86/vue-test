import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css';
import VueRouter from 'vue-router'
import App from './App.vue'
import VeeValidate from 'vee-validate';


Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

