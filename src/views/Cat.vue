<template>
    <h1>The cat is {{ name }}</h1>
</template>
  <script lang="ts">
  export default {
    props: ["name"],
  };
  </script>