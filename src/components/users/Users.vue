<template>
  <div>
    <v-expand-transition
      ><v-container class="blue-grey lighten-5">
        <v-row>
          <v-col cols="12">
            <v-card class="pa-1" outlined title>
              <v-card-actions>
                <span>Users list</span>

                <v-spacer></v-spacer>
                <v-icon class="right" @click.stop="hideUsersList"
                  >mdi-close</v-icon
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
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
              <popup-delete>
                <template #linkInfo>
                  <v-btn class="mx-auto" height="auto" @click="showPopup(user)">
                    <v-icon medium color="grey darken-1">mdi-delete</v-icon>
                  </v-btn>
                </template>
              </popup-delete>
            </v-card>
          </v-col>
        </v-row>
      </v-container></v-expand-transition
    >
    <snackbar></snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PopupDelete from "../layout/PopupDelete.vue";
import Snackbar from "../layout/Snackbar.vue";

export default {
  name: "Users",

  components: {
    "popup-delete": PopupDelete,
    snackbar: Snackbar,
  },

  computed: {
    ...mapGetters(["getAllUsers"]),
  },

  methods: {
    ...mapActions(["HIDE_USERS_LIST", "SHOW_deletePOPUP"]),

    hideUsersList() {
      this.HIDE_USERS_LIST();
    },

    showPopup(user) {
      this.SHOW_deletePOPUP(user);
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