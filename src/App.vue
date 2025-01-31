<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import Header from '@/components/Header.vue'
import Footer from './components/Footer.vue'
</script>
<template>
  <Header />
  <main
    class="bg-Noir min-h-screen text-Blanc font-gothic-a1 text-xs pt-20 lg:pt-52 grille pb-64 lg:pb-[260px]"
  >
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
  </main>
  <Footer />
</template>
