import Vue from 'vue';
import TextField from "./TextField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import Form from "./Form";
import SubmitButton from "./SubmitButton";

[
    Form,
    TextField,
    SelectField,
    TextAreaField,
    SubmitButton
].forEach(c => {
    Vue.component(c.name, c);
});