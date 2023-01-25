<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCatStore } from '../stores/cats'

const { cats, loading, error } = storeToRefs(useCatStore())
const { fetchCats } = useCatStore()
fetchCats()

// const props = defineProps({
//     catId: String
// })

// const emit = defineEmits(['change', 'delete'])

</script>

<template>
    <main>
        <p v-if="loading">Loading posts...</p>
        <p v-if="error">{{ error.message }}</p>
        <p v-if="cats" v-for="cat in cats" :key="cat._id">
            <RouterLink :to="`/cats/${cat.user}`">{{ cat.user }}</RouterLink>
        <p>{{ cat }}</p>
        </p>
    </main>
</template>