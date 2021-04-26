<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="getSnackbarStatus">
      <slot> Item was deleted </slot>

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="hideSnackbar">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Snackbar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getSnackbarStatus"]),
  },

  methods: {
    ...mapActions(["HIDE_SNACKBAR", "SHOW_SNACKBAR"]),
    hideSnackbar() {
      this.HIDE_SNACKBAR();
    },
    showSnackbar() {
      this.SHOW_SNACKBAR();
    },
  },
};
</script>


