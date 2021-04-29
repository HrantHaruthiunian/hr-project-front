<template>
  <v-app>
    <app-nav-bar></app-nav-bar>

    <v-main>
      <app-users
        v-if="getUsersVisibility"
        :key="getRefreshUsersComponent"
      ></app-users>
      <app-requests v-if="getRequestsVisibility"></app-requests>
      <app-notations v-if="getNotationsVisibility"></app-notations>
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
import { mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    "app-nav-bar": Navbar,
    "app-users": Users,
    "app-requests": Requests,
    "app-notations": Notations,
    "app-footer": Footer,
  },

  async created() {
    this.$store.dispatch("FETCH_USERS");
  },

  computed: {
    ...mapGetters([
      "getUsersVisibility",
      "getRequestsVisibility",
      "getNotationsVisibility",
      "getRefreshUsersComponent",
    ]),
  },
};
</script>


