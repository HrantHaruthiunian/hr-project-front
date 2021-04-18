<template>
  <v-row justify="center">
    <v-dialog v-model="getPopupStatus" persistent max-width="600px">
      <template v-slot:activator="{ off, attrs }">
        <v-list-item v-bind="attrs" v-on="off">
          <slot name="link"></slot>
        </v-list-item>
      </template>

      <v-card>
        <v-card-actions>
          <v-card-subtitle>Plaese fill the fields below</v-card-subtitle>
          <v-spacer></v-spacer>
          <v-icon large color="grey darken-1" @click="hidePopup"
            >mdi-close-thick</v-icon
          >
        </v-card-actions>
        <v-card-text>
          <slot name="form"></slot>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Popup",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getPopupStatus"]),
  },

  methods: {
    ...mapActions(["dispatchHidePopup"]),
    hidePopup() {
      this.dispatchHidePopup();
    },
  },
};
</script>


