<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Logo from './icons/Logo.vue'
import Menu from './icons/Menu.vue'
import Croix from './icons/Croix.vue'
import LogoInstagram from './icons/LogoInstagram.vue'
import LogoX from './icons/LogoX.vue'
import LogoDiscord from './icons/LogoDiscord.vue'
import LogoYoutube from './icons/LogoYoutube.vue'

import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import MotifsMobile from './icons/motifsMobile.vue'
const route = useRoute()
const activeMenu = ref(false)
</script>
<template>
  <header
    aria-label="Entête" class="grille h-20 lg:h-36 w-full justify-between font-fugaz-one text-xs fixed z-50 bg-Noir content-center shadow-lg"
  >
    <RouterLink to="/" aria-label="Aller à la page d'accueil" class="col-span-3 lg:col-span-2 w-fit" @click="activeMenu = false" onclick="window.scrollTo(0, 0);">
      <Logo
        class="h-10 lg:h-16 relative z-50 hover:opacity-60 duration-200"
        aria-label="Logo Smash Arena Event"
      />
    </RouterLink>
    <nav
      :aria-expanded="activeMenu"
      class="hidden lg:flex gap-6 lg:gap-10 lg:text-3xl justify-center lg:justify-between lg:col-span-7 items-center "
      :class="{
        '!flex flex-col lg:flex-row absolute lg:static left-0 bg-Noir w-screen lg:w-auto h-screen lg:h-auto z-40':
          activeMenu
      }"
    >
      <div class="absolute w-full lg:w-auto h-screen lg:h-auto aria-hidden">
        <div class="relative w-full h-screen lg:hidden flex flex-col justify-between">
          <MotifsMobile class="ml-0 top-2.5"/>
          <MotifsMobile class="ml-0 absolute sp:hidden" style="margin-top: calc(100vh - (98vw));"/>
        </div>
      </div>
      <RouterLink to="/regles" class="relative z-10">
        <button
          @click="activeMenu = false" onclick="window.scrollTo(0, 0);"
          class="bg-Tonic lg:bg-transparent h-12 lg:h-auto -skew-x-[25deg] lg:skew-x-0 hover:opacity-60 duration-200"
        >
          <p
            class="text-Noir lg:text-Blanc font-fugaz-one uppercase text-xl lg:text-2xl px-6 lg:px-0 skew-x-[25deg] lg:skew-x-0"
          >
            Règles
          </p>
        </button>
      </RouterLink>
      <RouterLink to="/faq">
        <button
          @click="activeMenu = false" onclick="window.scrollTo(0, 0);"
          class="bg-Tonic lg:bg-transparent h-12 lg:h-auto -skew-x-[25deg] lg:skew-x-0 hover:opacity-60 duration-200"
        >
          <p
            class="text-Noir lg:text-Blanc font-fugaz-one uppercase text-xl lg:text-2xl px-6 lg:px-0 skew-x-[25deg] lg:skew-x-0"
          >
            FAQ
          </p>
        </button>
      </RouterLink>
      <RouterLink @click="activeMenu = false" onclick="window.scrollTo(0, 0);" to="/aPropos">
        <button class="bg-Tonic lg:bg-transparent h-12 lg:h-auto -skew-x-[25deg] lg:skew-x-0">
          <p
            class="text-Noir lg:text-Blanc font-fugaz-one uppercase text-xl lg:text-2xl px-6 lg:px-0 skew-x-[25deg] lg:skew-x-0 hover:opacity-60 duration-200"
          >
            à propos
          </p>
        </button>
      </RouterLink>
      <RouterLink @click="activeMenu = false" onclick="window.scrollTo(0, 0);" to="/contact">
        <button class="bg-Tonic lg:bg-transparent h-12 lg:h-auto -skew-x-[25deg] lg:skew-x-0">
          <p
            class="text-Noir lg:text-Blanc font-fugaz-one uppercase text-xl lg:text-2xl px-6 lg:px-0 skew-x-[25deg] lg:skew-x-0 hover:opacity-60 duration-200"
          >
            Contact
          </p>
        </button>
      </RouterLink>
    </nav>
    <nav class="hidden gap-5 lg:flex justify-end lg:col-span-3 items-center relative w-fit ml-auto">
      <a href="https://www.instagram.com/smash_arena_event/" aria-label="L'instagram de l'association" class="hover:opacity-60 duration-200">
        <LogoInstagram class="w-fit h-8"/>
      </a>
      <a href="https://twitter.com/SmashArenaEvent" aria-label="Le twitter de l'association" class="hover:opacity-60 duration-200">
        <LogoX class="w-fit h-8"/>
      </a>
      <a href="https://discord.gg/6zFJf9WXy2" aria-label="Le discord de l'association" class="hover:opacity-60 duration-200">
        <LogoDiscord class="w-fit h-8"/>
      </a>
      <a href="#" aria-label="La chaine youtube de l'association" class="hover:opacity-60 duration-200">
        <LogoYoutube class="w-fit h-8"/>
      </a>
    </nav>
    <button aria-label="Ouverture de la navigation du header" aria-controls="activeMenu" class="col-span-6 col-start-7 lg:hidden ml-auto w-fit right-0">
      <Menu
        tabindex=0
        onkeydown=""
        alt="Ouvrir le menu du header"
        class="block lg:hidden ml-auto hover:opacity-60 duration-200"
        @click="activeMenu = !activeMenu"
        :class="{ '!hidden': activeMenu }"
      />
      <Croix
        tabindex=0
        onkeydown=""
        alt="Fermer le menu du header"
        class="hidden ml-auto z-50 w-[30px] hover:opacity-60 duration-200"
        @click="activeMenu = !activeMenu"
        :class="{ '!block': activeMenu, '!relative': activeMenu }"
      />
    </button>
  </header>
</template>
