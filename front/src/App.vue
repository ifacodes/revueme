<template>
  <div id="app">
    <!--<header>
      <fixed-bar :navLinks="[{'name': 'home', 'link': 'test'}, {'name': 'projects', 'link': 'test'}]"/>
    </header>-->

    <button @click="buttonTrigger($refs.login.show())">show modal</button>

    <login-modal width="20%" height="50%" ref="login">
      <!-- set this to different size values for mobile bleh -->

      <template v-slot:header>
        <h2>Welcome to A&A</h2>
        <!-- move these into the modal because I'm not making it a reusable component lmao -->
        <h4>Sign in to your Account</h4>
      </template>
    </login-modal>

    <header id="splash">
        <h1>Hi! My name is <span class="name">Aoife Bradley</span></h1>
    </header>
    <section>
    </section>
  </div>
</template>

<script>
import LoginModal from "./components/LoginModal.vue";
//import FixedBar from './components/FixedBar.vue'

export default {
  name: "App",
  components: {
    LoginModal,
    //FixedBar
  },
  methods: {
    // ref doesn't exist until after render
    // this allows me to reuse this function for any button to execute arbitrary methods
    buttonTrigger(x) {
      return x;
    },
  },
  mounted() {
    console.log("*mounted", this.$refs);
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/

  button {
    position: absolute;
  }

  #splash {
    background: #392f5a;
    color: #FFF8F0;
    line-height: 1.5;
      

    overflow: hidden;
    height: 100vh;
    padding: 15% 10%;
    margin: 0 auto;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 1.75rem;
    }
  }
}
</style>
