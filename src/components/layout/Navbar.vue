<template>
  <div>
    <v-navigation-drawer
      app
      left
      hide-overlay
      class="show-md-and-up"
      v-model="isLeftMenuVisible"
    >
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

      <popup>
        <v-list nav slot="link">
          <v-divider inset></v-divider>

          <v-list-item-group>
            <v-list-item v-for="item in leftMenuItems" :key="item.name">
              <v-btn
                min-width="215px"
                :ripple="{ class: 'red--text' }"
                text
                @click="showPopup(item)"
              >
                <v-list-item-icon>
                  <v-icon medium>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-btn>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <template #form>
          <user-form v-if="userFormState"></user-form>
          <request-form v-if="requestFormState"></request-form>
          <notation-form v-if="notationFormState"></notation-form>
        </template>
      </popup>
    </v-navigation-drawer>

    <v-app-bar app>
      <span class="hidden-lg-and-up">
        <v-app-bar-nav-icon
          @click="isLeftMenuVisible = !isLeftMenuVisible"
        ></v-app-bar-nav-icon>
      </span>

      <v-toolbar-title>
        <v-img
          alt="HEX Division Logo"
          class="shrink mr-2"
          contain
          src="../../assets/HEX_Logo.png"
          transition="scale-transition"
          width="80"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn :ripple="{ class: 'red--text' }" text @click.stop="showUsers">
          <v-icon large color="grey darken-2">mdi-account-multiple</v-icon>
          Users
        </v-btn>

        <v-btn :ripple="{ class: 'red--text' }" text @click.stop="showRequests">
          <v-icon large color="grey darken-2">mdi-baby-carriage</v-icon>
          Vacation requests
        </v-btn>
        <v-btn
          :ripple="{ class: 'red--text' }"
          text
          @click.stop="showNotations"
        >
          <v-icon large color="grey darken-2">mdi-chat</v-icon>
          Notations
        </v-btn>
        <v-btn :ripple="{ class: 'red--text' }" text>
          <v-icon large color="grey darken-1">mdi-exit-to-app</v-icon>
          Sign Out
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Popup from "./Popup";
import UserInputForm from "../users/UserInputForm";
import RequestInputForm from "../requests/RequestInputForm";
import NotationInputForm from "../notations/NotationInputForm";

export default {
  name: "NavBar",
  components: {
    popup: Popup,
    "user-form": UserInputForm,
    "request-form": RequestInputForm,
    "notation-form": NotationInputForm,
  },

  data() {
    return {
      isLeftMenuVisible: true,

      userFormState: false,
      requestFormState: false,
      notationFormState: false,

      leftMenuItems: [
        {
          icon: "mdi-account-plus",
          title: "Add user",
          name: "user",
        },
        {
          icon: "mdi-allergy",
          title: "Add request",
          name: "request",
        },
        {
          icon: "mdi-chat-plus",
          title: "Add notation",
          name: "notation",
        },
      ],
    };
  },

  computed: {
    ...mapGetters([
      "getPopupStatus",
      "getUsersVisibility",
      "getRequestsVisibility",
      "getNotationsVisibility",
    ]),
  },

  methods: {
    ...mapActions([
      "dispatchShowPopup",
      "dispatchShowUsers",
      "dispatchHideUsers",
      "dispatchShowRequests",
      "dispatchHideRequests",
      "dispatchShowNotations",
      "dispatchHideNotations",
    ]),

    showPopup(item) {
      this.dispatchShowPopup();

      if (item.name == "user") {
        this.userFormState = true;
        this.requestFormState = this.notationFormState = false;
      } else if (item.name == "request") {
        this.requestFormState = true;
        this.userFormState = this.notationFormState = false;
      } else {
        this.notationFormState = true;
        this.requestFormState = this.userFormState = false;
      }
    },
    showUsers() {
      this.dispatchShowUsers();
    },
    hideUsers() {
      this.dispatchHideUsers();
    },
    showRequests() {
      this.dispatchShowRequests();
    },
    hideRequests() {
      this.dispatchHideRequests();
    },
    showNotations() {
      this.dispatchShowNotations();
    },
    hideNotations() {
      this.dispatchHideNotations();
    },
  },
};
</script>
