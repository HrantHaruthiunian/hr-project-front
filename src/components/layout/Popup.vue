<template>
  <v-row justify="center">
    <v-dialog v-model="popupDialog" persistent max-width="800px">
      <template v-slot:activator="{ on, attrs }">
        <v-list-item v-bind="attrs" v-on="on">
          <slot name="link"></slot>
        </v-list-item>
      </template>

      <v-card>
        <v-card-actions>
          <v-card-subtitle>Plaese fill the fields below</v-card-subtitle>
          <v-spacer></v-spacer>
          <v-icon large color="grey darken-1" @click="popupDialog = false">
            {{ icons.mdiCloseThick }}
          </v-icon>
        </v-card-actions>
        <v-card-text>
          <slot name="form"></slot>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mdiCloseThick } from "@mdi/js";

export default {
  data() {
    return {
      popupDialog: this.$store.state.dialogs.popupDialog,
      icons: { mdiCloseThick },
    };
  },
};
</script>


