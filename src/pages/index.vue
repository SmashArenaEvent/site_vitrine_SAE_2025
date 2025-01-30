<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import Formulaire from '@/components/Formulaire.vue'
import CardRegles from '@/components/CardRegles.vue'
import Slider from '@/components/Slider.vue'

const props = defineProps({
  elements: Array
})

const imageHeroAffiche = ref('')

const imageHero = [
  '@/components/img/ImageHero/cloud.png',
  '@/components/img/ImageHero/duo.png',
  '@/components/img/ImageHero/falco.png',
  '@/components/img/ImageHero/felineferno.png',
  '@/components/img/ImageHero/ike.png',
  '@/components/img/ImageHero/kirby.png',
  '@/components/img/ImageHero/kong.png',
  '@/components/img/ImageHero/link.png',
  '@/components/img/ImageHero/lucas.png',
  '@/components/img/ImageHero/marie.png',
  '@/components/img/ImageHero/mario.png',
  '@/components/img/ImageHero/mewtwo.png',
  '@/components/img/ImageHero/peach.png',
  '@/components/img/ImageHero/pikachu.png',
  '@/components/img/ImageHero/pit.png',
  '@/components/img/ImageHero/pyra.png',
  '@/components/img/ImageHero/ridley.png',
  '@/components/img/ImageHero/rob.png',
  '@/components/img/ImageHero/wario.png',
  '@/components/img/ImageHero/zelda.png'
]
const HeroImgAleatoire = () => {
  let randomNum = Math.floor(Math.random() * imageHero.length)
  imageHeroAffiche.value = imageHero[randomNum]
}

onMounted(() => {
  // Site Vitrine
  HeroImgAleatoire()
})
</script>
<template>
  <section class="User-View col-span-12 col12 min-h-fit">
    <article class="col-span-12 lg:col-span-6 flex flex-col lg:items-start lg:justify-center">
      <h1
        class="font-fugaz-one uppercase text-4xl lg:text-6xl text-center lg:text-left lg:leading-[4.5rem]"
      >
        <span class="text-Tonic">S</span>mash <span class="text-Tonic">a</span>rena
        <span class="text-Tonic">e</span>vent<br /><span class="text-Tonic"
          >2<span class="text-xl lg:text-3xl">ème édition</span></span
        >
      </h1>
      <p class="col-start-3 col-span-8 text-center lg:text-left lg:text-xl mt-7 lg:mt-9">
        Bienvenue au Smash Arena Event ! Nous sommes une association étudiante organisant des
        <span class="font-bold">tournois gratuits</span> entre membre du Nord Franche-Comté sur le
        jeu <span class="font-bold">Super Smash Bros Ultimate</span> et bien plus !
      </p>
      <div class="col-span-12 flex justify-center mt-5 lg:mt-9">
        <a href="#">
          <button
            class="bg-Tonic h-12 lg:h-24 -skew-x-[25deg] lg:ml-[13px] hover:opacity-60 duration-200"
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
      class="col-span-12 lg:col-start-8 lg:col-span-5 h-min justify-center lg:User-View flex flex-col"
    >
      <img class="col-span-12 mt-7 lg:mt-0" :src="imageHeroAffiche" />
    </article>
  </section>
  <section class="col-span-12 col12 mt-5">
    <h2
      class="font-fugaz-one uppercase text-3xl lg:text-5xl lg:text-center col-span-12 mb-7 lg:mb-12"
    >
      <span class="text-Tonic">Smash Arena Event</span> La première édition
    </h2>
    <Slider />
    <div
      class="col-start-3 lg:col-start-6 col-span-10 lg:col-span-5 bg-Gris text-Blanc mt-1 lg:mt-2.5 px-5 py-2.5 lg:py-5"
    >
      <p class="text-base">
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
    <RouterLink class="col-span-12 mt-12 lg:mt-24 flex justify-center" to="/regles">
      <button class="bg-Blanc h-12 lg:h-24 -skew-x-[25deg] hover:opacity-60 duration-200">
        <p
          class="text-Noir font-fugaz-one uppercase text-xs lg:text-3xl px-6 lg:px-12 skew-x-[25deg]"
        >
          Découvrir les autres règles
        </p>
      </button>
    </RouterLink>
  </section>
  <section class="col-span-12 col12 mt-12 lg:mt-24">
    <h2 class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl text-center lg:mb-12">
      <span class="text-Tonic">Le coin</span> chill
    </h2>
    <img class="col-span-12 lg:col-span-7 mt-7 lg:mt-0" src="/src/components/img/CoinChill.png" />
    <div
      class="col-span-12 col12 lg:col-span-5 lg:flex lg:flex-col lg:bg-Gris lg:mt-12 lg:py-12 lg:h-fit lg:-ml-24 lg:px-12"
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
          <img class="lg:w-20" src="/src/components/img/MarioKart.png" />
          <p class="text-[10px] relative -mx-5 lg:text-xl lg:mt-2.5">Mario kart 8</p>
        </div>
        <div class="col-start-6 col-span-2 flex flex-col items-center">
          <img class="lg:w-20" src="/src/components/img/YoGiOh.png" />
          <p class="text-[10px] relative -mx-5 lg:text-xl lg:mt-2.5">Yu-Gi-Oh!</p>
        </div>
        <div class="col-start-9 col-span-2 flex flex-col items-center">
          <img class="lg:w-20" src="/src/components/img/Splatoon.png" />
          <p class="text-[10px] relative -mx-5 lg:text-xl lg:mt-2.5">Splatoon</p>
        </div>
      </div>
    </div>
  </section>
  <section class="col-span-12 col12 mt-12 lg:mt-24">
    <h2 class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl text-center lg:mb-12">
      <span class="text-Tonic">Le coin</span> buvette
    </h2>
    <img
      class="col-span-12 lg:col-span-7 lg:col-start-6 mt-7 lg:mt-0 lg:order-2"
      src="/src/components/img/CoinBuvette.png"
    />
    <div
      class="bg-Gris mt-1 px-5 py-2.5 h-fit lg:mt-12 lg:py-12 lg:px-12 lg:-mr-24 lg:relative text-[10px] leading-4 lg:text-xl col-start-3 lg:col-start-1 col-span-10 lg:col-span-5 lg:order-1 lg:leading-8"
    >
      <p>
        La Buvette, nécessaire pour se restaurer durant un après-midi à s’amuser ! Mais attention, à
        consommer dans l’espace buvette, interdiction de manger à l’espace du Tournoi ou au coin
        Chill.
      </p>
    </div>
  </section>
  <section class="col-span-12 col12">
    <h2
      class="col-span-12 mt-12 lg:mt-24 text-center font-fugaz-one uppercase text-3xl lg:text-5xl"
    >
      <span class="text-Tonic">Tu veux participer ? </span>Inscris-toi !
    </h2>
    <nav class="col-span-12 flex flex-col lg:flex-row overflow-hidden mt-6 lg:mt-12">
      <div
        class="hover:z-10 relative w-full bg-center bg-cover bg-[url('/src/components/img/WallPaperJoueur.png')] overflow-hidden hover:scale-110 transition-all duration-1000"
      >
        <div
          class="h-52 lg:h-[608px] w-full bg-Noir_Vert hover:bg-transparent transition-all duration-1000 overflow-hidden"
        >
          <div
            class="h-full w-full col12 content-center hover:scale-[0.91] transition-all duration-1000"
          >
            <h3
              class="col-start-2 col-span-10 font-fugaz-one uppercase text-xl lg:text-5xl text-Tonic h-7 lg:h-16"
            >
              Comme joueur
            </h3>
            <p class="col-start-2 col-span-10 lg:text-xl mt-1">et participe au tournoi !</p>
            <RouterLink class="col-start-2 col-span-10 mt-6 lg:mt-20 ml-[13px]" to="#">
              <div class="bg-Noir w-fit -skew-x-[25deg]">
                <button class="bg-Tonic h-12 lg:h-20 hover:opacity-60">
                  <p
                    class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]"
                  >
                    Je m’inscris
                  </p>
                </button>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
      <div
        class="hover:z-10 relative w-full bg-center bg-cover bg-[url('/src/components/img/WallPaperBenevole.png')] overflow-hidden hover:scale-110 transition-all duration-1000"
      >
        <div
          class="lg:z-10 h-52 lg:h-[608px] w-full bg-Noir_Vert hover:bg-transparent transition-all duration-1000 overflow-hidden"
        >
          <div class="h-full col12 content-center hover:scale-[0.91] transition-all duration-1000">
            <h3
              class="text-right col-start-2 col-span-10 font-fugaz-one uppercase text-xl lg:text-5xl text-Tonic h-7 lg:h-16"
            >
              Comme Bénévole
            </h3>
            <p class="text-right col-start-2 col-span-10 lg:text-xl mt-1">
              et viens nous aider à gérer l’évènement !
            </p>
            <RouterLink class="ml-auto col-start-2 col-span-10 mt-6 lg:mt-20 mr-[13px]" to="#">
              <div class="bg-Noir w-fit -skew-x-[25deg]">
                <button class="bg-Tonic h-12 lg:h-20 hover:opacity-60">
                  <p
                    class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]"
                  >
                    Je m’inscris
                  </p>
                </button>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </section>
  <section class="col-span-12 col12">
    <h2
      class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl mt-12 lg:mt-24 text-center"
    >
      <span class="text-Tonic">Nos</span> Sponsors
    </h2>
    <div
      class="col-span-12 min-h-10 border-t border-b border-Tonic mt-6 lg:mt-12 -mx-5 lg:-mx-[48px]"
    >
      <!--Ajout des sponsors-->
    </div>
  </section>
  <section class="col-span-12 col12">
    <h2
      class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl text-center mt-12 lg:mt-24 lg:mb-12"
    >
      <span class="text-Tonic">Nous</span> contacter
    </h2>
    <Formulaire />
  </section>
</template>
