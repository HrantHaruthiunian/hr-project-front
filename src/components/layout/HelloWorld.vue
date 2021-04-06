<template>
  <div>
    <p>This is: {{ title }}</p>
    <app-requests></app-requests>
    <hr />
    <app-notations></app-notations>
    <hr />
    <app-users></app-users>
    <hr />

    <app-user-input></app-user-input>

    <hr />
    <app-request-input></app-request-input>
    <hr />
    <app-notation-input></app-notation-input>
    <hr />
  </div>
</template>

<script>
export default {
  name: "",

  data: () => ({
    title: "all components ...",
  }),
};
</script>
