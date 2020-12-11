import Vue from 'vue';
import TextField from "./TextField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import Form from "./Form";

[
    Form,
    TextField,
    SelectField,
    TextAreaField
].forEach(c => {
    Vue.component(c.name, c);
});