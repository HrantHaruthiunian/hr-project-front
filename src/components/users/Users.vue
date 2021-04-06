<template>
  <v-app>
    <div id="users-list">
      <p>This is: {{ title }}</p>
    </div>
  </v-app>
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