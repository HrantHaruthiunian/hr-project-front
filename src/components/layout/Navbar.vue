<template>
  <div>
    <v-navigation-drawer app left hide-overlay v-model="isLeftMenuVisible">
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
          <popup-user>
            <v-list-item slot="link">
              <v-btn
                min-width="215px"
                :ripple="{ class: 'red--text' }"
                text
                @click.stop="'show' + item.onClick"
              >
                <v-list-item-icon>
                  <v-icon medium>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-btn>
            </v-list-item>
            <user-form slot="form" />
          </popup-user>
        </v-list-item>
      </v-list>
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

export default {
  name: "NavBar",

  data() {
    return {
      isLeftMenuVisible: true,

      leftMenuItems: [
        { icon: "mdi-account-plus", title: "Add user", onClick: "..." },
        { icon: "mdi-allergy", title: "Add request", onClick: "..." },
        { icon: "mdi-chat-plus", title: "Add notation", onClick: "..." },
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
      "dispatchShowUsers",
      "dispatchHideUsers",
      "dispatchShowRequests",
      "dispatchHideRequests",
      "dispatchShowNotations",
      "dispatchHideNotations",
    ]),
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
