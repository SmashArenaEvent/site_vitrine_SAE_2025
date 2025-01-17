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
    <header class="font-gothic-a1 text-xs">
    <div class="flex w-full justify-between">
        <Logo class="h-10 lg:h-20" alt="Logo Smash Arena Event"/>
        <nav class="flex flex-col">
            <RouterLink to="/aPropos">À propos</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <RouterLink to="/regles">Règles</RouterLink>
            <RouterLink to="/faq">FAQ</RouterLink>
        </nav>
        <nav class="grid grid-cols-2">
            <a href="https://www.instagram.com/smash_arena_event/"><Insta alt="Instagram"/></a>
            <a href="https://twitter.com/SmashArenaEvent"><X alt="X"/></a>
            <a href="https://discord.gg/6zFJf9WXy2"><Discord alt="Discord"/></a>
            <a href="#"><Youtube alt="Youtube"/></a>
        </nav>
    </div>
    <nav class="flex w-full justify-around text-Gris_clair">
        <RouterLink to="/mentionsLegales"><p>Mentions légales</p></RouterLink>
        <RouterLink to="/politiqueDeConfidentialite"><p>Politique de Confidentialité</p></RouterLink>
    </nav>
    <p class="text-center text-Tonic">@Smash Arena Event 2025</p>
    </header>
</template>