<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    
</script>
<template>
    <h1 class="font-fugaz-one uppercase text-4xl text-center"><span class="text-Tonic">E</span>rreur <span class="text-Tonic">404</span></h1>
    <p class="text-center">Même Donkey Kong n’a su retrouver la page.<br/>Celle-ci doit être actuellement introuvable.</p>
    <img src="/src/components/img/DonkeyKong404.png" alt="Image de donkey kong">
    <RouterLink to="/">
        <button class="bg-Tonic">
            <p class="font-fugaz-one uppercase text-Noir">Retourner à l'accueil</p>
        </button>
    </RouterLink>
</template>