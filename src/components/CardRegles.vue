<template>
  <div
    class="rounded-2xl text-Blanc col-span-12 lg:col-span-4 col12 lg:block lg:px-12 py-5 lg:py-6 mt-6 lg:mt-8 relative z-10"
    :class="{ 'border border-Tonic_Sombre': Style == '0', 'bg-Tonic_Sombre': Style == '1' }"
  >
    <div class="flex items-center col-start-2 col-span-10 gap-4">
      <iconEpee v-if="Icone == '1'" class="lg:w-14 lg:h-14" aria-label="Icones d'épée" />
      <iconEtoile v-if="Icone == '2'" class="lg:w-14 lg:h-14" aria-label="Icones d'étoile" />
      <iconFleche v-if="Icone == '3'" class="lg:w-14 lg:h-14" aria-label="Icone de fléche" />
      <iconPoing v-if="Icone == '4'" class="lg:w-14 lg:h-14" aria-label="Icone de coup de point" />
      <iconPacman v-if="Icone == '5'" class="lg:w-14 lg:h-14" aria-label="Icone de pacman" />
      <iconFeuille v-if="Icone == '6'" class="lg:w-14 lg:h-14" aria-label="Icone de feuille" />
      <iconOeuf v-if="Icone == '7'" class="lg:w-14 lg:h-14" aria-label="Icone d'oeuf" />
      <iconBall v-if="Icone == '8'" class="lg:w-14 lg:h-14" aria-label="Icone de pokeball" />
      <h3 class="font-fugaz-one uppercase text-xl lg:text-3xl">{{ Title }}</h3>
    </div>
    <p class="lg:text-xl col-start-2 col-span-10 mt-5 lg:mt-7">{{ Text }}</p>
  </div>
</template>
<script setup lang="ts">
import iconEpee from './icons/iconEpee.vue'
import iconEtoile from './icons/iconEtoile.vue'
import iconFleche from './icons/iconFleche.vue'
import iconPoing from './icons/iconPoing.vue'
import iconPacman from './icons/iconPacman.vue'
import iconFeuille from './icons/iconFeuille.vue'
import iconOeuf from './icons/iconOeuf .vue'
import iconBall from './icons/iconBall.vue'

import { defineProps } from 'vue'
const props = defineProps<{
  Icone: string
  Title: string
  Text: string
  Style: string
}>()
</script>
