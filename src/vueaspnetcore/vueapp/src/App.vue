<template>
  <div id="app">
    <div class="test-input">
      <label>First Name</label>
      <input v-model="firstName">
    </div>
    <div>{{firstName}}</div>
  <div class="validation">
    {{inputCount}}/{{textLimit}}
  </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      firstName: "",
      textLimit: 15
    }
  },
  components: {},
  computed:{
    inputCount(){
      return this.firstName.length;
    }
  }
};
</script>

<style lang="stylus">
#app 
  margin-top 60px

.text-input
  label
    display block

  input
    display block
    width 100%

  .validation
    text-align right
    font-size 12px
</style>
