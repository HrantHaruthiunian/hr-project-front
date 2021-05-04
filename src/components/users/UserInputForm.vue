<template>
  <form>
    <v-text-field
      v-model="user.name"
      :error-messages="nameErrors"
      :counter="15"
      label="Name"
      required
      outlined
      shaped
      @input="$v.user.name.$touch()"
      @blur="$v.user.name.$touch()"
    >
    </v-text-field>
    <v-text-field
      v-model="user.surName"
      :error-messages="surNameErrors"
      :counter="20"
      label="Surname"
      required
      outlined
      shaped
      @input="$v.user.surName.$touch()"
      @blur="$v.user.surName.$touch()"
    ></v-text-field>

    <v-container>
      <template>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="user.dateOfBirth"
              label="Birthday date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="user.dateOfBirth"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
      </template>
      <v-btn class="mr-4" @click="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </v-container>
  </form>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import { mdiCloseThick } from "@mdi/js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserProfile",
  mixins: [validationMixin],

  validations: {
    user: {
      name: { required, maxLength: maxLength(15) },
      surName: { required, maxLength: maxLength(20) },
      dateOfBirth: { required },
    },
  },

  data() {
    return {
      user: {
        name: "",
        surName: "",
        dateOfBirth: new Date().toISOString().substr(0, 10),
      },

      dateFormatted: this.computedDateFormatted,
      menu: false,

      icons: { mdiCloseThick },
    };
  },

  computed: {
    ...mapGetters(["getPopupStatus"]),

    computedDateFormatted() {
      return this.formatDate(this.user.dateOfBirth);
    },

    nameErrors() {
      const errors = [];
      if (!this.$v.user.name.$dirty) return errors;
      !this.$v.user.name.maxLength &&
        errors.push("Name must be at most 15 characters long");
      !this.$v.user.name.required && errors.push("Name is required.");
      return errors;
    },
    surNameErrors() {
      const errors = [];
      if (!this.$v.user.surName.$dirty) return errors;
      !this.$v.user.surName.maxLength &&
        errors.push("Surname must be at most 20 characters long");
      !this.$v.user.surName.required && errors.push("Surname is required.");
      return errors;
    },
    dateOfBirthErrors() {
      const errors = [];
      if (!this.$v.user.dateOfBirth.$dirty) return errors;
      !this.$v.user.dateOfBirth.required &&
        errors.push("The date of birth is required.");
      return errors;
    },
  },

  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },

  methods: {
    ...mapActions(["HIDE_formPOPUP", "ADD_USER", "SHOW_USERS_LIST"]),

    hidePopup() {
      this.HIDE_formPOPUP();
    },
    submit() {
      this.$v.$touch();
      this.ADD_USER(this.user);
      this.hidePopup();
      this.SHOW_USERS_LIST();
    },
    clear() {
      this.$v.$reset();
      this.user.name = "";
      this.user.surName = "";
      this.user.dateOfBirth = "";
    },
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>