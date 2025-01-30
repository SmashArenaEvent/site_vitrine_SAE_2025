<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import CardRegles from '@/components/CardRegles.vue'
</script>
<template>
  <h1 class="col-span-12 font-fugaz-one uppercase text-4xl lg:text-6xl mt-8 mb-12">
    <span class="text-Tonic">R</span>ègles
  </h1>
  <nav
    class="lg:col-start-2 col-span-12 lg:col-span-10 flex gap-5 flex-wrap flex-col lg:flex-row justify-between items-center"
  >
    <a href="#rGenerales">
      <button class="bg-Blanc h-12 lg:h-20 -skew-x-[25deg]">
        <p
          class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]"
        >
          Les régles générales
        </p>
      </button>
    </a>
    <a href="#rTournois">
      <button class="bg-Blanc h-12 lg:h-20 -skew-x-[25deg]">
        <p
          class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]"
        >
          Règles autour du tournoi
        </p>
      </button>
    </a>
    <a href="#rAutres">
      <button class="bg-Blanc h-12 lg:h-20 -skew-x-[25deg]">
        <p
          class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]"
        >
          Autres règles
        </p>
      </button>
    </a>
  </nav>
  <article id="rGenerales" class="col-span-12 col12">
    <h2 class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl mt-12 lg:mt-24 lg:mb-12">
      <span class="text-Tonic">Les règles</span> générales
    </h2>
    <CardRegles
      Style="0"
      Icone="1"
      Title="Format du tournoi"
      Text="Le tournoi sera en format double élimination (winner-looser bracket) avec un gagnant et un perdant dans chaque match suite à un duel en 3 manches le premier à 2 victoires gagne."
    />
    <CardRegles
      Style="0"
      Icone="2"
      Title="Manettes"
      Text="Les joueurs peuvent utiliser leur propre manette GameCube ou une manette Pro pour Nintendo Switch. Les manettes filaires sont recommandées pour éviter des problèmes de connectivité. Si un joueur n’a pas sa propre manette, des joicons lui seront fournis."
    />
    <CardRegles
      Style="0"
      Icone="3"
      Title="Personnages"
      Text="Tous les personnages sont autorisés sauf les personnages DLC."
    />
    <CardRegles
      Style="0"
      Icone="4"
      Title="Stades autorisés"
      Text="Seuls les stades autorisés seront utilisés pour les matchs."
    />
    <CardRegles
      Style="0"
      Icone="5"
      Title="Propreté"
      Text="Venez propres, douchez-vous si possible la veille."
    />
    <CardRegles
      Style="0"
      Icone="6"
      Title="Utilisation des espaces"
      Text="Les espaces sont réservés uniquement à leur utilité. Si une personne ne respecte pas cette règle, elle sera rappelée à l’ordre. Éviter de manger en jouant pour respect du matériel, des bénévoles et des organisateurs."
    />
  </article>
  <article id="rTournois" class="col-span-12 col12">
    <h2 class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl mt-12 lg:mt-24 lg:mb-12">
      <span class="text-Tonic">Les règles</span> autour du tournois
    </h2>
    <CardRegles
      Style="1"
      Icone="1"
      Title="Temps de match"
      Text="Les matchs auront une durée fixe de 7 minutes maximum par manches."
    />
    <CardRegles
      Style="1"
      Icone="2"
      Title="Stocks"
      Text="Les matchs se joueront en mode &#34;Stocks&#34;. Chaque joueur commencera avec 3 vies."
    />
    <CardRegles
      Style="1"
      Icone="3"
      Title="Temps supplémentaire"
      Text="Si le temps imparti est écoulé, le joueur avec le plus de vies restantes remporte le match. En cas d'égalité, un Sudden Death sera joué."
    />
    <CardRegles
      Style="1"
      Icone="4"
      Title="Sudden Death"
      Text="Si un Sudden Death est nécessaire, les joueurs joueront un match d'une vie sur un stade aléatoire avec une bombe à retardement."
    />
    <CardRegles
      Style="1"
      Icone="5"
      Title="Pauses"
      Text="Les pauses ne sont autorisées que lorsque le jeu est en pause, et seulement en cas de problème technique ou de pause autorisée."
    />
    <CardRegles
      Style="1"
      Icone="6"
      Title="Contestation"
      Text="Si un joueur conteste un problème ou une règle, le match peut être mis en pause pour examen par les organisateurs du tournoi."
    />
  </article>
  <article id="rAutres" class="col-span-12 col12 mb-4">
    <h2 class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl lg:mt-24 mt-12 lg:mb-12">
      <span class="text-Tonic">Autres</span> Régles
    </h2>
    <CardRegles
      Style="0"
      Icone="1"
      Title="Comportement"
      Text="Tout comportement antisportif ou de triche sera sévèrement sanctionné, y compris le non-respect des règles ou le harcèlement envers d'autres joueurs."
    />
    <CardRegles
      Style="0"
      Icone="2"
      Title="Retard"
      Text="Les joueurs doivent être présents et prêts à jouer leur match à l'heure prévue. Un délai de 5 minutes peut être toléré, mais les retards excessifs peuvent entraîner la disqualification."
    />
    <CardRegles
      Style="0"
      Icone="3"
      Title="Décisions des organisateurs"
      Text="Les décisions des organisateurs du tournoi sont finales en ce qui concerne les règles et les litiges."
    />
    <CardRegles
      Style="0"
      Icone="4"
      Title="Enregistrement des matchs"
      Text="Les organisateurs du tournoi peuvent enregistrer les matchs pour des raisons de sécurité et de diffusion."
    />
    <CardRegles
      Style="0"
      Icone="5"
      Title="Fair-play"
      Text="Les joueurs sont encouragés à faire preuve de fair-play et de respect envers leurs adversaires."
    />
    <CardRegles
      Style="0"
      Icone="6"
      Title="Respect"
      Text="Les joueurs devront garder les lieux propres, ne pas dégrader le matériel et jeter leurs déchets dans les poubelles prévues à cet effet ainsi que respecter le personnel."
    />
    <CardRegles
      Style="0"
      Icone="7"
      Title="Sécurité et bien-être"
      Text="Veiller à votre sécurité et au bien-être des autres en ne ramenant aucuns objets tranchants, en signalant tout incident et en respectant les consignes des organisateurs."
    />
    <CardRegles
      Style="0"
      Icone="8"
      Title="Consommations illégales"
      Text="Toute personne venant avec de l’alcool et des drogues, et la consommant dans l’événement, sera bannie de l’événement par les organisateurs."
    />
  </article>
</template>
