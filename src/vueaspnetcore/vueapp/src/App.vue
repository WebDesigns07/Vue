<template>
  <div id="app">
    <a @click="page='home'">Home</a>
    <a @click="page='login'">Login</a>
    <component :is="renderComponent"></component> 
  </div>
</template>

<script>
import Home from "./pages/Home";
import Login from "./pages/Login";

export default {
  name: "App",
  data() {
    return {
      page: "home",
    };
  },
  components: {
    Home,
    Login,
  },
  computed: {
    renderComponent() {
      if (this.page === "home") return Home;
      else if (this.page === "login") return Login;
      return '';
    },
  },
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;
}
</style>
