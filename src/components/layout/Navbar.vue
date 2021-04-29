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
        <v-list-item three-line>
          <v-list-item-avatar>
            <img src="../../assets/MyPic2.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Hrant Harutyunyan</v-list-item-title>
            <v-list-item-subtitle> Logged In </v-list-item-subtitle>
            <br />
            <br />
            <v-list-item-subtitle>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on" text>
                    Edit profile
                    <v-icon class="ml-2" medium>mdi-account-edit</v-icon>
                  </v-btn>
                </template>
                <template v-slot:default>
                  <v-card>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-icon medium @click="dialog = false">mdi-close</v-icon>
                    </v-card-actions>

                    <v-card-title>
                      <span>Please update the data below</span>
                    </v-card-title>

                    <user-profile @closeDialog="dialog = false"></user-profile>
                  </v-card>
                </template>
              </v-dialog>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <popup-form>
        <v-list slot="link">
          <v-divider inset></v-divider>

          <v-list-item-group>
            <v-list-item
              class="mt-2"
              v-for="(item, index) in leftMenuItems"
              :key="index"
            >
              <v-btn
                min-width="215px"
                :ripple="{ class: 'red--text' }"
                @click="showPopup(item)"
                text
              >
                <v-list-item-icon>
                  <v-icon medium>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-btn>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <template v-slot:form>
          <user-form v-if="userFormState"></user-form>
          <request-form v-if="requestFormState"></request-form>
          <notation-form v-if="notationFormState"></notation-form>
        </template>
      </popup-form>
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
        <v-btn :ripple="{ class: 'red--text' }" text @click="showUsers">
          <v-icon large color="grey darken-2">mdi-account-multiple</v-icon>
          Users
        </v-btn>

        <v-btn :ripple="{ class: 'red--text' }" text @click="showRequests">
          <v-icon large color="grey darken-2">mdi-baby-carriage</v-icon>
          Vacation requests
        </v-btn>
        <v-btn :ripple="{ class: 'red--text' }" text @click="showNotations">
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
import PopupForm from "./PopupForm";
import UserInputForm from "../users/UserInputForm";
import UserProfile from "../users/UserProfile";
import RequestInputForm from "../requests/RequestInputForm";
import NotationInputForm from "../notations/NotationInputForm";

export default {
  name: "NavBar",
  components: {
    "popup-form": PopupForm,
    "user-form": UserInputForm,
    "user-profile": UserProfile,
    "request-form": RequestInputForm,
    "notation-form": NotationInputForm,
  },

  data() {
    return {
      isLeftMenuVisible: true,
      dialog: false,
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
      "getUsersVisibility",
      "getRequestsVisibility",
      "getNotationsVisibility",
    ]),
  },

  methods: {
    ...mapActions([
      "SHOW_formPOPUP",
      "SHOW_USERS_LIST",
      "HIDE_USERS_LIST",
      "SHOW_REQUESTS_LIST",
      "HIDE_REQUESTS_LIST",
      "SHOW_NOTATIONS_LIST",
      "HIDE_NOTATIONS_LIST",
    ]),

    showPopup(item) {
      this.SHOW_formPOPUP();

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
      this.SHOW_USERS_LIST();
    },
    hideUsers() {
      this.HIDE_USERS_LIST();
    },
    showRequests() {
      this.SHOW_REQUESTS_LIST();
    },
    hideRequests() {
      this.HIDE_REQUESTS_LIST();
    },
    showNotations() {
      this.SHOW_NOTATIONS_LIST();
    },
    hideNotations() {
      this.HIDE_NOTATIONS_LIST();
    },
  },
};
</script>
