<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="buttonTrigger($refs.login.show())">show modal</button>
    <login-modal ref="login">
      <template v-slot:header>
        <h1> Welcome to A&A </h1>
        <h4> Sign in to your Account </h4>
      </template>
    </login-modal>
    <!--<HelloWorld msg="Hello World"/>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import LoginModal from './components/LoginModal.vue'

export default {
  name: 'App',
  components: {
    LoginModal
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
