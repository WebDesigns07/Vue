<template>
  <div id="app">
    <TextField v-model="firstName" label="First Name" v-bind:textLimit="15"></TextField>
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

    <TextAreaField label="Bio" v-model="bio" :textLimit="255" resize="vertical" autoResize></TextAreaField>

    <Weathers></Weathers>

  </div>
</template>

<script>
import TextField from "./components/TextField";
import SelectField from "./components/SelectField";
import TextAreaField from "./components/TextAreaField";
import Weathers from './pages/Weathers';

export default {
  name: "App",
  data() {
    return {
      firstName: "",
      secondName: "",
      gender: "",
      age: "",
      bio: "",
    };
  },
  components: {
    TextField,
    SelectField,
    TextAreaField,
    Weathers
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
