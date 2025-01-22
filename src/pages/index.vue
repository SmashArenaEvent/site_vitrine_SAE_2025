<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import Formulaire from '@/components/Formulaire.vue';
    import CardRegles from '@/components/CardRegles.vue';
</script>
<template>
    <section class="User-View grille">
        <h1 class="col-span-12 font-fugaz-one uppercase text-4xl lg:text-6xl text-center lg:text-left mt-5"><span class="text-Tonic">S</span>mash <span class="text-Tonic">a</span>rena <span class="text-Tonic">e</span>vent<br/><span class="text-Tonic">2<span class="text-xl lg:text-3xl">ème édition</span></span></h1>
        <p class="col-start-3 col-span-8 text-center lg:text-left lg:text-xl mt-7">Bienvenue au Smash Arena Event ! Nous sommes une association étudiante organisant des <span>tournois gratuits</span> entre membre du Nord Franche-Comté sur le jeu <span>Super Smash Bros Ultimate</span> et bien plus !</p>
        <div class="col-span-12 flex justify-center mt-5">
            <a href="#">
                <button class="bg-Tonic h-12 lg:h-24 -skew-x-[25deg]">
                    <p class="text-Noir font-fugaz-one uppercase text-xs lg:text-3xl px-6 lg:px-12 skew-x-[25deg]">Je m'inscris</p>
                </button>
            </a>
        </div>
        <img class="col-span-12 mt-7" src="../components/img/ImagesDecorativePersonnage/KirbyXDadidou.png">
        <!--Imagesperso aléatoires-->
    </section>
    <section class="grille mt-5">
        <h2 class="font-fugaz-one uppercase text-3xl lg:text-5xl lg:text-center col-span-12">
            <span class="text-Tonic">Smash Arena Event</span> Première édition
        </h2>
        <!--Carousel-->
    </section>
    <section class="col-span-12 grille mt-12">
        <h2 class="font-fugaz-one uppercase text-3xl lg:text-5xl lg:text-center col-span-12">
            <span class="text-Tonic">Les règles</span> principales
        </h2>
        <CardRegles Style="1" Icone="1" Title="Format du tournoi" Text="Le tournoi sera en format double élimination (winner-looser bracket) avec un gagnant et un perdant dans chaque match suite à un duel en 3 manches le premier à 2 victoires gagne." />
        <CardRegles Style="0" Icone="2" Title="Temps de match" Text="Les matchs auront une durée fixe de 7 minutes maximum par manches." />
        <CardRegles Style="1" Icone="3" Title="Comportement" Text="Tout comportement antisportif ou de triche sera sévèrement sanctionné, y compris le non-respect des règles ou le harcèlement envers d'autres joueurs." />
        <CardRegles class="hidden lg:block" Style="0" Icone="4" Title="Manettes" Text="Les joueurs peuvent utiliser leur propre manette GameCube ou une manette Pro pour Nintendo Switch. Les manettes filaires sont recommandées pour éviter des problèmes de connectivité. Si un joueur n’a pas sa propre manette, des joicons lui seront fournis." />
        <CardRegles class="hidden lg:block" Style="1" Icone="5" Title="Stocks" Text="Les matchs se joueront en mode &#34;Stocks&#34;. Chaque joueur commencera avec 3 vies." />
        <CardRegles class="hidden lg:block" Style="0" Icone="6" Title="Retard" Text="Les joueurs doivent être présents et prêts à jouer leur match à l'heure prévue. Un délai de 5 minutes peut être toléré, mais les retards excessifs peuvent entraîner la disqualification." />
        <RouterLink class="col-span-12 mt-12 flex justify-center" to="/regles">
            <button class="bg-Blanc h-12 lg:h-24 -skew-x-[25deg]">
                <p class="text-Noir font-fugaz-one uppercase text-xs lg:text-3xl px-6 lg:px-12 skew-x-[25deg]">Découvrir les autres règles</p>
            </button>
        </RouterLink>
    </section>
    <section class="grille mt-12">
        <h2 class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl"><span class="text-Tonic">Le coin</span> chill</h2>
        <img class="col-span-12 mt-5" src="/src/components/img/CoinChill.png">
        <div class="bg-Gris mt-1 px-5 py-2.5 lg:text-xl col-start-3 col-span-10">
            <p>Le Coin Chill, c’est un espace détente, pour se reposer entre 2 match du tournois et les amis juste venus s’amuser.<br/><br/>De nombreux jeux y sont disponible en libre service :</p>
        </div>
        <div class="col-span-12 col12 mt-5">
            <div class="col-start-3 col-span-2 flex flex-col items-center">
                <img src="/src/components/img/MarioKart.png">
                <p class="text-[10px] relative -mx-5 lg:text-xl">Mario kart 8</p>
            </div>
            <div class="col-start-6 col-span-2 flex flex-col items-center">
                <img src="/src/components/img/YoGiOh.png">
                <p class="text-[10px] relative -mx-5 lg:text-xl">Yu-Gi-Oh!</p>
            </div>
            <div class="col-start-9 col-span-2 flex flex-col items-center">
                <img src="/src/components/img/Splatoon.png">
                <p class="text-[10px] relative -mx-5 lg:text-xl">Splatoon</p>
            </div>
        </div>
    </section>
    <section>
        <h2 class="font-fugaz-one uppercase mt-12 text-3xl lg:text-5xl"><span class="text-Tonic">Le coin</span> buvette</h2>
        <img src="/src/components/img/CoinBuvette.png">
        <div class="bg-Gris lg:text-xl">
            <p>La Buvette, nécessaire pour se restaurer durant un après-midi à s’amuser ! Mais attention, à consommer dans l’espace buvette, interdiction de manger à l’espace du Tournoi ou au coin Chill.</p>
        </div>
    </section>
    <section>
        <h2 class="font-fugaz-one uppercase text-3xl lg:text-5xl"><span  class="text-Tonic">Tu veux participer ?</span>Inscris-toi !</h2>
        <nav>
            <div class="bg-center bg-cover bg-[url('/src/components/img/WallPaperJoueur.png')]">
                <div class="h-40 w-60 bg-Noir_Vert hover:bg-transparent">
                    <h3 class="font-fugaz-one uppercase text-xl lg:text-5xl text-Tonic">Comme joueur</h3>
                    <p class="lg:text-xl">et participe au tournoi !</p>
                    <RouterLink to="#"><button class="bg-Tonic h-12 lg:h-20 -skew-x-[25deg]"><p class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]">Je m’inscris</p></button></RouterLink>
                </div>
            </div>
            <div class="bg-center bg-cover bg-[url('/src/components/img/WallPaperBenevole.png')]">
                <div class="h-40 w-60 bg-Noir_Vert hover:bg-transparent">
                    <h3 class="font-fugaz-one uppercase text-xl lg:text-5xl text-Tonic">Comme Bénévole</h3>
                    <p class="lg:text-xl">et viens nous aider à gérer l’évènement !</p>
                    <RouterLink to="#"><button class="bg-Tonic h-12 lg:h-20 -skew-x-[25deg]"><p class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]">Je m’inscris</p></button></RouterLink>
                </div>
            </div>
        </nav>
    </section>
    <section>
        <h2 class="font-fugaz-one uppercase text-3xl lg:text-5xl"><span class="text-Tonic">Nos</span> Sponsors</h2>
        <div class="min-h-10 border-t border-b border-Tonic">
            <!--Ajout des sponsors-->
        </div>
    </section>
    <section>
        <h2 class="font-fugaz-one uppercase text-3xl lg:text-5xl"><span class="text-Tonic">Nous</span> contacter</h2>
        <Formulaire/>
    </section>
</template>