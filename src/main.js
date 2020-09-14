// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyCQRLY7704dvpSVDZ_gWH5jV8LlLXY-Cf4",
  authDomain: "appavisos-e8538.firebaseapp.com",
  databaseURL: "https://appavisos-e8538.firebaseio.com",
  projectId: "appavisos-e8538",
  storageBucket: "appavisos-e8538.appspot.com",
  messagingSenderId: "651042970615"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
