<template>
  <div id="app">
    <TextField v-model="firstName" label="First Name" textLimit="15"></TextField>
    <TextField v-model="secondName" label="Second Name" :textLimit="15"></TextField>

    <SelectField 
    label="Gender" 
    v-model="gender" 
    placeholder="Select Your Gender" 
    :options="genderList">
    </SelectField>

    <SelectField 
    label="Age" 
    v-model="age" 
    placeholder="Select Your Age" 
    :options="ageList">
    </SelectField>

      <div>
        {{gender}} - {{age}}
      </div>
  </div>
</template>

<script>
import TextField from "./components/TextField";
import SelectField from "./components/SelectField";

export default {
  name: "App",
  data() {
    return {
      firstName: "",
      secondName: "",
      gender: "",
      age: ""
    };
  },
  components: {
    TextField,
    SelectField
  },
  computed: {
    fullName(){
      return this.firstName + " " + this.secondName;
    },
    genderList(){
      return [
        { value:"0", text:"Male"},
        { value:"1", text:"Female"},
        { value:"2", text:"Other"} 
      ];
    },
    ageList(){
      let result = [];
      for (let i = 16; i < 65; i++) result.push({ value: i, text: i });
      return result;
    }
  }
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;
}
</style>
