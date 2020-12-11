<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;
}

a {
  padding: 0 5px;
}
</style>
