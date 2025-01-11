<template>
    <div class="rounded-2xl text-Blanc" :class="{'border border-Tonic_Sombre':Style == '0', 'bg-Tonic_Sombre':Style == '1'}">
        <div class="flex">
            <iconEpee v-if="Icone == '1'"/>
            <iconEtoile v-if="Icone == '2'"/>
            <iconFleche v-if="Icone == '3'"/>
            <iconPoing v-if="Icone == '4'"/>
            <iconPacman v-if="Icone == '5'"/>
            <iconFeuille v-if="Icone == '6'"/>
            <iconOeuf v-if="Icone == '7'"/>
            <iconBall v-if="Icone == '8'"/>
            <h3>{{ Title }}</h3>
        </div>
        <p>{{ Text }}</p>
    </div>
</template>
<script setup lang="ts">
    import iconEpee from './icons/iconEpee.vue';
    import iconEtoile from './icons/iconEtoile.vue';
    import iconFleche from './icons/iconFleche.vue';
    import iconPoing from './icons/iconPoing.vue';
    import iconPacman from './icons/iconPacman.vue';
    import iconFeuille from './icons/iconFeuille.vue';
    import iconOeuf from './icons/iconOeuf .vue';
    import iconBall from './icons/iconBall.vue';

    import { defineProps } from 'vue';
    const props = defineProps<{
        Icone: string
        Title: string
        Text: string
        Style: string
    }>()
</script>