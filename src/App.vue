<template>
  <v-app>
    <app-nav-bar></app-nav-bar>

    <v-main>
      <app-users></app-users>
      <app-requests></app-requests>
      <app-notations></app-notations>
    </v-main>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue";

import Users from "./components/users/Users.vue";
import Requests from "./components/requests/Requests.vue";
import Notations from "./components/notations/Notations.vue";

import Footer from "./components/layout/Footer.vue";

export default {
  name: "App",

  components: {
    "app-nav-bar": Navbar,

    "app-users": Users,
    "app-requests": Requests,
    "app-notations": Notations,

    "app-footer": Footer,
  },
};
</script>


