<template>
    <div>
        <div class="border border-Tonic">
            <!--Icones de personnages-->
            <img v-if="Organisateur == 'VaSa'" src="/src/components/img/IconePersonnage/Pikachu.png" alt="Icone pikachu"/>
            <img v-if="Organisateur == 'AuRu'" src="/src/components/img/IconePersonnage/Wolf.png" alt="Icone Wolf"/>
            <img v-if="Organisateur == 'ElPe'" src="/src/components/img/IconePersonnage/Luigi.png" alt="Icone Luigi"/>
            <img v-if="Organisateur == 'ElFe'" src="/src/components/img/IconePersonnage/Lucario.png" alt="Icone Lucario"/>
            <img v-if="Organisateur == 'BaRo'" src="/src/components/img/IconePersonnage/BowserJR.png" alt="Icone Bowser JR"/>
            <img v-if="Organisateur == 'RoGr'" src="/src/components/img/IconePersonnage/Dadidou.png" alt="Icone Dadidou"/>
            <img v-if="Organisateur == 'LuBa'" src="/src/components/img/IconePersonnage/BanjoKazooie.png" alt="Icone Banjo Kazooie"/>
            <img v-if="Organisateur == 'MaPo'" src="/src/components/img/IconePersonnage/DarkSamus.png" alt="Icone Dark Samus"/>
            <!--Image du participent-->
            <img v-if="Organisateur == 'VaSa'" src="/src/components/img/photoOrganisateurs/ValentinSaraiva.png" alt="Portrait Valentin Saraiva"/>
            <img v-if="Organisateur == 'AuRu'" src="/src/components/img/photoOrganisateurs/AurelieRunser.png" alt="Portrait Aurelie Runser"/>
            <img v-if="Organisateur == 'ElPe'" src="/src/components/img/photoOrganisateurs/EloraPerrin.png" alt="Portrait Elora Perrin"/>
            <img v-if="Organisateur == 'ElFe'" src="/src/components/img/photoOrganisateurs/EliotFeuvrier.png" alt="Portrait Eliot Feuvrier"/>
            <img v-if="Organisateur == 'BaRo'" src="/src/components/img/photoOrganisateurs/BaptisteRognon.png" alt="Portrait Baptiste Rognon"/>
            <img v-if="Organisateur == 'RoGr'" src="/src/components/img/photoOrganisateurs/RomainGrosjean.png" alt="Portrait Romain Gorsjean"/>
            <img v-if="Organisateur == 'LuBa'" src="/src/components/img/photoOrganisateurs/LucasBardey.png" alt="Portrait Lucas Bardey"/>
            <img v-if="Organisateur == 'MaPo'" src="/src/components/img/photoOrganisateurs/MarcoPoilbois.png" alt="Portrait Marco Poilbois"/>
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