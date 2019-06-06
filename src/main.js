
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/components/store'
import * as fb from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
Vue.use(Vuetify)

Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyBENXFrEecIRk4lYOMrqwDNwks1wXd7IAc",
  authDomain: "my-page-44fff.firebaseapp.com",
  databaseURL: "https://my-page-44fff.firebaseio.com",
  projectId: "my-page-44fff",
  storageBucket: "my-page-44fff.appspot.com",
  messagingSenderId: "508781583393",
  appId: "1:508781583393:web:8c3ad803babb4cf2"
};
fb.initializeApp(firebaseConfig)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
   var userId = JSON.parse(localStorage.getItem('user'))
    this.$store.dispatch('autoLoginUser', userId)
    fb.auth().onAuthStateChanged(user => {
      console.log(user)
    })
  }
})

