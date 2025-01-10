<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Logo from './icons/Logo.vue';
import Insta from './icons/BoutonInsta.vue';
import X from './icons/BoutonX.vue';
import Discord from './icons/BoutonDiscord.vue';
import Youtube from './icons/BoutonYoutube.vue';

import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
<template>
    <header>
    <div class="flex  w-full justify-between">
        <Logo/>
        <nav class="flex flex-col">
            <RouterLink to="/">à propos</RouterLink>
            <RouterLink to="/">Contact</RouterLink>
            <RouterLink to="/">Règles</RouterLink>
            <RouterLink to="/">FAQ</RouterLink>
        </nav>
        <nav class="grid grid-cols-2">
            <Insta/>
            <X/>
            <Discord/>
            <Youtube/>
        </nav>
    </div>
    <nav class="flex  w-full justify-around">
        <RouterLink to="/"><p>Mentions légales</p></RouterLink>
        <RouterLink to="/"><p>Politique de Confidentialité</p></RouterLink>
    </nav>
    <p class="text-center">@Smash Arena Event 2025</p>
    </header>
</template>