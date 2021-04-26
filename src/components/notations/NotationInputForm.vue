<template>
  <v-card elevation="2" outlined shaped>
    <v-card-title> Notation input form </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="subject"
          :error-messages="subjectErrors"
          :counter="25"
          label="Subject"
          required
          @input="$v.subject.$touch()"
          @blur="$v.subject.$touch()"
        ></v-text-field>

        <v-textarea v-model="content" color="teal">
          <template v-slot:label>
            <div>Content <small>(optional)</small></div>
          </template>
        </v-textarea>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  mixins: [validationMixin],

  validations: {
    subject: { required, maxLength: maxLength(25) },
    content: { required },
  },

  data: () => ({
    subject: "Notation on request",
    content: "",
  }),

  computed: {
    subjectErrors() {
      const errors = [];
      if (!this.$v.subject.$dirty) return errors;
      !this.$v.subject.maxLength &&
        errors.push("Subject must be at most 25 characters long");
      !this.$v.subject.required && errors.push("Subject is required.");
      return errors;
    },
  },

  methods: {
    ...mapActions(["HIDE_formPOPUP"]),

    hidePopup() {
      this.HIDE_formPOPUP();
    },
    submit() {
      this.$v.$touch();
      this.hidePopup();
    },

    clear() {
      this.$v.$reset();
      this.subject = "";
      this.content = "";
    },
  },
};
</script>