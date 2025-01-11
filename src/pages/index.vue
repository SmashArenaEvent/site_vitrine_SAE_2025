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
        <CardRegles Style="1" Icone="1" Title="Format du tournoi" Text="Le tournoi sera en format double élimination (winner-looser bracket) avec un gagnant et un perdant dans chaque match suite à un duel en 3 manches le premier à 2 victoires gagne." />
        <CardRegles Style="0" Icone="2" Title="Temps de match" Text="Les matchs auront une durée fixe de 7 minutes maximum par manches." />
        <CardRegles Style="1" Icone="3" Title="Comportement" Text="Tout comportement antisportif ou de triche sera sévèrement sanctionné, y compris le non-respect des règles ou le harcèlement envers d'autres joueurs." />
        <CardRegles Style="0" Icone="4" Title="Manettes" Text="Les joueurs peuvent utiliser leur propre manette GameCube ou une manette Pro pour Nintendo Switch. Les manettes filaires sont recommandées pour éviter des problèmes de connectivité. Si un joueur n’a pas sa propre manette, des joicons lui seront fournis." />
        <CardRegles Style="1" Icone="5" Title="Stocks" Text="Les matchs se joueront en mode &#34;Stocks&#34;. Chaque joueur commencera avec 3 vies." />
        <CardRegles Style="0" Icone="6" Title="Retard" Text="Les joueurs doivent être présents et prêts à jouer leur match à l'heure prévue. Un délai de 5 minutes peut être toléré, mais les retards excessifs peuvent entraîner la disqualification." />
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