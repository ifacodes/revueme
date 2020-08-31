<template>
  <div id="app">

    <fixed-bar :navLinks="[{'name': 'home', 'link': 'test'}, {'name': 'projects', 'link': 'test'}]">
      
    </fixed-bar>
    <img alt="Vue logo" src="./assets/logo.png">
    
    <button @click="buttonTrigger($refs.login.show())">show modal</button>

    <login-modal width='20%' height='50%' ref="login"> <!-- set this to different size values for mobile bleh -->

      <template v-slot:header>
        <h2> Welcome to A&A </h2>         <!-- move these into the modal because I'm not making it a reusable component lmao -->
        <h4> Sign in to your Account </h4>
      </template>

    </login-modal>

  </div>
</template>

<script>

import LoginModal from './components/LoginModal.vue'
import FixedBar from './components/FixedBar.vue'

export default {
  name: 'App',
  components: {
    LoginModal,
    FixedBar
  },
  methods: {
    // ref doesn't exist until after render
    // this allows me to reuse this function for any button to execute arbitrary methods
    buttonTrigger(x) {
      return x;
    }
  },
  mounted() {
    console.log('*mounted', this.$refs);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
