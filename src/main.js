import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import firebase from 'firebase';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';


Vue.use(VeeValidate);
Vue.config.productionTip = false;

  const config = {
    apiKey: "AIzaSyDON7iKIBMp8Oh2ABLRjT4epc6ggaNMQB4",
    authDomain: "vue-firebase-aa748.firebaseapp.com",
    databaseURL: "https://vue-firebase-aa748.firebaseio.com",
    projectId: "vue-firebase-aa748",
    storageBucket: "vue-firebase-aa748.appspot.com",
    messagingSenderId: "893822455968"
  };

  firebase.initializeApp(config);

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')

