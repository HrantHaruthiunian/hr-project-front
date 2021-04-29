<template>
  <v-card elevation="2" outlined shaped>
    <v-card-title>Vacation request input form </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="title"
          :error-messages="titleErrors"
          :counter="25"
          label="Title"
          required
          @input="$v.title.$touch()"
          @blur="$v.title.$touch()"
        ></v-text-field>
        <v-select
          v-model="status"
          :items="items"
          :error-messages="selectErrors"
          label="Default status"
          required
          @change="$v.status.$touch()"
          @blur="$v.status.$touch()"
        ></v-select>

        <v-textarea v-model="comment" color="teal">
          <template v-slot:label>
            <div>Your comment <small>(optional)</small></div>
          </template>
        </v-textarea>

        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you confirm ?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
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
    title: { required, maxLength: maxLength(25) },
    status: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    title: "Vacation request",
    status: "Proposed",
    items: ["Proposed", "Confirmed", "Completed", "Canceled"],
    comment: "",
    checkbox: false,
  }),

  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.maxLength &&
        errors.push("Title must be at most 25 characters long");
      !this.$v.title.required && errors.push("Title is required.");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.status.$dirty) return errors;
      !this.$v.status.required && errors.push("Item is required");
      return errors;
    },
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must confirm to continue!");
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
      this.title = "";
      this.status = "Proposed";
      this.comment = "";
      this.checkbox = false;
    },
  },
};
</script>