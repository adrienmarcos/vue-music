<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>

      <div class="flex flex-grow items-center">
        <ul class="flex flex-row mt-1">
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <li>
            <a class="px-2 text-white" href="#">Manage</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { mapWritableState } from 'pinia'
import useModalStore from '@/stores/modal'

export default {
  name: 'AppHeader',
  computed: {
    ...mapWritableState(useModalStore, ['isOpen'])
  },
  methods: {
    toggleAuthModal(): void {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
