<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <select :value="value" @input="$emit('input', $event.target.value)">
        <option v-if="placeholder" value>{{ placeholder }}</option>
        <option
          v-for="o in options"
          :value="o.text"
          :key="`opt-${o.value}-${o.text}`"
        >
          {{ o.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "a-select",
  props: {
    label: {
      require: false,
      type: String,
    },
    value: {
      require: true,
      type: String,
    },
    placeholder: {
      require: false,
      type: String,
    },
    options: {
      require: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>