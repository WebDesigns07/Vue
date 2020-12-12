<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>

    <div class="app">
      <div class="main">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
      <div class="menu">
        <router-link v-for="p in profiles" :key="p.id"
        :to="`/profile/${p.firstName}`">
          {{ p.firstName }} - {{ p.lastName }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      profiles: [],
    };
  },
  created() {
    this.loadProfiles();
    this.$eventBus.$on("created-profile", data => {
      this.profiles.push(data);
    });
  },
  methods: {
    loadProfiles() {
      this.$api.get("Profile").then((res) => {
        this.profiles = res.data;
      });
    },
  },
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;
}

a {
  padding: 0 5px;
}

.app {
  display: flex;
  flex-direction: row;
}
</style>
