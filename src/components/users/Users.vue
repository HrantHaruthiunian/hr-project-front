<template>
  <div>
    <div id="users-list">
      <p>This is: {{ title }}</p>
      <table border="1">
        <tr>
          <td><span>Name</span></td>
          <td><span>Surname</span></td>
          <td><span>Brth date</span></td>
          <td><span>Registration date</span></td>
        </tr>
        <tr v-for="user in usersListComputed" :key="user.id">
          <td>
            <span>{{ user.name }}</span>
          </td>
          <td>
            <span>{{ user.surName }}</span>
          </td>
          <td>
            <span>{{ user.dateOfBirth }}</span>
          </td>
          <td>
            <span>{{ user.signUpDate }}</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
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