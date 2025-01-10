<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import Logo from './icons/Logo.vue';
    import Menu from './icons/Menu.vue';
    import Croix from './icons/Croix.vue';
    
    import { RouterLink } from 'vue-router';
    import { useRoute } from 'vue-router';
    const route = useRoute();
</script>
<template>
    <header class="flex">
        <Logo/>
        <nav>
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
        <Menu/>
        <Croix/>
    </header>
</template>