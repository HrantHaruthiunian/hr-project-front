<template>
  <v-container class="teal lighten-5">
    <p>This is: {{ title }}</p>
    <v-row no-gutters>
      <v-col cols="2">
        <v-card outlined title class="pa-1 teal lighten-1 text-center"
          >Not.Id</v-card
        ></v-col
      >
      <v-col cols="2">
        <v-card outlined title class="pa-1 teal lighten-1 text-center"
          >Subject</v-card
        ></v-col
      >
      <v-col cols="2">
        <v-card outlined title class="pa-1 teal lighten-1 text-center"
          >Opening date</v-card
        ></v-col
      >
      <v-col cols="4">
        <v-card outlined title class="pa-1 teal lighten-1 text-center"
          >content</v-card
        ></v-col
      >
      <v-col cols="2">
        <v-card outlined title class="pa-1 teal lighten-1 text-center"
          >Autor</v-card
        ></v-col
      >
    </v-row>
    <v-row
      no-gutters
      v-for="notation in notationsListComputed"
      :key="notation.uuid"
    >
      <v-col cols="2">
        <v-card class="pa-1" outlined title>{{ notation.uuid }}</v-card>
      </v-col>
      <v-col cols="2">
        <v-card class="pa-1" outlined title>{{ notation.subject }}</v-card>
      </v-col>
      <v-col cols="2">
        <v-card class="pa-1" outlined title>{{ notation.openingDate }}</v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="pa-1" outlined title>{{ notation.content }}</v-card>
      </v-col>
      <v-col cols="2">
        <v-card class="pa-1" outlined title>{{ notation.user_uuid }}</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Notations",

  data: () => ({
    title: "Notations component",
  }),

  computed: {
    notationsListComputed() {
      return this.$store.state.notations;
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