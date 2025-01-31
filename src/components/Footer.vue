<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Logo from './icons/Logo.vue'
import Insta from './icons/BoutonInsta.vue'
import X from './icons/BoutonX.vue'
import Discord from './icons/BoutonDiscord.vue'
import Youtube from './icons/BoutonYoutube.vue'

import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <footer
    class="font-gothic-a1 text-xs grille pt-7 lg:pt-5 pb-5 lg:pb-4 bg-Noir text-Blanc -mt-64 lg:-mt-[260px]"
  >
    <div class="w-full col-span-12 col12">
      <RouterLink to="/" class="col-start-1 col-span-3 lg:col-span-2" onclick="window.scrollTo(0, 0);">
      <Logo
        class="h-10 lg:h-20 lg:mt-8 hover:opacity-60 duration-200"
        alt="Logo Smash Arena Event"
      />
      </RouterLink>
      <nav
        class="flex flex-col lg:text-base lg:h-36 lg:justify-center col-span-2 h- mt-3 lg:mt-0 gap-2 lg:gap-3"
      >
        <RouterLink to="/aPropos" class="hover:opacity-60 duration-200" onclick="window.scrollTo(0, 0);">À propos</RouterLink>
        <RouterLink to="/contact" class="hover:opacity-60 duration-200" onclick="window.scrollTo(0, 0);">Contact</RouterLink>
        <RouterLink to="/regles" class="hover:opacity-60 duration-200" onclick="window.scrollTo(0, 0);">Règles</RouterLink>
        <RouterLink to="/faq" class="hover:opacity-60 duration-200" onclick="window.scrollTo(0, 0);">FAQ</RouterLink>
      </nav>
      <nav
        class="flex flex-col lg:flex-row grid-cols-2 gap-8 col-start-9 col-span-4 lg:h-36 items-center ml-auto"
      >
        <div class="flex gap-8">
          <a class="w-9 lg:w-10 h-9 lg:h-10 hover:opacity-60 duration-200" href="https://www.instagram.com/smash_arena_event/"
            ><Insta alt="Instagram"
          /></a>
          <a class="w-9 lg:w-10 h-9 lg:h-10 hover:opacity-60 duration-200" href="https://twitter.com/SmashArenaEvent"
            ><X alt="X"
          /></a>
        </div>
        <div class="flex gap-8">
          <a class="w-9 lg:w-10 h-9 lg:h-10 hover:opacity-60 duration-200" href="https://discord.gg/6zFJf9WXy2"
            ><Discord alt="Discord"
          /></a>
          <a class="w-9 lg:w-10 h-9 lg:h-10 hover:opacity-60 duration-200" href="#"><Youtube alt="Youtube" /></a>
        </div>
      </nav>
    </div>
    <nav
      class="flex w-full justify-center gap-6 lg:gap-12 text-Gris_clair col-span-12 mt-12 lg:mt-0 lg:text-base"
    >
      <RouterLink to="/mentionsLegales" onclick="window.scrollTo(0, 0);" class="hover:opacity-60 duration-200"><p>Mentions légales</p></RouterLink>
      <RouterLink to="/politiqueDeConfidentialite" onclick="window.scrollTo(0, 0);" class="hover:opacity-60 duration-200"><p>Politique de Confidentialité</p></RouterLink>
    </nav>
    <p class="text-center text-Tonic col-span-12 mt-6 lg:mt-8 lg:text-base">
      @Smash Arena Event 2025
    </p>
  </footer>
</template>
