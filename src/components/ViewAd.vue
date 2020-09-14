<template>
  <div id="view-ad">
    <ul class="collection with-header">
      <li class="collection-item"><div class="chip orange white-text">{{category}}</div></li>
      <li class="collection-item">{{ad}}</li>
      <li class="collection-item"><div class="chip orange white-text"><i class="fa fa-phone"></i></div>{{cellphone}} <a :href="'tel:' + cellphone"><div class="chip green white-text right"><i class="fa fa-phone"></i> Llamar</div></a></li>
      <li class="collection-item"><div class="chip orange white-text"><i class="fa fa-calendar"></i></div>Publicado {{date}}</li>
      <li class="collection-item"><div class="chip grey white-text"><i class="fa fa-user-circle"></i></div>Publicado en {{reseller}} </li>
    </ul>
    <router-link to="/" class="btn orange"><i class="fa fa-chevron-left"></i> Volver</router-link>
    <div class="fixed-action-btn">
      <router-link to="/" class="btn-floating btn-large green"><i class="fa fa-home"></i></router-link>
    </div>
  </div>
</template>

<script>
//import db from './firebaseInit';
import firebase,{ firestore } from 'firebase';
import moment from 'moment';

export default {
  name: 'view-ad',
    data(){
      return{
        ad_id: null,
        category: null,
        ad: null,
        cellphone: null,
        reseller: null,
        date: null
      }
    },
    beforeRouteEnter(to, from, next){
      firestore().collection('ads').where('ad_id','==',to.params.ad_id).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            next(vm => {
              vm.ad_id = doc.data().ad_id
              vm.category = doc.data().category
              vm.ad = doc.data().ad
              vm.cellphone = doc.data().cellphone
              vm.reseller = doc.data().reseller
              vm.date = moment(doc.data().date).fromNow()
            })
          })
        })
    },
    watch:{
      '$route':'fetchData'
    },  
    methods:{
      fetchData(){
        firestore().collection('ads').where('ad_id','==',this.$route.params.ad_id).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.ad_id = doc.data().ad_id
              this.category = doc.data().category
              this.ad = doc.data().ad
              this.cellphone = doc.data().cellphone
              this.reseller = doc.data().reseller
              this.date = doc.data().date
            })
          })
      }
    }
}

function cw(str){
  return str.split('').length;
}
</script>
