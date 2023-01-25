<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cats">Cats</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import Layout from './layouts/default.vue'

import { defineComponent, ref } from 'vue'
import { useCatStore } from './stores/cats'

export default defineComponent({
  components: { Layout },

  setup() {
    const cats = useCatStore()

    const itemName = ref('')

    // @ts-ignore
    window.stores = { cats }

    return {
      itemName,
      cats,
    }
  },
})
</script>

<style scoped>
img {
  width: 200px;
}

button,
input {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
