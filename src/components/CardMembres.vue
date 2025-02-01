<template>
  <div
    class="col-span-4 lg:col-span-2 mb-7 lg:mb-24"
    :class="{
      'col-start-2': csm == '2',
      'col-start-5': csm == '5',
      'col-start-8': csm == '8',
      'lg:col-start-3': csd == '3',
      'lg:col-start-4': csd == '4',
      'lg:col-start-6': csd == '6',
      'lg:col-start-8': csd == '8',
      'lg:col-start-9': csd == '9'
    }"
  >
    <div class="border-4 border-Tonic p-2 lg:p-3">
      <!--Icones de personnages-->
      <img
        v-if="Organisateur == 'VaSa'"
        src="/src/components/img/IconePersonnage/Pikachu.webp"
        alt="Icone pikachu"
        class="absolute w-10 -ml-6 -mt-6 lg:w-16 lg:-ml-9 lg:-mt-9"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'AuRu'"
        src="/src/components/img/IconePersonnage/Wolf.webp"
        alt="Icone Wolf"
        class="absolute w-10 -ml-6 -mt-6 lg:w-16 lg:-ml-9 lg:-mt-9"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'ElPe'"
        src="/src/components/img/IconePersonnage/Luigi.webp"
        alt="Icone Luigi"
        class="absolute w-10 -ml-6 -mt-6 lg:w-16 lg:-ml-9 lg:-mt-9"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'ElFe'"
        src="/src/components/img/IconePersonnage/Lucario.webp"
        alt="Icone Lucario"
        class="absolute w-10 -ml-6 -mt-6 lg:w-16 lg:-ml-9 lg:-mt-9"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'BaRo'"
        src="/src/components/img/IconePersonnage/BowserJR.webp"
        alt="Icone Bowser JR"
        class="absolute w-10 -ml-6 -mt-6 lg:w-16 lg:-ml-9 lg:-mt-9"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'RoGr'"
        src="/src/components/img/IconePersonnage/Dadidou.webp"
        alt="Icone Dadidou"
        class="absolute w-10 -ml-6 -mt-6 lg:w-16 lg:-ml-9 lg:-mt-9"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'LuBa'"
        src="/src/components/img/IconePersonnage/BanjoKazooie.webp"
        alt="Icone Banjo Kazooie"
        class="absolute w-10 -ml-6 -mt-6 lg:w-16 lg:-ml-9 lg:-mt-9"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'MaPo'"
        src="/src/components/img/IconePersonnage/DarkSamus.webp"
        alt="Icone Dark Samus"
        class="absolute w-10 -ml-6 -mt-6 lg:w-16 lg:-ml-9 lg:-mt-9"
        loading="lazy"
      />
      <!--Image du participent-->
      <img
        v-if="Organisateur == 'VaSa'"
        src="/src/components/img/photoOrganisateurs/ValentinSaraiva.webp"
        alt="Portrait Valentin Saraiva"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'AuRu'"
        src="/src/components/img/photoOrganisateurs/AurelieRunser.webp"
        alt="Portrait Aurelie Runser"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'ElPe'"
        src="/src/components/img/photoOrganisateurs/EloraPerrin.webp"
        alt="Portrait Elora Perrin"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'ElFe'"
        src="/src/components/img/photoOrganisateurs/EliotFeuvrier.webp"
        alt="Portrait Eliot Feuvrier"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'BaRo'"
        src="/src/components/img/photoOrganisateurs/BaptisteRognon.webp"
        alt="Portrait Baptiste Rognon"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'RoGr'"
        src="/src/components/img/photoOrganisateurs/RomainGrosjean.webp"
        alt="Portrait Romain Gorsjean"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'LuBa'"
        src="/src/components/img/photoOrganisateurs/LucasBardey.webp"
        alt="Portrait Lucas Bardey"
        loading="lazy"
      />
      <img
        v-if="Organisateur == 'MaPo'"
        src="/src/components/img/photoOrganisateurs/MarcoPoilbois.webp"
        alt="Portrait Marco Poilbois"
        loading="lazy"
      />
    </div>
    <p class="font-fugaz-one uppercase text-center text-lg leading-5 lg:text-3xl mt-2 lg:mt-5">
      {{ Prenom }}
    </p>
    <p
      class="font-fugaz-one uppercase text-center text-lg leading-5 lg:text-3xl text-transparent border-Blanc text-border"
    >
      {{ Nom }}
    </p>
    <p class="font-fugaz-one text-Tonic text-center text-[11px] lg:text-lg mt-1 lg:mt-4">
      {{ Trait }}
    </p>
    <p class="font-fugaz-one text-center text-[11px] lg:text-lg mt-1 lg:mt-0">{{ Role }}</p>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
  /* Les participent seront identifier par les 2 premières lettres de leurs prénom et les 2 première de leurs nom de famille, (exemple : Valentin Saraiva = VaSa) ce choix à été fait pour que le code puisse être réutiliser (au cas ou)*/
  Organisateur: string
  Prenom: string
  Nom: string
  Trait: string
  Role: string
  //col-start mobile
  csm: string
  //col-start desktop
  csd: string
}>()
</script>
