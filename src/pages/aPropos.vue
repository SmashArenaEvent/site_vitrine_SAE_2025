<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import CardMembres from '@/components/CardMembres.vue'
import Formulaire from '@/components/Formulaire.vue'
</script>
<template>
  <article class="col-span-12 lg:col12">
    <h1 class="lg:col-span-12 font-fugaz-one uppercase text-4xl lg:text-6xl mt-8 lg:pb-12">
      <span class="text-Tonic">à</span> propos
    </h1>
    <section class="lg:col-span-12 lg:col12 lg:items-center lg:mb-24">
      <section class="lg:col-span-6">
        <h2 class="font-fugaz-one uppercase text-3xl lg:text-5xl mb-6 lg:mb-12 mt-12 lg:mt-0">
          <span class="text-Tonic">Notre</span> histoire
        </h2>
        <p class="lg:text-xl mb-4 lg:mb-8">
          Lancé pour la première fois le 10 février 2024,<br /><span class="text-Tonic font-bold"
            >Smash Arena Event</span
          >
          est bien plus qu'un simple tournoi :<br />c’est une initiative ambitieuse portée par des
          étudiants motivés de l’IUT de Montbéliard.
        </p>
        <p class="lg:text-xl mb-4 lg:mb-8">
          Ce rassemblement convivial autour de
          <span class="text-Tonic font-bold">Smash Bros Ultimate</span> a réuni 30 participants en
          compétition dans un tournoi double élimination, marqué par la victoire de
          <span class="text-Tonic font-bold">Mathis Regazzoni.</span>
        </p>
        <p class="lg:text-xl mb-10">
          Au total, ce sont près de 70 visiteurs qui ont répondu présents pour la première édition,
          curieux de découvrir une expérience mêlant jeu, détente et passion.
        </p>
      </section>
      <img
        class="mb-10 lg:mb-0 lg:col-start-8 col-span-4"
        src="/public/img/TeamPremiereEdition.png"
      />
    </section>
    <section class="lg:col-span-12 lg:col12 lg:items-center lg:mb-24">
      <section class="lg:col-start-7 lg:col-span-6 lg:order-1">
        <h3 class="text-Tonic font-bold lg:text-xl mb-4 lg:mb-8">Une expérience immersive</h3>
        <p class="lg:text-xl mb-4 lg:mb-8">
          Pour rythmer la journée, plusieurs espaces avaient été mis en place pendant l’événement :
        </p>
        <p class="indent-5 lg:text-xl mb-4 lg:mb-8">
          Le <span class="text-Tonic">coin chill</span> avec des jeux comme Mario Kart, Yu-Gi-Oh!,
          Splatoon et des jeux de société (UNO, Gallion...).
        </p>
        <p class="indent-5 lg:text-xl mb-10">
          Une <span class="text-Tonic">zone de restauration</span> pour s'accorder un moment de
          convivialité entre deux matchs.
        </p>
      </section>
      <img
        class="mb-10 lg:mb-0 lg:col-start-2 lg:col-span-4 lg:order-0"
        src="/public/img/CardParty.png"
      />
    </section>
    <section class="lg:col-start-4 lg:col-span-6 lg:order-2">
      <h3 class="text-Tonic font-bold lg:text-xl mb-4 lg:mb-8">Un succès prometteur</h3>
      <p class="lg:text-xl mb-4 lg:mb-8">
        Cette première édition a permis de poser des bases solides, tant en termes d’organisation
        que de participation. Grâce à l’implication des bénévoles et des organisateurs, Smash Arena
        Event s’est imposé comme un rendez-vous incontournable pour les passionnés de jeux vidéo.
      </p>
      <p class="lg:text-xl">
        Alors ? Est-ce que vous êtes prêt pour la <span class="text-Tonic">Deuxième Édition</span> ?
      </p>
    </section>
  </article>
  <article class="col-span-12">
    <h2 class="font-fugaz-one uppercase text-3xl lg:text-5xl mt-12 mb-6 lg:mt-24 lg:mb-12">
      <span class="text-Tonic">Notre</span> équipe
    </h2>
    <section class="col12">
      <h3
        class="col-span-12 font-fugaz-one uppercase text-xl lg:text-4xl text-center mt-6 lg:mt-0 mb-6 lg:mb-12"
      >
        <span class="text-Tonic">Première</span> édition
      </h3>
      <CardMembres
        Organisateur="VaSa"
        Prenom="Valentin"
        Nom="Saraiva"
        Trait="L'idéaliste"
        Role="Président & Développer Web"
        csm="2"
        csd="3"
      />
      <CardMembres
        Organisateur="AuRu"
        Prenom="Aurélie"
        Nom="Runser"
        Trait="La réaliste"
        Role="Développeuse Web"
        csm="8"
        csd="6"
      />
      <CardMembres
        Organisateur="ElPe"
        Prenom="élora"
        Nom="Perrin"
        Trait="L'enthousiaste"
        Role="Communicante"
        csm="2"
        csd="9"
      />
      <CardMembres
        Organisateur="ElFe"
        Prenom="Eliot"
        Nom="Feuvrier"
        Trait="Le sportif"
        Role="Graphiste"
        csm="8"
        csd="4"
      />
      <CardMembres
        Organisateur="BaRo"
        Prenom="Baptiste"
        Nom="Rognon"
        Trait="Le croyant"
        Role="Graphiste"
        csm="5"
        csd="8"
      />
    </section>
    <section class="col12">
      <h3
        class="col-span-12 font-fugaz-one uppercase text-xl lg:text-4xl text-center mt-12 lg:mt-0 mb-6 lg:mb-12"
      >
        <span class="text-Tonic">Seconde</span> édition
      </h3>
      <CardMembres
        Organisateur="VaSa"
        Prenom="Valentin"
        Nom="Saraiva"
        Trait="L'idéaliste"
        Role="Président"
        csm="2"
        csd="4"
      />
      <CardMembres
        Organisateur="RoGr"
        Prenom="Romain"
        Nom="Grosjean"
        Trait="Le perfectionniste"
        Role="Graphiste"
        csm="8"
        csd="8"
      />
      <CardMembres
        Organisateur="LuBa"
        Prenom="Lucas"
        Nom="Bardey"
        Trait="Le curieux"
        Role="Développer Web"
        csm="2"
        csd="4"
      />
      <CardMembres
        Organisateur="MaPo"
        Prenom="Marco"
        Nom="Poilbois"
        Trait="Le pragmatique"
        Role="Graphiste"
        csm="8"
        csd="8"
      />
    </section>
  </article>
  <section class="col-span-12">
    <h2 class="font-fugaz-one text-center uppercase text-3xl lg:text-5xl">
      <span class="text-Tonic">Nous</span> contacter
    </h2>
    <Formulaire />
  </section>
</template>
