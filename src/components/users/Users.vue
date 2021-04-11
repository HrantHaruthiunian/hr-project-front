<template>
  <v-container class="blue-grey lighten-5">
    <p>This is: {{ title }}</p>
    <v-row no-gutters>
      <v-col cols="3">
        <v-card outlined title class="pa-1 blue-grey lighten-1 text-center"
          >Name</v-card
        ></v-col
      >
      <v-col cols="3">
        <v-card outlined title class="pa-1 blue-grey lighten-1 text-center"
          >Surname</v-card
        ></v-col
      >
      <v-col cols="3">
        <v-card outlined title class="pa-1 blue-grey lighten-1 text-center"
          >Brth date</v-card
        ></v-col
      >
      <v-col cols="3">
        <v-card outlined title class="pa-1 blue-grey lighten-1 text-center"
          >Registration date</v-card
        ></v-col
      >
    </v-row>
    <v-row no-gutters v-for="user in usersListComputed" :key="user.uuid">
      <v-col cols="3">
        <v-card class="pa-1" outlined title>{{ user.name }}</v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-1" outlined title>{{ user.surName }}</v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-1" outlined title>{{ user.dateOfBirth }}</v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="pa-1" outlined title>{{ user.signUpDate }}</v-card>
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