<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import Header from '@/components/Header.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <Header class="bg-Noir text-Blanc" />
  <main class="bg-Noir min-h-screen text-Blanc">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
    <Footer class="bg-slate-Noir text-Blanc"/>
  </main>
</template>