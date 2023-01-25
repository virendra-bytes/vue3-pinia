import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCatStore = defineStore({
  id: 'cats',
  state: () => ({
    cats: [],
    post: null,
    loading: false,
    error: null
  }),
  persist: {
    storage: sessionStorage,
  },
  getters: {
    getCats: (state)  => state.cats,
  },
  actions: {
    async fetchCats() {
      this.cats = []
      this.loading = true
      try {
        this.cats = await fetch('https://cat-fact.herokuapp.com/facts')
        .then((response) => response.json()) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCatStore, import.meta.hot))
}
