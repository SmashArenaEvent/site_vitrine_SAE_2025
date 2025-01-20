<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    
</script>
<template>
    <article class="lg:flex">
        <section>
            <h1 class="font-fugaz-one uppercase text-4xl text-center"><span class="text-Tonic">E</span>rreur <span class="text-Tonic">404</span></h1>
            <p class="text-center">Même Donkey Kong n’a su retrouver la page.<br/>Celle-ci doit être actuellement introuvable.</p>
            <RouterLink to="/" class="hidden lg:block">
                <button class="bg-Tonic h-12 -skew-x-[25deg]">
                    <p class="font-fugaz-one uppercase text-Noir px-6 skew-x-[25deg]">Retourner à l'accueil</p>
                </button>
            </RouterLink>
        </section>
        <img src="/src/components/img/DonkeyKong404.png" alt="Image de donkey kong">
        <RouterLink to="/" class="lock lg:hidden">
            <button class="bg-Tonic h-12 -skew-x-[25deg]">
                <p class="font-fugaz-one uppercase text-Noir px-6 skew-x-[25deg]">Retourner à l'accueil</p>
            </button>
        </RouterLink>
    </article>
</template>