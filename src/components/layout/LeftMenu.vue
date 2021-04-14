<template>
  <v-navigation-drawer app left hide-overlay value v-model="getLeftMenuStatus">
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="../../assets/MyPic2.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Hrant Harutyunyan</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="item in leftMenuItems" :key="item.title">
        <!--<popup-user>-->
        <v-list-item slot="link">
          <v-list-item-icon>
            <v-icon medium>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <user-form slot="form" />
        <!--</popup-user>-->
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
//import Popup from "./Popup.vue";
import UserInputForm from "../users/UserInputForm.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "LeftMenu",
  components: {
    // "popup-user": Popup,
    "user-form": UserInputForm,
  },
  data() {
    return {
      leftMenuItems: [
        { icon: "mdi-account-plus", title: "Add user" },
        { icon: "mdi-allergy", title: "Add request" },
        { icon: "mdi-chat-plus", title: "Add notation" },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "getLeftMenuStatus",
      "getRightMenuStatus",
      "getUsersVisibility",
      "getRequestsVisibility",
      "getNotationsVisibility",
    ]),
  },
  methods: {
    ...mapActions([
      "changeLeftMenuStatus",
      "changeRightMenuStatus",
      "showUsers",
      "hideUsers",
      "showRequests",
      "hideRequests",
      "showNotations",
      "hideNotations",
    ]),
    changeLeftMenuStatus() {
      this.changeLeftMenuStatus();
    },
    changeRightMenuStatus() {
      this.changeRightMenuStatus();
    },
    showUsers() {
      this.showUsers();
    },
    hideUsers() {
      this.hideUsers();
    },
    showRequests() {
      this.showRequests();
    },
    hideRequests() {
      this.hideRequests();
    },
    showNotations() {
      this.showNotations();
    },
    hideNotations() {
      this.hideNotations();
    },
  },
};
</script>
