<template>
  <v-app>
    <app-nav-bar></app-nav-bar>

    <v-main>
      <router-view></router-view>
      <app-users></app-users>
      <app-user-form></app-user-form>
    </v-main>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue";
import Users from "./components/users/Users.vue";
import UserInputForm from "./components/users/UserInputForm.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "App",

  components: {
    "app-nav-bar": Navbar,
    "app-users": Users,
    "app-user-form": UserInputForm,
    "app-footer": Footer,
  },
};
</script>


