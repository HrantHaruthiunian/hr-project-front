<template>
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
    >
    </v-text-field>
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

    <v-container>
      <v-row>
        <v-col cols="12" lg="6">
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateFormatted"
                label="Date of birth"
                hint="DD/MM/YYYY format"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                @blur="dateOfBirth = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="dateOfBirth"
              no-title
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer />
        <v-col>
          <v-btn class="mr-4" @click.stop="submit"> submit </v-btn>
          <v-btn @click.stop="clear"> clear </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </form>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import { mdiCloseThick } from "@mdi/js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserInputForm",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(15) },
    surName: { required, maxLength: maxLength(20) },
    dateOfBirth: { required },
  },

  data() {
    return {
      name: "",
      surName: "",
      dateOfBirth: new Date().toISOString().substr(0, 10),
      dateFormatted: this.computedDateFormatted,
      menu1: false,

      icons: { mdiCloseThick },
    };
  },

  computed: {
    ...mapGetters(["getPopupStatus"]),

    computedDateFormatted() {
      return this.formatDate(this.dateOfBirth);
    },

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

  watch: {
    dateOfBirth() {
      this.dateFormatted = this.formatDate(this.dateOfBirth);
    },
  },

  methods: {
    ...mapActions(["dispatchHidePopup"]),

    hidePopup() {
      this.dispatchHidePopup();
    },
    submit() {
      this.$v.$touch();

      this.hidePopup();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.surName = "";
      this.dateOfBirth = "";
    },

    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>