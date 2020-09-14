<template>
  <div class="logout">
    <h1>{{ msg }}</h1>
    <button v-on:click="logout">logout</button>   
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'logout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    logout: function(){
      firebase.auth().signOut()
        .then( () => {
          this.$router.replace('login')
        })
    }
  }
}
</script>