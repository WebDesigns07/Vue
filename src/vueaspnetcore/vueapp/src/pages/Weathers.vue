<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      weathers: [],
    };
  },
  created() {
    console.log("Weathers component created.");
    axios.get("http://192.168.0.120:8084/WeatherForecast").then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>