<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import Formulaire from '@/components/Formulaire.vue';
    import CardRegles from '@/components/CardRegles.vue';
</script>
<template>
    <section>
        <h1 class="font-fugaz-one uppercase text-4xl text-center"><span class="text-Tonic">S</span>mash <span class="text-Tonic">a</span>rena <span class="text-Tonic">e</span>vent<br/><span class="text-Tonic">2ème édition</span></h1>
        <p class="text-center">Bienvenue au Smash Arena Event ! Nous sommes une association étudiante organisant des <span>tournois gratuits</span> entre membre du Nord Franche-Comté sur le jeu <span>Super Smash Bros Ultimate</span> et bien plus !</p>
        <a href="#">
            <button class="bg-Tonic">
                <p class="text-Noir font-fugaz-one uppercase text-xs">Je m'inscris</p>
            </button>
        </a>
        <!--Imagesperso aléatoires-->
    </section>
    <section>
        <h2 class="font-fugaz-one uppercase text-3xl">
            <span class="text-Tonic">Smash Arena Event</span> Première édition
        </h2>
        <!--Carousel-->
    </section>
    <section>
        <h2 class="font-fugaz-one uppercase text-3xl">
            <span class="text-Tonic">Les règles</span> principales
        </h2>
        <CardRegles/>
        <RouterLink to="/regles">
            <button class="bg-Blanc">
                <p class="text-Noir font-fugaz-one uppercase text-xs">Découvrir les autres règles</p>
            </button>
        </RouterLink>
    </section>
    <section>
        <h2 class="font-fugaz-one uppercase text-3xl"><span class="text-Tonic">Le coin</span> chill</h2>
        <!--Image-->
        <div class="bg-Gris">
            <p>Le Coin Chill, c’est un espace détente, pour se reposer entre 2 match du tournois et les amis juste venus s’amuser.<br/><br/>De nombreux jeux y sont disponible en libre service :</p>
        </div>
        <div>
            <div>
                <!--image-->
                <p>Mario kart 8</p>
            </div>
            <div>
                <!--image-->
                <p>Yu-Gi-Oh!</p>
            </div>
            <div>
                <!--image-->
                <p>Splatoon</p>
            </div>
        </div>
    </section>
    <section>
        <h2 class="font-fugaz-one uppercase text-3xl"><span class="text-Tonic">Le coin</span> buvette</h2>
        <!--Image-->
        <div class="bg-Gris">
            <p>La Buvette, nécessaire pour se restaurer durant un après-midi à s’amuser ! Mais attention, à consommer dans l’espace buvette, interdiction de manger à l’espace du Tournoi ou au coin Chill.</p>
        </div>
    </section>
    <section>
        <h2 class="font-fugaz-one uppercase text-3xl"><span  class="text-Tonic">Tu veux participer ?</span>Inscris-toi !</h2>
        <!--Section choix participation-->
    </section>
    <section>
        <h2 class="font-fugaz-one uppercase text-3xl"><span class="text-Tonic">Nos</span> Sponsors</h2>
        <div>
            <!--Ajout des sponsors-->
        </div>
    </section>
    <section>
        <h2 class="font-fugaz-one uppercase text-3xl"><span class="text-Tonic">Nous</span> contacter</h2>
        <Formulaire/>
    </section>
</template>