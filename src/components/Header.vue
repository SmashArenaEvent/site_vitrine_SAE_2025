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
const route = useRoute()
const activeMenu = ref(false)
</script>
<template>
  <header
    class="grille h-20 lg:h-48 w-full justify-between font-fugaz-one text-xs fixed z-50 bg-Noir content-center"
  >
    <RouterLink to="/" class="col-span-3 lg:col-span-2">
      <Logo
        class="h-10 lg:h-20 relative z-50 hover:opacity-60 duration-200"
        alt="Logo Smash Arena Event"
      />
    </RouterLink>
    <nav
      class="hidden lg:flex gap-6 lg:gap-10 lg:text-3xl justify-center lg:justify-between lg:col-span-7 items-center"
      :class="{
        '!flex flex-col lg:flex-row absolute lg:static left-0 bg-Noir w-screen lg:w-auto h-screen lg:h-auto z-40':
          activeMenu
      }"
    >
      <RouterLink to="/regles" class="relative">
        <button
          @click="activeMenu = false"
          class="bg-Tonic lg:bg-transparent h-12 lg:h-auto -skew-x-[25deg] lg:skew-x-0 hover:opacity-60 duration-200"
        >
          <p
            class="text-Noir lg:text-Blanc font-fugaz-one uppercase text-xl lg:text-3xl px-6 lg:px-0 skew-x-[25deg] lg:skew-x-0"
          >
            Règles
          </p>
        </button>
      </RouterLink>
      <RouterLink to="/faq">
        <button
          @click="activeMenu = false"
          class="bg-Tonic lg:bg-transparent h-12 lg:h-auto -skew-x-[25deg] lg:skew-x-0 hover:opacity-60 duration-200"
        >
          <p
            class="text-Noir lg:text-Blanc font-fugaz-one uppercase text-xl lg:text-3xl px-6 lg:px-0 skew-x-[25deg] lg:skew-x-0"
          >
            FAQ
          </p>
        </button>
      </RouterLink>
      <RouterLink @click="activeMenu = false" to="/aPropos">
        <button class="bg-Tonic lg:bg-transparent h-12 lg:h-auto -skew-x-[25deg] lg:skew-x-0">
          <p
            class="text-Noir lg:text-Blanc font-fugaz-one uppercase text-xl lg:text-3xl px-6 lg:px-0 skew-x-[25deg] lg:skew-x-0 hover:opacity-60 duration-200"
          >
            à propos
          </p>
        </button>
      </RouterLink>
      <RouterLink @click="activeMenu = false" to="/contact">
        <button class="bg-Tonic lg:bg-transparent h-12 lg:h-auto -skew-x-[25deg] lg:skew-x-0">
          <p
            class="text-Noir lg:text-Blanc font-fugaz-one uppercase text-xl lg:text-3xl px-6 lg:px-0 skew-x-[25deg] lg:skew-x-0 hover:opacity-60 duration-200"
          >
            Contact
          </p>
        </button>
      </RouterLink>
    </nav>
    <nav class="hidden gap-5 lg:flex justify-end lg:col-span-3 items-center">
      <a href="https://www.instagram.com/smash_arena_event/" class="hover:opacity-60 duration-200">
        <LogoInstagram />
      </a>
      <a href="https://twitter.com/SmashArenaEvent" class="hover:opacity-60 duration-200">
        <LogoX />
      </a>
      <a href="https://discord.gg/6zFJf9WXy2" class="hover:opacity-60 duration-200">
        <LogoDiscord />
      </a>
      <a href="#" class="hover:opacity-60 duration-200">
        <LogoYoutube />
      </a>
    </nav>
    <button class="col-span-6 col-start-7 lg:hidden">
      <Menu
        alt="Ouvrir le menu du header"
        class="block lg:hidden ml-auto hover:opacity-60 duration-200"
        @click="activeMenu = !activeMenu"
        :class="{ '!hidden': activeMenu }"
      />
      <Croix
        alt="Fermer le menu du header"
        class="hidden ml-auto z-50 w-[30px] hover:opacity-60 duration-200"
        @click="activeMenu = !activeMenu"
        :class="{ '!block': activeMenu, '!relative': activeMenu }"
      />
    </button>
  </header>
</template>
