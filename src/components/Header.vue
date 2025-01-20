<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import Logo from './icons/Logo.vue';
    import Menu from './icons/Menu.vue';
    import Croix from './icons/Croix.vue';
    import LogoInstagram from './icons/LogoInstagram.vue';
    import LogoX from './icons/LogoX.vue';
    import LogoDiscord from './icons/LogoDiscord.vue';
    import LogoYoutube from './icons/LogoYoutube.vue';
    
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const activeMenu = ref(false)
</script>
<template>
    <header class="flex w-full justify-between font-fugaz-one text-xs">
        <RouterLink to="/">
            <Logo class="h-10 lg:h-20" alt="Logo Smash Arena Event"/>
        </RouterLink>
        <nav class="hidden lg:flex gap-5 lg:text-2xl" :class="{'!flex':activeMenu}">
            <RouterLink to="/regles">
                <button>
                    <p class="uppercase">Règles</p>
                </button>
            </RouterLink>
            <RouterLink to="/faq">
                <button>
                    <p class="uppercase">FAQ</p>
                </button>
            </RouterLink>
            <RouterLink to="/aPropos">
                <button>
                    <p class="uppercase">à propos</p>
                </button>
            </RouterLink>
            <RouterLink to="/contact">
                <button>
                    <p class="uppercase">Contact</p>
                </button>
            </RouterLink>
        </nav>
        <nav class="hidden gap-5 lg:flex">
            <a href="https://www.instagram.com/smash_arena_event/">
                <LogoInstagram/>
            </a>
            <a href="https://twitter.com/SmashArenaEvent">
                <LogoX/>
            </a>
            <a href="https://discord.gg/6zFJf9WXy2">
                <LogoDiscord/>
            </a>
            <a href="#">
                <LogoYoutube/>
            </a>
        </nav>
        <Menu alt="Ouvrir le menu du header" class="block lg:hidden" @click="activeMenu =! activeMenu" :class="{'!hidden':activeMenu}"/>
        <Croix alt="Fermer le menu du header" class="hidden" @click="activeMenu =! activeMenu" :class="{'!block':activeMenu, '!lg:hidden':activeMenu}"/>
    </header>
</template>