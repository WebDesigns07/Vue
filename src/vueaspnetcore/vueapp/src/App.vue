<template>
  <div id="app">
    <Form v-model="formValid" :summary="true">
      <template v-slot:summary="{ errors }">
        <h3>Custom Summary</h3>
        <div>
          <ul>
            <li v-for="error in errors" :key="`error-${error}`">{{error}}</li>
          </ul>
        </div>
      </template>
      <TextField
        v-model="form.firstName"
        label="First Name"
        v-bind:textLimit="15"
        :rules="firstNameRules"
      ></TextField>
      <TextField
        v-model="form.secondName"
        label="Second Name"
        :textLimit="15"
        :rules="lastNameRules"
      ></TextField>

      <SelectField
        label="Gender"
        v-model="form.gender"
        placeholder="Select Your Gender"
        :options="genderList"
      >
      </SelectField>

      <SelectField
        label="Age"
        v-model="form.age"
        placeholder="Select Your Age"
        :options="ageList"
      >
      </SelectField>

      <TextAreaField
        label="Bio"
        v-model="form.bio"
        :textLimit="255"
        resize="vertical"
        autoResize
      ></TextAreaField>

      <button v-if="formValid">Submit</button>
      <span v-else>Please fill out the form</span>
    </Form>
  </div>
</template>

<script>
import TextField from "./components/TextField";
import SelectField from "./components/SelectField";
import TextAreaField from "./components/TextAreaField";
import Form from "./components/Form";

export default {
  name: "App",
  data() {
    return {
      firstNameRules: [
        (v) => v.length > 0 || "First name is required",
        (v) => v.length < 15 || "First name has to be less than 15 chatacters",
        (v) => !/\s/.test(v) || "No white spaces buddy",
      ],
      lastNameRules: [
        (v) => v.length > 0 || "Second name is required",
        (v) => v.length < 15 || "Second name has to be less than 15 chatacters",
        (v) => !/\s/.test(v) || "No white spaces buddy",
      ],
      form: {
        firstName: "",
        secondName: "",
        gender: "",
        age: "",
        bio: "",
      },
      formValid: false
    };
  },
  components: {
    TextField,
    SelectField,
    TextAreaField,
    Form,
  },
  computed: {
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
};
</script>

<style lang="stylus">
#app {
  margin-top: 60px;
}
</style>
