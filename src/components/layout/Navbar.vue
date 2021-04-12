<template>
  <div>
    <v-navigation-drawer app v-model="drawer" left>
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
        <v-list-item v-for="item in linksDrawer" :key="item.icon">
          <popup-user>
            <v-list-item-icon slot="link">
              <v-icon medium>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content slot="link">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <user-form slot="form" />
          </popup-user>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <span class="hidden-lg-and-up">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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

      <span class="hidden-sm-and-up">
        <v-btn @click.stop="menuDrawer = !menuDrawer"> Menu </v-btn>
      </span>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn :ripple="{ class: 'red--text' }" text>
          <v-icon large color="grey darken-2"
            >{{ icons.mdiAccountMultiple }}
          </v-icon>
          Users
        </v-btn>
        <v-btn :ripple="{ class: 'red--text' }" text>
          <v-icon large color="grey darken-2"
            >{{ icons.mdiBabyCarriage }}
          </v-icon>
          Vacation requests
        </v-btn>
        <v-btn :ripple="{ class: 'red--text' }" text>
          <v-icon large color="grey darken-2">{{ icons.mdiChatAlert }} </v-icon>
          Notations
        </v-btn>
        <v-btn :ripple="{ class: 'red--text' }" text>
          <v-icon large color="grey darken-1">{{ icons.mdiExitToApp }}</v-icon>
          Sign Out
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer app v-model="menuDrawer" absolute temporary right>
      <v-list>
        <v-list-item v-for="item in linksMenu" :key="item.title">
          <v-list-item-icon>
            <v-icon large>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {
  mdiAccountMultiple,
  mdiBabyCarriage,
  mdiChatAlert,
  mdiExitToApp,
  mdiAccountPlus,
  mdiChatPlus,
  mdiAllergy,
} from "@mdi/js";
import Popup from "./Popup.vue";
import UserInputForm from "../users/UserInputForm.vue";

export default {
  name: "NavigationBar",
  components: {
    "popup-user": Popup,
    "user-form": UserInputForm,
  },
  data() {
    return {
      icons: {
        mdiAccountMultiple,
        mdiBabyCarriage,
        mdiChatAlert,
        mdiExitToApp,
        mdiAccountPlus,
        mdiChatPlus,
        mdiAllergy,
      },
      menuDrawer: true,
      drawer: true,

      linksDrawer: [
        { icon: mdiAccountPlus, title: "Add user" },
        { icon: mdiAllergy, title: "Add request" },
        {
          icon: mdiChatPlus,
          title: "Add notation",
        },
      ],
      linksMenu: [
        {
          icon: mdiAccountMultiple,
          title: "Users",
          route: "/users",
        },
        {
          icon: mdiBabyCarriage,
          title: "Vacation requests",
          route: "/requests",
        },
        {
          icon: mdiChatAlert,
          title: "Notations",
          route: "/notations",
        },
        {
          icon: mdiExitToApp,
          title: "Sign Out",
        },
      ],
    };
  },
};
</script>
