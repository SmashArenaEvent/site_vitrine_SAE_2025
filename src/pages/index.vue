<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div></div>
  <section class="User-View col-span-12 col12 min-h-fit relative">
    <motifs class="hidden lg:flex"/>
    <motifsMobile/>
    <article class="col-span-12 lg:col-span-6 flex flex-col lg:items-start lg:justify-center relative z-10">
      <h1
      class="font-fugaz-one uppercase text-4xl lg:text-6xl text-center lg:text-left lg:leading-[4.5rem] mt-7 lg:mt-0"
      >
        <span class="text-Tonic">S</span>mash <span class="text-Tonic">a</span>rena
        <span class="text-Tonic">e</span>vent<br /><span class="text-Tonic"
        >2<span class="text-xl lg:text-3xl">ème édition</span></span
        >
      </h1>
      <div class="col12">
      <p class="col-start-2 col-span-10 leading-5 lg:leading-auto text-center lg:text-left lg:text-xl mt-7 lg:mt-9">
        Bienvenue au Smash Arena Event ! Nous sommes une association étudiante organisant des
        <span class="font-bold">tournois gratuits</span> entre membre du Nord Franche-Comté sur le
        jeu <span class="font-bold">Super Smash Bros Ultimate</span> et bien plus !
      </p>
      </div>
      <div class="col-span-12 flex justify-center mt-8 lg:mt-9">
        <a href="#Participation" class="lg:ml-[13px] -skew-x-[25deg] bg-Noir">
          <button
          class="bg-Tonic h-12 lg:h-24 hover:opacity-60 duration-200"
          >
            <p
            class="text-Noir font-fugaz-one uppercase text-xs lg:text-3xl px-6 lg:px-12 skew-x-[25deg]"
            >
              Je m'inscris
            </p>
          </button>
        </a>
      </div>
    </article>
    <article
    class="col-span-12 lg:col-start-8 lg:col-span-5 h-min justify-center lg:User-View flex flex-col relative z-0 lg:z-10">
    <ImgPb
    v-if="ImageHero.Image"
    :record="ImageHero"
    :filename="ImageHero.Image"
    :alt="ImageHero.Name"
    class="col-span-12 mt-7 lg:mt-0"
    loading="lazy"
    />
    </article>
  </section>
  <section class="col-span-12 col12 mt-5">
    <motifsMobile class="-mt-4 flex sp:hidden"/>
    <h2
    class="font-fugaz-one uppercase text-3xl lg:text-5xl lg:text-center col-span-12 mb-7 lg:mb-12"
    >
      <span class="text-Tonic">Smash Arena Event</span> La première édition
    </h2>
    <Slider/>
    <div
    class="col-start-3 lg:col-start-6 col-span-10 lg:col-span-5 bg-Gris text-Blanc mt-1 lg:mt-2.5 px-5 py-2.5 lg:py-5 relative z-10"
    >
      <p class="lg:text-xl leading-4 lg:leading-8">
        C'était la Première édition du Smash Arena Event, le 1er tournoi entre membre de l'IUT de
        Franche-Comté ! Et elle avais lieu le <span class="text-Tonic">10 février 2024</span> de
        <span class="text-Tonic">14h à 19h</span> au
        <a
        class="text-Tonic underline underline-offset-2 hover:opacity-60 duration-200"
        href="https://maps.app.goo.gl/7Bsxg2hbjXhf6bUY6"
        >EX-CCDP du campus de Montbéliard.</a
        >
      </p>
    </div>
  </section>
  <section class="col-span-12 col12 mt-12">
    <h2
    class="font-fugaz-one uppercase text-3xl lg:text-5xl lg:text-center col-span-12 lg:mt-16 lg:mb-4"
    >
      <span class="text-Tonic">Foire</span> aux questions
    </h2>
    <CardFAQ
      Style="1"
      Title="Où se déroule l’événement et quels sont les horaires ?"
      Text="L’événement se déroule au bâtiment de l’ex-CDDP de Montbéliard situé au 4 Place Tharradin. Les horaires sont de 13H à 18H."
    />
    <CardFAQ
      Style="0"
      Title="Quel est le format du tournoi ?"
      Text="Le tournoi sera en format double élimination (winner-looser bracket) avec un gagnant et un perdant dans chaque match suite à un duel en 3 manches le premier à 2 victoires gagne."
    />
    <CardFAQ
      Style="1"
      Title="Peut-on amener notre propre nourriture ?"
      Text="Non, il n’est pas possible d’amener votre propre nourriture à l’événement. En revanche, une restauration et une buvette sera mise en place pour vos besoins."
    />
    <CardFAQ
      Style="0"
      Title="Comment puis-je m’inscrire à l’événement en tant que joueur ?"
      Text="Pour vous inscrire en tant que joueur, rendez-vous sur le site du tournoi, cliquez sur la fiche, puis sur le bouton menant au formulaire d’inscription. Vos données seront conservées un an après votre inscription."
      class="!hidden lg:!block"
    />
    <CardFAQ
      Style="1"
      Title="Où puis-je trouver le programme de l’événement ?"
      Text="Vous pourrez retrouver le programme de notre événement sur nos réseaux sociaux : Discord, Instagram, X (Twitter), YouTube et Facebook. N’hésitez pas à nous suivre pour ne rien manquer !"
      class="!hidden lg:!block"
    />
    <CardFAQ
      Style="0"
      Title="Quelles sont les étapes à suivre pour postuler en tant que bénévole ?"
      Text="Pour vous inscrire comme bénévole, rendez-vous sur le site du tournoi, cliquez sur la fiche, puis sur le bouton “Je m’inscris” dans la section “Vous voulez aider ? Devenez bénévole” en bas de page. Indiquez le rôle souhaité en vous référant aux missions décrites. Vos données seront conservées un an après votre inscription."
      class="!hidden lg:!block"
    />
        <RouterLink class="col-span-12 mt-12 lg:mt-24 flex justify-center relative z-10" onclick="window.scrollTo(0, 0);" to="/regles">
      <button class="bg-Blanc h-12 lg:h-24 -skew-x-[25deg] hover:opacity-60 duration-200">
        <p
        class="text-Noir font-fugaz-one uppercase text-xs lg:text-3xl px-6 lg:px-12 skew-x-[25deg]"
        >
          Découvrir la FAQ
        </p>
      </button>
    </RouterLink>
  </section>
  <section class="col-span-12 col12 mt-12 lg:mt-24 relative">
    <motifsMobile />
    <motifs class="-top-[100px] hidden lg:flex"/>
    <h2 class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl text-center lg:mb-12 relative z-10">
      <span class="text-Tonic">Le coin</span> chill
    </h2>
    <img class="col-span-12 lg:col-span-7 mt-7 lg:mt-0 relative z-10" src="/src/components/img/CoinChill.webp" alt="Carte Yu Gi Oh" loading="lazy"/>
    <div
    class="col-span-12 col12 lg:col-span-5 lg:flex lg:flex-col lg:bg-Gris lg:mt-12 lg:py-12 lg:h-fit lg:-ml-24 lg:px-12 relative z-10"
    >
      <div
      class="bg-Gris mt-1 lg:mt-0 px-5 lg:px-0 py-2.5 text-[10px] leading-4 lg:text-xl lg:leading-8 col-start-3 lg:col-start-1 col-span-10 lg:col-span-5 lg:h-min"
      >
        <p>
          Le Coin Chill, c’est un espace détente, pour se reposer entre 2 match du tournois et les
          amis juste venus s’amuser.<br /><br />De nombreux jeux y sont disponible en libre service
          :
        </p>
      </div>
      <div class="col-span-12 lg:col-span-5 col12 lg:flex mt-5 lg:mt-8 lg:w-full lg:gap-20">
        <div class="col-start-3 col-span-2 flex flex-col items-center">
          <img class="lg:w-20" src="/src/components/img/MarioKart.webp" alt="Logo" loading="lazy"/>
          <p class="text-[10px] relative -mx-5 lg:text-xl lg:mt-2.5">Mario kart 8</p>
        </div>
        <div class="col-start-6 col-span-2 flex flex-col items-center">
          <img class="lg:w-20" src="/src/components/img/YoGiOh.webp" alt="Logo" loading="lazy"/>
          <p class="text-[10px] relative -mx-5 lg:text-xl lg:mt-2.5">Yu-Gi-Oh!</p>
        </div>
        <div class="col-start-9 col-span-2 flex flex-col items-center">
          <img class="lg:w-20" src="/src/components/img/Splatoon.webp" alt="Logo" loading="lazy"/>
          <p class="text-[10px] relative -mx-5 lg:text-xl lg:mt-2.5">Splatoon</p>
        </div>
      </div>
    </div>
  </section>
  <section class="col-span-12 col12 mt-12 lg:mt-24 relative">
    <motifs class="-top-[100px] hidden lg:flex"/>
    <h2 class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl text-center lg:mb-12 relative z-10">
      <span class="text-Tonic">Le coin</span> buvette
    </h2>
    <img
    class="col-span-12 lg:col-span-7 lg:col-start-6 mt-7 lg:mt-0 lg:order-2 relative z-10"
    src="/src/components/img/CoinBuvette.webp" alt="crépes" loading="lazy"
    />
    <div
    class="bg-Gris mt-1 px-5 py-2.5 h-fit lg:mt-12 lg:py-12 lg:px-12 lg:-mr-24 lg:relative text-[10px] leading-4 lg:text-xl col-start-3 lg:col-start-1 col-span-10 lg:col-span-5 lg:order-1 lg:leading-8 relative z-20"
    >
      <p>
        La Buvette, nécessaire pour se restaurer durant un après-midi à s’amuser ! Mais attention, à
        consommer dans l’espace buvette, interdiction de manger à l’espace du Tournoi ou au coin
        Chill.
      </p>
    </div>
  </section>
  <section class="col-span-12 col12 mt-12">
    <h2
    class="font-fugaz-one uppercase text-3xl lg:text-5xl lg:text-center col-span-12 lg:mt-16 lg:mb-4"
    >
      <span class="text-Tonic">Les règles</span> principales
    </h2>
    <CardRegles
    Style="1"
    Icone="1"
    Title="Format du tournoi"
    Text="Le tournoi sera en format double élimination (winner-looser bracket) avec un gagnant et un perdant dans chaque match suite à un duel en 3 manches le premier à 2 victoires gagne."
    />
    <CardRegles
    Style="0"
    Icone="2"
    Title="Temps de match"
    Text="Les matchs auront une durée fixe de 7 minutes maximum par manches."
    />
    <CardRegles
    Style="1"
    Icone="3"
    Title="Comportement"
    Text="Tout comportement antisportif ou de triche sera sévèrement sanctionné, y compris le non-respect des règles ou le harcèlement envers d'autres joueurs."
    />
    <CardRegles
    class="hidden lg:col12"
    Style="0"
    Icone="4"
    Title="Manettes"
    Text="Les joueurs peuvent utiliser leur propre manette GameCube ou une manette Pro pour Nintendo Switch. Les manettes filaires sont recommandées pour éviter des problèmes de connectivité. Si un joueur n’a pas sa propre manette, des joicons lui seront fournis."
    />
    <CardRegles
    class="hidden lg:col12"
    Style="1"
    Icone="5"
    Title="Stocks"
    Text="Les matchs se joueront en mode &#34;Stocks&#34;. Chaque joueur commencera avec 3 vies."
    />
    <CardRegles
    class="hidden lg:col12"
    Style="0"
    Icone="6"
    Title="Retard"
    Text="Les joueurs doivent être présents et prêts à jouer leur match à l'heure prévue. Un délai de 5 minutes peut être toléré, mais les retards excessifs peuvent entraîner la disqualification."
    />
    <RouterLink class="col-span-12 mt-12 lg:mt-24 flex justify-center relative z-10" onclick="window.scrollTo(0, 0);" to="/regles">
      <button class="bg-Blanc h-12 lg:h-24 -skew-x-[25deg] hover:opacity-60 duration-200">
        <p
        class="text-Noir font-fugaz-one uppercase text-xs lg:text-3xl px-6 lg:px-12 skew-x-[25deg]"
        >
          Découvrir les autres règles
        </p>
      </button>
    </RouterLink>
  </section>
  <div id="Participation" class="relative -mt-12 lg:-mt-24"></div>
  <section class="col-span-12 col12">
    <h2
    class="col-span-12 mt-12 lg:mt-24 text-center font-fugaz-one uppercase text-3xl lg:text-5xl"
    >
      <span class="text-Tonic">Tu veux participer ? </span>Inscris-toi !
    </h2>
    <nav class="col-span-12 flex flex-col lg:flex-row mt-6 lg:mt-12 relative z-10 -mx-5 lg:-mx-[50px] h-[416px] lg:h-auto">
        <div class="bg-center bg-cover bg-[url('/src/components/img/WallPaperJoueur.webp')] case_1 transition-all duration-1000 relative" loading="lazy">
            <div class="h-full lg:h-[608px] w-full bg-Noir_Vert hover:bg-transparent transition-all duration-1000 px-5 hover:pl-10 lg:px-[50px] hover:lg:pl-[100px] flex flex-col justify-center">
                <h3 class="font-fugaz-one uppercase text-xl lg:text-5xl text-Tonic h-7 lg:h-16">
                    Comme joueur
                </h3>
                <p class="lg:text-xl mt-1">et participe au tournoi !</p>
                <a class="mt-6 lg:mt-20 mr-[13px] bg-Noir w-fit -skew-x-[25deg]" href="https://form.jotform.com/SmashArenaEvent/Inscription-Tournoi" onclick="window.scrollTo(0, 0);">
                    <button class="bg-Tonic h-12 lg:h-20 hover:opacity-60">
                        <p class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]">
                            Je m’inscris
                        </p>
                    </button>
                </a>
            </div>
        </div>
        <div class="bg-center bg-cover bg-[url('/src/components/img/WallPaperBenevole.webp')] case_2 transition-all duration-1000 relative" loading="lazy">
            <div class="h-full lg:h-[608px] w-full bg-Noir_Vert hover:bg-transparent transition-all duration-1000 px-5 hover:pr-10 lg:px-[50px] hover:lg:pr-[100px] flex flex-col justify-center items-end ">
                <h3 class="font-fugaz-one uppercase text-xl lg:text-5xl text-Tonic h-7 lg:h-16">
                    Comme Bénévole
                </h3>
                <p class="lg:text-xl mt-1">et viens nous aider à gérer l’évènement !</p>
                <a class="mt-6 lg:mt-20 mr-[13px] bg-Noir w-fit -skew-x-[25deg]" href="https://form.jotform.com/SmashArenaEvent/Inscription-Benevolat" onclick="window.scrollTo(0, 0);">
                    <button class="bg-Tonic h-12 lg:h-20 hover:opacity-60">
                        <p class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]">
                            Je m’inscris
                        </p>
                    </button>
                </a>
            </div>
        </div>
    </nav>
  </section>
  <!-- <section class="col-span-12 col12">
    <h2
    class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl mt-12 lg:mt-24 text-center"
    >
    <span class="text-Tonic">Nos</span> Sponsors
  </h2>
  <div
  class="col-span-12 min-h-10 border-t border-b border-Tonic mt-6 lg:mt-12 -mx-5 lg:-mx-[48px]"
  >
  Ajout des sponsors
</div>
</section> -->
<section class="col-span-12 col12 relative">
    <motifs class="top-32 hidden lg:flex"/>
    <motifsMobile class="top-10"/>
    <h2
    class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl text-center mt-12 lg:mt-24 lg:mb-24 relative z-10">
      <span class="text-Tonic">Nous</span> contacter
    </h2>
    <Formulaire />
  </section>
</template>
<style>
    .case_1 {
        flex: 5;
    }
    .case_1:hover {
        flex: 7;
    }
    .case_2 {
        flex: 5;
    }
    .case_2:hover {
        flex: 7;
    }
</style>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import Formulaire from '@/components/Formulaire.vue'
import CardFAQ from '@/components/CardFAQ.vue'
import CardRegles from '@/components/CardRegles.vue'
import Slider from '@/components/Slider.vue'
import ImgPb from '@/components/ImgPb.vue'
import { randomImage } from '@/backend' 
const ImageHero = await randomImage()
import motifs from '@/components/icons/motifs.vue'
import motifsMobile from '@/components/icons/motifsMobile.vue'
</script>
