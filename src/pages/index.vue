<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import Formulaire from '@/components/Formulaire.vue';
</script>
<template>
    <section>
        <h1><span class="text-Tonic">S</span>mash <span class="text-Tonic">a</span>rena <span class="text-Tonic">e</span>vent <span  class="text-Tonic">2ème édition</span></h1>
        <p>Bienvenue au Smash Arena Event ! Nous sommes une association étudiante organisant des <span>tournois gratuits</span> entre membre du Nord Franche-Comté sur le jeu <span>Super Smash Bros Ultimate</span> et bien plus !</p>
        <a href="#">
            <button>
                <p>Je m'inscris</p>
            </button>
        </a>
        <!--Imagesperso aléatoires-->
    </section>
    <section>
        <h2>
            <span class="text-Tonic">Smash Arena Event</span> Première édition
        </h2>
        <!--Carousel-->
    </section>
    <section>
        <h2>
            <span class="text-Tonic">Les règles</span> principales
        </h2>
        <!--Cards-->
        <RouterLink to="/regles">
            <button>
                <p>Découvrir les autres règles</p>
            </button>
        </RouterLink>
    </section>
    <section>
        <h2><span class="text-Tonic">Le coin</span> chill</h2>
        <!--Image-->
        <div>
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
        <h2><span class="text-Tonic">Le coin</span> buvette</h2>
        <!--Image-->
        <div>
            <p>La Buvette, nécessaire pour se restaurer durant un après-midi à s’amuser ! Mais attention, à consommer dans l’espace buvette, interdiction de manger à l’espace du Tournoi ou au coin Chill.</p>
        </div>
    </section>
    <section>
        <h2><span  class="text-Tonic">Tu veux participer ?</span>Inscris-toi !</h2>
        <!--Section choix participation-->
    </section>
    <section>
        <h2><span class="text-Tonic">Nos</span> Sponsors</h2>
        <div>
            <!--Ajout des sponsors-->
        </div>
    </section>
    <section>
        <h2><span class="text-Tonic">Nous</span> contacter</h2>
        <Formulaire/>
    </section>
</template>