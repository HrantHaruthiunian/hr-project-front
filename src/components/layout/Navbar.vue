<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar app color="grey" dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        alt="HEX Division Logo"
        class="shrink mr-2"
        contain
        src="../../assets/HEX_Logo.png"
        transition="scale-transition"
        width="80"
      />
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :ripple="{ class: 'red--text' }" text>
        <span class="mr-1">Users</span>
        <v-icon large color="grey darken-2"
          >{{ icons.mdiAccountMultiple }}
        </v-icon>
      </v-btn>
      <v-btn :ripple="{ class: 'red--text' }" text>
        <span
          >Vacation requests
          <v-icon large color="grey darken-2"
            >{{ icons.mdiBabyCarriage }}
          </v-icon>
        </span>
      </v-btn>
      <v-btn :ripple="{ class: 'red--text' }" text>
        <span
          >Notations
          <v-icon large color="grey darken-2">{{ icons.mdiChatAlert }} </v-icon>
        </span>
      </v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card height="350px">
      <v-navigation-drawer absolute left v-model="drawer">
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Jane Smith</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="link in links" :key="link.icon">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>
</template>



  
<script>
import {
  mdiAccountMultiple,
  mdiAccountPlus,
  mdiBabyCarriage,
  mdiChatAlert,
  mdiChatPlus,
  mdiAllergy,
} from "@mdi/js";

export default {
  name: "Navbar",

  data() {
    return {
      drawer: true,

      icons: {
        mdiAccountMultiple,
        mdiAccountPlus,
        mdiBabyCarriage,
        mdiChatAlert,
        mdiChatPlus,
        mdiAllergy,
      },
      selectedLink: 3,
      links: [
        { icon: mdiAccountPlus, text: "Add a new user", route: "/v1/users" },
        { icon: mdiAllergy, text: "Add a new request", route: "/v1/requests" },
        {
          icon: mdiChatPlus,
          text: "Add a new notation",
          route: "/v1/notations",
        },
      ],
    };
  },
};
</script>
