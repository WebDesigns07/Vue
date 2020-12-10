<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />

    <button @click="jumpPage">Go to login page</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    jumpPage() {
      this.$router.push('login');
    }
  }
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;
}
</style>
