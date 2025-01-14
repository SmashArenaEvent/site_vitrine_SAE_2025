<template>
    <div>
        <div class="border border-Tonic">
            <!--Icones de personnages-->
            <img v-if="Organisateur == 'VaSa'" src="/src/components/img/IconePersonnage/Pikachu.png"/>
            <img v-if="Organisateur == 'AuRu'" src="/src/components/img/IconePersonnage/Wolf.png"/>
            <img v-if="Organisateur == 'ElPe'" src="/src/components/img/IconePersonnage/Luigi.png"/>
            <img v-if="Organisateur == 'ElFe'" src="/src/components/img/IconePersonnage/Lucario.png"/>
            <img v-if="Organisateur == 'BaRo'" src="/src/components/img/IconePersonnage/BowserJR.png"/>
            <img v-if="Organisateur == 'RoGr'" src="/src/components/img/IconePersonnage/Dadidou.png"/>
            <img v-if="Organisateur == 'LuBa'" src="/src/components/img/IconePersonnage/BanjoKazooie.png"/>
            <img v-if="Organisateur == 'MaPo'" src="/src/components/img/IconePersonnage/DarkSamus.png"/>
            <!--Image du participent-->
            <img v-if="Organisateur == 'VaSa'" src="/src/components/img/photoOrganisateurs/ValentinSaraiva.png"/>
            <img v-if="Organisateur == 'AuRu'" src="/src/components/img/photoOrganisateurs/AurelieRunser.png"/>
            <img v-if="Organisateur == 'ElPe'" src="/src/components/img/photoOrganisateurs/EloraPerrin.png"/>
            <img v-if="Organisateur == 'ElFe'" src="/src/components/img/photoOrganisateurs/EliotFeuvrier.png"/>
            <img v-if="Organisateur == 'BaRo'" src="/src/components/img/photoOrganisateurs/BaptisteRognon.png"/>
            <img v-if="Organisateur == 'RoGr'" src="/src/components/img/photoOrganisateurs/RomainGrosjean.png"/>
            <img v-if="Organisateur == 'LuBa'" src="/src/components/img/photoOrganisateurs/LucasBardey.png"/>
            <img v-if="Organisateur == 'MaPo'" src="/src/components/img/photoOrganisateurs/MarcoPoilbois.png"/>
        </div>
        <p class="font-fugaz-one uppercase text-2xl">{{ Prenom }}</p>
        <p class="font-fugaz-one uppercase text-2xl text-transparent border-Blanc" style="-webkit-text-stroke: 0.75px white">{{ Nom }}</p>
        <p class="font-fugaz-one text-Tonic">{{ Trait }}</p>
        <p class="font-fugaz-one">{{ Role }}</p>
    </div>
</template>
<script setup lang="ts">
    import { defineProps } from 'vue';
    const props = defineProps<{
        /* Les participent seront identifier par les 2 premières lettres de leurs prénom et les 2 première de leurs nom de famille, (exemple : Valentin Saraiva = VaSa) ce choix à été fait pour que le code puisse être réutiliser (au cas ou)*/
        Organisateur: string
        Prenom: string
        Nom: string
        Trait: string
        Role: string
    }>()
</script>