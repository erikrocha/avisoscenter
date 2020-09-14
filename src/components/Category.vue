<template>
  <div id="category">
    <ul class="collection with-header">
      <li v-for="ad in ads" v-bind:key="ad.id" class="collection-item">
        <router-link v-bind:to="{name:'view-ad', params: {ad_id: ad.ad_id}}"><div class="chip orange white-text">{{ad.category}}</div></router-link>
          <div class="right">
            <router-link v-bind:to="{name:'view-ad', params: {ad_id: ad.ad_id}}"><i class="fa fa-chevron-right fa-lg"></i></router-link><br>
          </div>
          <div class="ad">{{ad.ad}}</div>
        </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/" class="btn-floating btn-large green"><i class="fa fa-home"></i></router-link>
    </div>
  </div>
</template>

<script>
//import db from "./firebaseInit";
import firebase,{ firestore } from 'firebase';
import moment from 'moment';

moment.locale('es');

export default {
  name: 'category',
  data(){
    return{
      ads: []
    }
  },
  created(){
    firestore().collection('ads').where('category','==',this.$route.params.category ).get()
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
  }
}
</script>
<style scoped>
.fa-chevron-right{
  color: #ff9800;
}
</style>
