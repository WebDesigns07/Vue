<template>
  <div>
    <slot v-if="summary" name="summary" v-bind:errors="errorList">
      <div class="error-summary">
        <h3>Default Summary</h3>
        <ul>
          <li v-for="error in errorList" :key="`error-${error}`">{{ error }}</li>
        </ul>
      </div>
    </slot>
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "a-form",
  props: {
    value: {
      required: true,
      type: Boolean,
    },
    summary: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // errors: [],
      // 注意{}和[]的区别
      errors: {},
    };
  },
  watch: {
    formValid: {
      immediate: true,
      handler(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  mounted() {
    this.$children
      .filter((c) => c.valid !== undefined)
      .forEach((c) => {
        c.$watch(
          "valid",
          (v) => {
            console.info("Custom Watcher: ", c, v);
            // this.errors[c._uid] = v;
            // 立即更新属性
            this.$set(this.errors, c._uid, v);
          },
          { immediate: true }
        );
      });
  },
  computed: {
    errorList() {
      var err = Object.values(this.errors).filter((v) => v !== true);
      return err;
    },
    formValid() {
      return this.errorList.length === 0;
    },
  },
};
</script>

<style lang="stylus" scoped>
.error-summary {
  border: 1px solid red;
  border-radius: 5px;
}
</style>