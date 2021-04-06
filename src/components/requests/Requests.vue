<template>
  <div>
    <p>This is: {{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "Requests",

  data: () => ({
    title: "Requests component",
  }),
};
</script>