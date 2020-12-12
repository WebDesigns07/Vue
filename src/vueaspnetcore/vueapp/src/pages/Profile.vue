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
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters('profiles', {
      getProfile: "GET_PROFILE"
    }),
    profile() {
      let name = this.$route.params.name;
      // return this.$store.getters.GET_PROFILE(name);
      return this.getProfile(name);

      // // let profiles = this.$store.getters.GET_PROFILES;
      // let profiles = this.$store.state.profiles;
      // if (profiles.length === 0) return null;
      
      // let name = this.$route.params.name;
      // let profile = profiles.filter(profile => profile.firstName === name)[0];

      // // 隐藏bug，切换到别到页面后，name路由值变为undefined。 
      // return profile;
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