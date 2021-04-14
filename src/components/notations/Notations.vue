<template>
  <v-expand-transition>
    <v-container class="teal lighten-5">
      <v-card class="pa-1" outlined title>
        <v-card-actions>
          <span>Notations list</span>
          <v-spacer></v-spacer>
          <v-icon class="right" @click.stop="hideNotationsList"
            >mdi-close</v-icon
          >
        </v-card-actions>
      </v-card>
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
          <v-card class="pa-1" outlined title>{{
            notation.openingDate
          }}</v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-1" outlined title>{{ notation.content }}</v-card>
        </v-col>
        <v-col cols="2">
          <v-card class="pa-1" outlined title>{{ notation.user_uuid }}</v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-expand-transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Notations",

  data: () => ({}),

  computed: {
    ...mapGetters([]),
    notationsListComputed() {
      return this.$store.state.notations;
    },
  },
  methods: {
    ...mapActions(["dispatchHideNotations"]),
    hideNotationsList() {
      this.dispatchHideNotations();
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