<template>
  <v-row justify="center">
    <v-dialog
      v-model="getInfoPopupStatus"
      persistent
      :retain-focus="false"
      max-width="600px"
    >
      <template v-slot:activator="{ attrs }">
        <v-list-item v-bind="attrs">
          <slot name="linkInfo"></slot>
        </v-list-item>
      </template>

      <v-card>
        <v-card-actions>
          <v-icon large color="grey darken-3">mdi-alert-circle</v-icon>
          <v-spacer></v-spacer>
          <v-icon medium color="grey darken-1" @click="hidePopup"
            >mdi-close-thick</v-icon
          >
        </v-card-actions>
        <v-card-text>
          <slot name="message"></slot>
          <div align="center">
            <v-btn @click="approveDelete">Yes</v-btn>
            <v-btn class="ml-5" @click="hidePopup">No</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PopupInfo",
  props: {
    action: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getInfoPopupStatus"]),
  },

  methods: {
    ...mapActions(["dispatchHideInfoPopup", "dispatchShowInfoPopup"]),
    hidePopup() {
      this.dispatchHideInfoPopup();
    },
    showPopup() {
      this.dispatchShowInfoPopup();
    },
    approveDelete() {
      this.$emit("deleteApproved");
    },
  },
};
</script>


