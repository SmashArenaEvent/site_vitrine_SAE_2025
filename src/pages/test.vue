<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { pb } from '@/backend'
import ImgPb from '@/components/ImgPb.vue'
import { randomImage } from '@/backend' 
console.log('test')
const ImageHero = await randomImage()
console.log('Lieu :', ImageHero.id)


</script>
<template>
    <ImgPb 
        v-if="ImageHero.Image"
        :record="ImageHero"
        :filename="ImageHero.Image"
    />
</template>