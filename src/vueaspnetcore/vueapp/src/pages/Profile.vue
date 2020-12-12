<template>
  <div>
    <h1>{{ profile.firstName }} - {{ profile.lastName }} Profile</h1>

    <div>
      <router-view></router-view>
    </div>

    <div>
      <br />
      {{ profile.age }} - {{ profile.gender }} -
      {{ profile.bio }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    profile() {
      let profiles = this.$store.getters.GET_PROFILES;
      if (profiles.length === 0) return null;
      
      let name = this.$route.params.name;
      return profiles.filter(profile => profile.firstName === name)[0];
    }
  },
  // data() {
  //   return {
  //     profile: {},
  //   };
  // },
  // // watch: {
  // //   "$route.params.name": {
  // //     immediate: true,
  // //     handler(name) {
  // //       this.loadProfile(name);
  // //     },
  // //   },
  // // },
  // methods: {
  //   loadProfile(name) {
  //     //   let name = this.$route.params.name;
  //     console.log(this.profile);
  //     name === undefined ? "" : name;
  //     this.$api.get("Profile/" + name).then((res) => {
  //       console.log(this.profile);
  //       this.profile = res.data;
  //     });
  //   },
  // },
  //   created() {
  //     let name = this.$route.params.name;
  //     this.$api.get("Profile/" + name).then((res) => {
  //       this.profile = res.data;
  //     });
  //   },
  beforeRouteEnter(to, from, next) {
    console.log("route enter, fetch some data");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("route leave, save/cleanup state");
    next();
  },
};
</script>

<style lang="scss" scoped>
</style>