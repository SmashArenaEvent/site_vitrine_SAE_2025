<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import Logo from './icons/Logo.vue';
    import Menu from './icons/Menu.vue';
    import Croix from './icons/Croix.vue';
    
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const activeMenu = ref(false)
</script>
<template>
    <header class="flex w-full justify-between">
        <RouterLink to="/">
            <Logo/>
        </RouterLink>
        <nav class="hidden lg:flex gap-5" :class="{'!flex':activeMenu}">
            <RouterLink to="/regles">
                <button>
                    <p>Règles</p>
                </button>
            </RouterLink>
            <RouterLink to="/faq">
                <button>
                    <p>FAQ</p>
                </button>
            </RouterLink>
            <RouterLink to="/aPropos">
                <button>
                    <p>à propos</p>
                </button>
            </RouterLink>
            <RouterLink to="/contact">
                <button>
                    <p>Contact</p>
                </button>
            </RouterLink>
        </nav>
        <Menu class="block lg:hidden" @click="activeMenu =! activeMenu" :class="{'!hidden':activeMenu}"/>
        <Croix class="hidden" @click="activeMenu =! activeMenu" :class="{'!block':activeMenu, '!lg:hidden':activeMenu}"/>
    </header>
</template>