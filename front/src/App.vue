<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="buttonTrigger('login')">show modal</button>
    <login-modal ref="login" />
    <HelloWorld msg="Hello World"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LoginModal from './components/LoginModal.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LoginModal
  },
  methods: {
    buttonTrigger(t_ref) {
      this.$refs[t_ref].show()
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
