<template>
  <div
    class="rounded-2xl col-span-12 lg:col-span-4 col12 lg:block text-Blanc mt-5 py-5 relative z-10"
    :class="{ 'border border-Tonic_Sombre': Style == '0', 'bg-Tonic_Sombre': Style == '1' }"
  >
    <h3 class="lg:mx-7 col-start-2 col-span-10 font-fugaz-one uppercase text-xl lg:text-3xl mb-5">
      {{ Title }}
    </h3>
    <p class="lg:mx-7 lg:text-xl col-start-2 col-span-10">{{ Text }}</p>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
  Title: string
  Text: string
  Style: string
}>()
</script>
