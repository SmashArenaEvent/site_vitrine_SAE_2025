<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import CardMembres from '@/components/CardMembres.vue';
import Formulaire from '@/components/Formulaire.vue';

    
</script>
<template>
    <article>
        <h1 class="font-fugaz-one uppercase text-4xl"><span class="text-Tonic">à</span> propos</h1>
        <h2 class="font-fugaz-one uppercase text-3xl"><span class="text-Tonic">Notre</span> histoire</h2>
        <p>Lancé pour la première fois le 10 février 2024,<br/><span class="text-Tonic font-bold">Smash Arena Event</span> est bien plus qu'un simple tournoi :<br/>c’est une initiative ambitieuse portée par des étudiants motivés de l’IUT de Montbéliard.</p>
        <p>Ce rassemblement convivial autour de <span class="text-Tonic font-bold">Smash Bros Ultimate</span> a réuni 30 participants en compétition dans un tournoi double élimination, marqué par la victoire de <span class="text-Tonic font-bold">Mathis Regazzoni.</span></p>
        <p>Au total, ce sont près de 70 visiteurs qui ont répondu présents pour la première édition, curieux de découvrir une expérience mêlant jeu, détente et passion.</p>
        <!--Image-->
        <h3 class="text-Tonic font-bold">Une expérience immersive</h3>
        <p>Pour rythmer la journée, plusieurs espaces avaient été mis en place pendant l’événement :</p>
        <p class="indent-5">Le <span class="text-Tonic">coin chill</span> avec des jeux comme Mario Kart, Yu-Gi-Oh!, Splatoon et des jeux de société (UNO, Gallion...).</p>
        <p class="indent-5">Une <span class="text-Tonic">zone de restauration</span> pour s'accorder un moment de convivialité entre deux matchs. </p>
        <!--Image-->
        <h3 class="text-Tonic font-bold">Un succès prometteur</h3>
        <p>Cette première édition a permis de poser des bases solides, tant en termes d’organisation que de participation. Grâce à l’implication des bénévoles et des organisateurs, Smash Arena Event s’est imposé comme un rendez-vous incontournable pour les passionnés de jeux vidéo.</p>
        <p>Alors ? Est-ce que vous êtes prêt pour la <span class="text-Tonic">Deuxième Édition</span> ?</p>
    </article>
    <article>
        <h2 class="font-fugaz-one uppercase text-3xl"><span class="text-Tonic">Notre</span> équipe</h2>
        <section>
            <h3 class="font-fugaz-one uppercase text-xl"><span class="text-Tonic">Première</span> édition</h3>
            <CardMembres Organisateur="VaSa" Prenom="Valentin" Nom="Saraiva" Trait="L'idéaliste" Role="Président & Développer Web"/>
            <CardMembres Organisateur="AuRu" Prenom="Aurélie" Nom="Runser" Trait="La réaliste" Role="Développeuse Web"/>
            <CardMembres Organisateur="ElPe" Prenom="élora" Nom="Perrin" Trait="L'enthousiaste" Role="Communicante"/>
            <CardMembres Organisateur="ElFe" Prenom="Eliot" Nom="Feuvrier" Trait="Le sportif" Role="Graphiste"/>
            <CardMembres Organisateur="BaRo" Prenom="Baptiste" Nom="Rognon" Trait="Le croyant" Role="Graphiste"/>
        </section>
        <section>
            <h3 class="font-fugaz-one uppercase text-xl"><span class="text-Tonic">Seconde</span> édition</h3>          
            <CardMembres Organisateur="VaSa" Prenom="Valentin" Nom="Saraiva" Trait="L'idéaliste" Role="Président"/>
            <CardMembres Organisateur="RoGr" Prenom="Romain" Nom="Grosjean" Trait="Le perfectionniste" Role="Graphiste"/>
            <CardMembres Organisateur="LuBa" Prenom="Lucas" Nom="Bardey" Trait="Le curieux" Role="Développer Web"/>
            <CardMembres Organisateur="MaPo" Prenom="Marco" Nom="Poilbois" Trait="Le pragmatique" Role="Graphiste"/>
        </section>
    </article>
    <section>
        <h2 class="font-fugaz-one uppercase text-3xl"><span class="text-Tonic">Nous</span> contacter</h2>
        <Formulaire/>
    </section>
</template>