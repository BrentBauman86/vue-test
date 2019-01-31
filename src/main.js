import firebase from 'firebase';
import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import router from './router';
import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';
import 'materialize-css/dist/css/materialize.min.css'


Vue.use(VeeValidate);
Vue.use(VCalendar, {
  formats: {
    title: 'MMMM YYYY',
    weekdays: 'W',
    navMonths: 'MMM',
    input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
    dayPopover: 'L',
  }
});
Vue.config.productionTip = false;

let app = '';

  firebase.initializeApp({
    apiKey: "AIzaSyDON7iKIBMp8Oh2ABLRjT4epc6ggaNMQB4",
    authDomain: "vue-firebase-aa748.firebaseapp.com",
    databaseURL: "https://vue-firebase-aa748.firebaseio.com",
    projectId: "vue-firebase-aa748",
    storageBucket: "vue-firebase-aa748.appspot.com",
    messagingSenderId: "893822455968"
  });


  firebase.auth().onAuthStateChanged(() => {
    if (!app) {
      app = new Vue({
        router,
        render: h => h(App)
      }).$mount('#app');
    }
  });


