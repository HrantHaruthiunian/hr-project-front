<template>
  <v-container>
    <p>This is: {{ title }}</p>
    <v-row no-gutters>
      <v-col cols="3"> <v-card outlined tile>Name</v-card></v-col>
      <v-col cols="3"> <v-card outlined tile>Surname</v-card></v-col>
      <v-col cols="3"> <v-card outlined tile>Brth date</v-card></v-col>
      <v-col cols="3"> <v-card outlined tile>Registration date</v-card></v-col>
    </v-row>
    <v-row no-gutters v-for="user in usersListComputed" :key="user.id">
      <v-col cols="3">
        <v-card class="pa-1" outlined tile>{{ user.name }}</v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-1" outlined tile>{{ user.surName }}</v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-1" outlined tile>{{ user.dateOfBirth }}</v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-1" outlined tile>{{ user.signUpDate }}</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Users",

  data: () => ({
    title: "Users component",
  }),

  computed: {
    usersListComputed() {
      return this.$store.state.users;
    },
  },
};
</script>
<style scoped>
.container {
  border: 5px solid rgb(190, 190, 190);
  background: rgb(226, 226, 226);
}
</style>