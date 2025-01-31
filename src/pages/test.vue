<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { pb } from '@/backend'
import Formulaire from '@/components/Formulaire.vue'
import CardRegles from '@/components/CardRegles.vue'
import Slider from '@/components/Slider.vue'
import type { ImageHeroRecord, ImageHeroResponse } from '@/pocketbase-types'
import ImgPb from '@/components/ImgPb.vue'
const ImageHero = ref<ImageHeroResponse | null>(null)

console.log(ImageHero)
console.log('test')

const getRandomImage = async () => {
  try {
    // Récupérer tous les enregistrements de la collection
    const records = await pb.collection('ImageHero').getFullList<ImageHeroResponse>()
    
    if (records.length > 0) {
      // Sélectionner une image au hasard
      ImageHero.value = records[Math.floor(Math.random() * records.length)]
    }
  } catch (error) {
    console.error('Erreur lors du chargement des images:', error)
  }
}

onMounted(getRandomImage)
</script>
<template>
    <ImgPb 
        v-if="ImageHero?.Image"
        :record="ImageHero"
        :filename="ImageHero?.Image"
    />
</template>