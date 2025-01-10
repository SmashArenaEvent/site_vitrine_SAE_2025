<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LoginOut from './components/LoginOut.vue';
import Header from '@/components/Header.vue';
</script>
<template>
  <Header class="bg-slate-950 h-screen text-white" />
  <main class="bg-slate-950 h-screen text-white">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
    <Footer class="bg-slate-950 h-screen text-white"/>
  </main>

</template>