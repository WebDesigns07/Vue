<template>
  <a-form v-model="formValid" :summary="true">
    <template v-slot:summary="{ errors }">
      <h3>Custom Summary</h3>
      <div>
        <ul>
          <li v-for="error in errors" :key="`error-${error}`">{{ error }}</li>
        </ul>
      </div>
    </template>
    <a-input
      v-model="form.firstName"
      label="First Name"
      v-bind:textLimit="15"
      :rules="firstNameRules"
    />
    <a-input
      v-model="form.lastName"
      label="Last Name"
      :textLimit="15"
      :rules="lastNameRules"
    />

    <a-select
      label="Gender"
      v-model="form.gender"
      placeholder="Select Your Gender"
      :options="genderList"
    />

    <a-select
      label="Age"
      v-model="form.age"
      placeholder="Select Your Age"
      :options="ageList"
    />

    <a-textarea
      label="Bio"
      v-model="form.bio"
      :textLimit="255"
      resize="vertical"
      autoResize
    />

    <a-sbutton :loading="loading" @click="createProfile({ api: $api, form })" :disabled="!formValid || loading">
      Create Profile
    </a-sbutton>
  </a-form>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      firstNameRules: [
        (v) => v.length > 0 || "First name is required",
        (v) => v.length < 15 || "First name has to be less than 15 chatacters",
        (v) => !/\s/.test(v) || "No white spaces buddy",
      ],
      lastNameRules: [
        (v) => v.length > 0 || "Last name is required",
        (v) => v.length < 15 || "Last name has to be less than 15 chatacters",
        (v) => !/\s/.test(v) || "No white spaces buddy",
      ],
      form: {
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        bio: "",
      },
      formValid: false,
      // loading: false,
    };
  },
  created() {
    console.log("home page reached");
  },
  methods: {
    ...mapActions('profiles', {
      createProfile: 'CREATE_PROFILE'
    }),
    // createProfile() {
      // this.loading = true;
      
      // this.$api.post("profile", this.form)
      //     .then(res => {
      //       // todo store result in vuex
      //       this.loading = false;
      //       this.$store.commit("ADD_PROFILE", res.data);
      //       // this.$eventBus.$emit('created-profile', res.data);
      //     });
    // }
  },
  computed: {
    ...mapState('profiles', {
      loading: "creatingProfile"
    }),
    fullName() {
      return this.firstName + " " + this.secondName;
    },
    genderList() {
      return [
        { value: "0", text: "Male" },
        { value: "1", text: "Female" },
        { value: "2", text: "Other" },
      ];
    },
    ageList() {
      let result = [];
      for (let i = 16; i < 65; i++) result.push({ value: i, text: i });
      return result;
    },
  },
  // keep-alive组件的原理
  // beforeRouteEnter(to, from, next) {
  //   let formString = localStorage.getItem("home-form") || null;

  //   console.log(formString);
  //   next((vm) => {
  //     if (formString !== null && formString !== "")
  //       vm.form = JSON.parse(formString);
  //   });
  // },
  // beforeRouteLeave(to, from, next) {
  //   let formString = JSON.stringify(this.form);
  //   localStorage.setItem("home-form", formString);
  //   next();
  // },
};
</script>

<style lang="scss" scoped>
</style>