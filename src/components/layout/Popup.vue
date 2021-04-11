<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>

      <v-card>
        <h2>here will be the relevant form</h2>
        <v-card-text>
          <app-user-form></app-user-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import UserInputForm from "../users/UserInputForm";
export default {
  components: {
    "app-user-form": UserInputForm,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>


