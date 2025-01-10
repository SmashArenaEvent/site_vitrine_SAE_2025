<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LoginOut from './components/LoginOut.vue';
import Header from '@/components/Header.vue';
</script>
<template>
  <Header/>
  <main>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
  </main>

</template>