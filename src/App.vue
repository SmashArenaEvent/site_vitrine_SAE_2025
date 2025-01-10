<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import Header from '@/components/Header.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <Header class="bg-slate-950 text-white" />
  <main class="bg-slate-950 min-h-screen text-white">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
    <Footer class="bg-slate-950 text-white"/>
  </main>
</template>