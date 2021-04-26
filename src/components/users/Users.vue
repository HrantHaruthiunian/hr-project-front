<template>
  <div>
    <v-expand-transition
      ><v-container class="blue-grey lighten-5">
        <v-card class="pa-1" outlined title>
          <v-card-actions>
            <span>Users list</span>

            <v-spacer></v-spacer>
            <v-icon class="right" @click.stop="hideUsersList">mdi-close</v-icon>
          </v-card-actions>
        </v-card>

        <v-row no-gutters>
          <v-col cols="3">
            <v-card outlined title class="pa-1 blue-grey lighten-1 text-center"
              >Name</v-card
            ></v-col
          >
          <v-col cols="3">
            <v-card outlined title class="pa-1 blue-grey lighten-1 text-center"
              >Surname</v-card
            ></v-col
          >
          <v-col cols="2">
            <v-card outlined title class="pa-1 blue-grey lighten-1 text-center"
              >Brth date</v-card
            ></v-col
          >
          <v-col cols="2">
            <v-card outlined title class="pa-1 blue-grey lighten-1 text-center"
              >Registration date</v-card
            ></v-col
          >

          <v-col cols="2">
            <v-card outlined title class="pa-1 blue-grey lighten-1 text-center"
              >Delete</v-card
            ></v-col
          >
        </v-row>
        <v-row no-gutters v-for="(user, index) in getAllUsers" :key="index">
          <v-col cols="3">
            <v-card class="pa-1" outlined title>{{ user.name }}</v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="pa-1" outlined title>{{ user.surName }}</v-card>
          </v-col>
          <v-col cols="2">
            <v-card class="pa-1 text-center" outlined title>{{
              user.dateOfBirth
            }}</v-card>
          </v-col>
          <v-col cols="2">
            <v-card class="pa-1 text-center" outlined title>{{
              user.signUpDate.substr(0, 10)
            }}</v-card>
          </v-col>
          <v-col cols="2">
            <v-card class="pa-1" outlined title>
              <popup :action="toDelete" @deleteApproved="toDelete = true">
                <template v-slot:linkInfo>
                  <v-btn
                    class="mx-auto"
                    height="auto"
                    @click="deleteUser(user.uuid)"
                  >
                    <v-icon medium color="grey darken-1">mdi-delete</v-icon>
                  </v-btn>
                </template>
                <template v-slot:message>
                  <div align="center">
                    <span
                      >Are you sure you whant to permenently delete
                      {{ user.name }} {{ user.surName }} ?</span
                    >
                  </div>
                  <br />
                </template>
              </popup>
            </v-card>
          </v-col>
        </v-row> </v-container
    ></v-expand-transition>
    <snackbar></snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Popup from "../layout/PopupInfo.vue";
import Snackbar from "../layout/Snackbar.vue";

export default {
  name: "Users",
  components: {
    popup: Popup,
    snackbar: Snackbar,
  },
  data() {
    return {
      toDelete: false,
    };
  },

  computed: {
    ...mapGetters(["getAllUsers"]),
  },

  methods: {
    ...mapActions([
      "dispatchHideUsers",
      "DELETE_USER",
      "dispatchHideInfoPopup",
      "dispatchShowInfoPopup",
      "SHOW_SNACKBAR",
    ]),
    hideUsersList() {
      this.dispatchHideUsers();
    },

    deleteUser(uuid) {
      this.showPopup();
      if (this.toDelete == true) {
        this.DELETE_USER(uuid);
        this.hidePopup();
        this.SHOW_SNACKBAR();
      } else {
        console.log("Item was NOT deleted");
      }
    },

    hidePopup() {
      this.dispatchHideInfoPopup();
    },
    showPopup() {
      this.dispatchShowInfoPopup();
      return true;
    },
  },
};
</script>


<style scoped>
.container {
  border: 5px solid rgb(190, 190, 190);
  background: rgb(226, 226, 226);
}
</style>