<template>
  <v-expand-transition>
    <v-container class="brown lighten-5">
      <v-card class="pa-1" outlined title>
        <v-card-actions>
          <span>Requests list</span>
          <v-spacer></v-spacer>
          <v-icon class="right" @click.stop="hideRequestsList"
            >mdi-close</v-icon
          >
        </v-card-actions>
      </v-card>
      <v-row no-gutters>
        <v-col cols="2">
          <v-card outlined title class="pa-1 brown lighten-1 text-center"
            >Req.Id</v-card
          ></v-col
        >
        <v-col cols="2">
          <v-card outlined title class="pa-1 brown lighten-1 text-center"
            >Req.Title</v-card
          ></v-col
        >
        <v-col cols="2">
          <v-card outlined title class="pa-1 brown lighten-1 text-center"
            >Status</v-card
          ></v-col
        >
        <v-col cols="2">
          <v-card outlined title class="pa-1 brown lighten-1 text-center"
            >Opening date</v-card
          ></v-col
        >
        <v-col cols="2">
          <v-card outlined title class="pa-1 brown lighten-1 text-center"
            >Comment</v-card
          ></v-col
        >
        <v-col cols="2">
          <v-card outlined title class="pa-1 brown lighten-1 text-center"
            >Requester</v-card
          ></v-col
        >
      </v-row>
      <v-row
        no-gutters
        v-for="request in requestsListComputed"
        :key="request.uuid"
      >
        <v-col cols="2">
          <v-card class="pa-1" outlined title>{{ request.uuid }}</v-card>
        </v-col>
        <v-col cols="2">
          <v-card class="pa-1" outlined title>{{ request.title }}</v-card>
        </v-col>
        <v-col cols="2">
          <v-card class="pa-1" outlined title>{{ request.status }}</v-card>
        </v-col>
        <v-col cols="2">
          <v-card class="pa-1" outlined title>{{ request.openingDate }}</v-card>
        </v-col>
        <v-col cols="2">
          <v-card class="pa-1" outlined title>{{ request.comment }}</v-card>
        </v-col>
        <v-col cols="2">
          <v-card class="pa-1" outlined title>{{
            request.requester_uuid
          }}</v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-expand-transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Requests",

  data: () => ({
    title: "Requests component",
  }),

  computed: {
    ...mapGetters([]),
    requestsListComputed() {
      return this.$store.state.requests;
    },
  },

  methods: {
    ...mapActions(["dispatchHideRequests"]),
    hideRequestsList() {
      this.dispatchHideRequests();
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