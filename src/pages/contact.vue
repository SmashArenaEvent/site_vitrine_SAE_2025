<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Formulaire from '@/components/Formulaire.vue'
import motifs from '@/components/icons/motifs.vue';
import MotifsMobile from '@/components/icons/motifsMobile.vue';
</script>
<template>
  <article class="col-span-12 col12 relative mt-8">
    <MotifsMobile/>
    <motifs class="hidden lg:flex"/>
    <h1 class="col-span-12 h-fit text-center font-fugaz-one uppercase text-4xl lg:text-6xl lg:mb-12 mt-8 lg:mt-0">
      <span class="text-Tonic">N</span>ous <span class="text-Tonic">c</span>ontacter ?
    </h1>
    <Formulaire />
</article>
</template>
