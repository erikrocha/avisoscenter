<template>
  <div id="home">
    <div class="row">
      <div class="col s12 m12">
        <div class="card blue">
          <div class="card-content white-text">
            <p>
              <a href="https://www.facebook.com/appavisos" target="_blank"><i class="fa fa-facebook fa-lg" aria-hidden="true" style="color:white;"></i></a> &nbsp; Búscanos y agreganos en facebook como: "app avisos...". 
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <ul class="collection with-header">
        <li v-for="ad in ads" v-bind:key="ad.id" class="collection-item">
          <router-link v-bind:to="{name:'view-ad', params: {ad_id: ad.ad_id}}"><div class="chip orange white-text">{{ad.category}}</div></router-link>
          <div class="right">
            {{ad.date}}
            <router-link v-bind:to="{name:'view-ad', params: {ad_id: ad.ad_id}}"><i class="fa fa-chevron-right fa-lg"></i></router-link><br>
          </div>
          <div class="ad">{{ad.ad}}</div>
        </li>
      </ul>
      <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large green"><i class="fa fa-plus"></i></router-link>
    </div>
    </div>
    <button v-if="notificationsSupported" @click="askPermission">Enable notifications ></button>
  </div>
</template>

<script>
//import db from "./firebaseInit";
import firebase,{ firestore } from 'firebase';
import moment from 'moment';

moment.locale('es');

export default {
  name: 'home',
  data(){
    return{
      ads: [],
      notificationsSupported: false
    }
  },
  methods: {
        askPermission() {
            if (this.notificationsSupported) {
                Notification.requestPermission(result => {
                    console.log('result from permission question', result);
                        if (result !== 'granted') {
                        alert('You probably do not like notifications?!');
                    } else {
                        console.log('A notification will be send from the service worker => This only works in production');
                        this.showNotification()
                    }
                })
            }
        },
        showNotification() {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready // returns a Promise, the active SW registration
                    .then(swreg => swreg.showNotification('Notifications granted', {
                        body: 'Here is a first notification erikrocha',
                        icon: '/img/icons/android-chrome-192x192.png',
                        image: '/img/autumn-forest.png',
                        vibrate: [300, 200, 300],
                        badge: '/img/icons/plint-badge-96x96.png',
                        // actions: [
                        //     { action: 'confirm', title: 'Okay', icon: '/img/icons/android-chrome-192x192.png'},
                        //     { action: 'cancel', title: 'Cancel', icon: '/img/icons/android-chrome-192x192.png'}
                        // ],
                    }))
            }
        },
    },
  created(){
    firestore().collection('ads').orderBy('date','desc').get()
    //db.collection('ads').orderBy('date','desc').get()
    //db.collection('ads').orderBy('date','desc').get()
      .then(querySnapshot => {
        this.loading = false;
          querySnapshot.forEach(doc => {
            const data = {
              ad_id: doc.data().ad_id,
              category: doc.data().category,
              ad: doc.data().ad,
              cellphone: doc.data().cellphone,
              date: moment(doc.data().date).fromNow()
            };
            this.ads.push(data);
          });
      });
    if ('Notification' in window && 'serviceWorker' in navigator) {
            this.notificationsSupported = true
        }
  },
  mounted: function(){
    //$('select').formSelect();
    $('.sidenav')
          .sidenav()
          .on('click tap', 'li a', () => {
          	$('.sidenav').sidenav('close');
        	});
  }
}
</script>
<style scoped>

.fa-chevron-right{
  color: #ff9800;
}
.ad{
  display: block;
  display: -webkit-box;
  height: 14px * 1.4 * 3;
  font-size: 14px;
  line-height: 1.4;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

