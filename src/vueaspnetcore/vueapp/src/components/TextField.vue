<template>
  <div class="text-input" style="width: 200px">
    <div>
      <label>{{label}}</label>
      <input :class="validationClass" :value="value" @input="$emit('input', $event.target.value)" />
    </div>
    <div v-if="textLimit > 0" class="validation">{{ inputCount }}/{{ textLimit }}</div>
  </div>
</template>

<script>
export default {
  props: {
      value: {
          require: true,
          type: String
      },
      textLimit: {
          require: false,
          type: Number
      },
      label:{
        require: false,
        type: String
      }
  },
  watch: {
    value: function (newValue, oldValue) {
      if (newValue.length > this.textLimit) this.$emit('input', oldValue);
    },
  },
  computed: {
    inputCount() {
      return this.value.length;
    },
    isEmpty() {
      return this.value.length === 0;
    },
    validationClass() {
      return this.isEmpty ? "invalid" : "valid";
    },
  },
};
</script>

<style lang="stylus" scoped>
.text-input
  label 
    display block
  
  input 
    display block
    width 100%

  input.valid
    border 1px solid green

  input.invalid
    border 1px solid red

  .validation
    text-align right 
    font-size 12px
  </style>