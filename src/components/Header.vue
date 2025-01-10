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
    <header class="flex w-screen justify-between">
        <Logo/>
        <nav class="hidden" :class="{'!block':activeMenu}">
            <button>
                <p>Règles</p>
            </button>
            <button>
                <p>FAQ</p>
            </button>
            <button>
                <p>à propos</p>
            </button>
            <button>
                <p>Contact</p>
            </button>
        </nav>
        <Menu class="block" @click="activeMenu =! activeMenu" :class="{'!hidden':activeMenu}"/>
        <Croix class="hidden" @click="activeMenu =! activeMenu" :class="{'!block':activeMenu}"/>
    </header>
</template>