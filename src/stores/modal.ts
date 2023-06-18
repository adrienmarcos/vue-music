import { defineStore } from 'pinia'

export default defineStore('modal', {
  state: () => ({
    isOpen: false
  }),
  getters: {
    hiddenClass(state): string {
      return !state.isOpen ? 'hidden' : ''
    }
  }
})
