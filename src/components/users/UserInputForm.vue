<template>
  <v-app>
    <div id="user-input-form">
      <h2>User input form</h2>

      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="15"
          label="Name"
          required
          outlined
          shaped
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="surName"
          :error-messages="surNameErrors"
          :counter="20"
          label="Surname"
          required
          outlined
          shaped
          @input="$v.surName.$touch()"
          @blur="$v.surName.$touch()"
        ></v-text-field>
        <v-row justify="center">
          <v-date-picker v-model="dateOfBirth"></v-date-picker>
        </v-row>

        <v-btn class="mr-4" @click="submit"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </form>
    </div>
  </v-app>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(15) },
    surName: { required, maxLength: maxLength(20) },
    dateOfBirth: { required },
  },

  data: () => ({
    name: "",
    surName: "",
    dateOfBirth: new Date().toISOString().substr(0, 10),
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 15 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    surNameErrors() {
      const errors = [];
      if (!this.$v.surName.$dirty) return errors;
      !this.$v.surName.maxLength &&
        errors.push("Surname must be at most 20 characters long");
      !this.$v.surName.required && errors.push("Surname is required.");
      return errors;
    },
    dateOfBirthErrors() {
      const errors = [];
      if (!this.$v.dateOfBirth.$dirty) return errors;
      !this.$v.dateOfBirth.required &&
        errors.push("The date of birth is required.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.surName = "";
      this.dateOfBirth = "";
    },
  },
};
</script>