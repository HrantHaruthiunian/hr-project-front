<template>
  <v-row justify="center">
    <v-dialog
      v-model="getDeletePopupStatus"
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
          <div align="center">
            Are you sure you whant to permenently delete
            {{ userToDelete.name }} {{ userToDelete.surName }} ?
          </div>

          <br />
          <div align="center">
            <v-btn @click="approveDelete">Yes</v-btn>
            <v-btn class="ml-5" @click="cancelDelete">No</v-btn>
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

  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getDeletePopupStatus", "getUserToDelete"]),

    userToDelete() {
      return this.getUserToDelete;
    },
  },

  methods: {
    ...mapActions(["HIDE_deletePOPUP", "SHOW_SNACKBAR", "DELETE_USER"]),

    cancelDelete() {
      this.HIDE_deletePOPUP();
    },
    approveDelete() {
      this.HIDE_deletePOPUP();
      this.DELETE_USER(this.userToDelete.uuid);
      this.SHOW_SNACKBAR();
    },

    hidePopup() {
      this.HIDE_deletePOPUP();
    },
  },
};
</script>


