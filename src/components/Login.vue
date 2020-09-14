<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="email"><br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button v-on:click="signIn">connect</button>
    <p>you dont have an account? you can <router-link to="/signup"> create one</router-link></p>
  </div>
</template>
<script>

import firebase from 'firebase';

export default {
  name: 'login',
  data: function(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            alert('done, connected')
            this.$router.replace('hello')
          },
          (err) => {
            alert('error: ' + err.message)
          }
        );
    }
  }
}
</script>

