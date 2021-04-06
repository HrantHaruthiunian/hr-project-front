<template>
  <v-app>
    <v-app-bar app color="grey" dark>
      <div class="d-flex align-center">
        <v-img
          alt="HEX Division Logo"
          class="shrink mr-2"
          contain
          src="./assets/HEX_Logo.png"
          transition="scale-transition"
          width="80"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="http://localhost:3000/v1/users" target="_blank" text>
        <span class="mr-1">Users</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn href="http://localhost:3000/v1/requests" target="_blank" text>
        <span>Vacation requests</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn href="http://localhost:3000/v1/notations" target="_blank" text>
        <span>Notations</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/layout/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
