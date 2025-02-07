<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import CardFAQ from '@/components/CardFAQ.vue'
import motifs from '@/components/icons/motifs.vue';
import MotifsMobile from '@/components/icons/motifsMobile.vue';
</script>
<template>
  <MotifsMobile/>
  <h1 class="col-span-12 font-fugaz-one uppercase text-4xl lg:text-6xl mt-8 mb-12 relative z-10">
    <span class="text-Tonic">F</span>oire <span class="text-Tonic">a</span>ux
    <span class="text-Tonic">q</span>uestions
  </h1>
  <nav
    class="lg:col-start-2 col-span-12 lg:col-span-10 flex flex-wrap justify-center lg:justify-between gap-5 relative z-10"
  >
    <a href="#event">
      <button class="bg-Blanc h-12 lg:h-20 -skew-x-[25deg] hover:opacity-60 duration-200">
        <p
          class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]"
        >
          L'événement
        </p>
      </button>
    </a>
    <a href="#tournoi">
      <button class="bg-Blanc h-12 lg:h-20 -skew-x-[25deg] hover:opacity-60 duration-200">
        <p
          class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]"
        >
          Le tournoi
        </p>
      </button>
    </a>
    <a href="#accessible">
      <button class="bg-Blanc h-12 lg:h-20 -skew-x-[25deg] hover:opacity-60 duration-200">
        <p
          class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]"
        >
          L'accessibilité
        </p>
      </button>
    </a>
    <a href="#benevole">
      <button class="bg-Blanc h-12 lg:h-20 -skew-x-[25deg] hover:opacity-60 duration-200">
        <p
          class="text-Noir font-fugaz-one uppercase text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]"
        >
          Le bénévolat
        </p>
      </button>
    </a>
  </nav>
  <article class="col-span-12 col12 relative" id="event">
    <motifs class="top-10 hidden lg:flex"/>
    <h2 class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl mt-12 lg:mt-24 lg:mb-12 relative z-10">
      <span class="text-Tonic">L'</span>évenement
    </h2>
    <CardFAQ
      Style="0"
      Title="Peut-on amener notre propre nourriture ?"
      Text="Non, il n’est pas possible d’amener votre propre nourriture à l’événement. En revanche, une restauration et une buvette sera mise en place pour vos besoins."
    />
    <CardFAQ
      Style="0"
      Title="Où puis-je trouver le programme de l’événement ?"
      Text="Vous pourrez retrouver le programme sur les réseaux sociaux de notre événement. N’hésitez pas à nous suivre !"
    />
    <CardFAQ
      Style="0"
      Title="Où se déroule l’événement et quels sont les horaires ?"
      Text="L’événement se déroule au bâtiment de l’ex-CDDP de Montbéliard situé au 4 Place Tharradin. Les horaires sont de 13H à 18H."
    />
    <CardFAQ
      Style="0"
      Title="Peut-on annuler notre  participation à l’événement que ce soit en tant  que joueur et bénévole ?"
      Text="Oui, en prévenant les organisateurs une semaine à l’avance via nos réseaux sociaux ou notre formulaire de contact. Sans cela, vous resterez inscrit et vos données seront conservées un an."
    />
    <CardFAQ
      Style="0"
      Title="Quelles sont les mesures de sécurité mises en place ?"
      Text="Pour votre sécurité, nous effectuerons des fouilles pour éviter tout objet dangereux dans l’enceinte de notre événement. Il y aura également une vérification du matériel informatique pour éviter tout incendie. Un garde sera aussi présent pour éviter tout débordement."
    />
    <CardFAQ
      Style="0"
      Title="Puis-je amener des sacs à dos ou des caméras ?"
      Text="Les caméras externes n’appartenant pas à la WebTV du campus seront interdites. Par contre, vous pourrez sans problème prendre votre sac pour amener votre manette et affaires personnelles. Dorénavant, sachez qu’il sera fouillé à l’entrée de l’événement."
    />
    <CardFAQ
      Style="0"
      Title="J’ai des problèmes techniques avec le site ou l’inscription, que dois-je faire ?"
      Text="Si vous rencontrez quelconque problème technique, contactez-nous par mail, sur les réseaux sociaux et si vous pouvez sur notre page contact."
    />
  </article>
  <article class="col-span-12 col12 relative" id="tournoi">
    <MotifsMobile class="-mt-48"/>
    <h2 class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl mt-12 lg:mt-24 lg:mb-12 relative z-10">
      <span class="text-Tonic">Le</span> tournois
    </h2>
    <motifs class="top-10 hidden lg:flex"/>
    <CardFAQ
      Style="1"
      Title="Comment puis-je m’inscrire à l’événement en tant que joueur ?"
      Text="Pour vous inscrire en tant que joueur, rendez-vous sur le site du tournoi, cliquez sur la fiche, puis sur le bouton menant au formulaire d’inscription. Vos données seront conservées un an après votre inscription."
    />
    <CardFAQ
      Style="1"
      Title="Combien de joueurs participeront au tournoi ?"
      Text="En tout, 64 joueurs pourront participer au tournoi."
    />
    <CardFAQ
      Style="1"
      Title="Quel est le format du tournoi ?"
      Text="Le tournoi sera en format double élimination (winner-looser bracket) avec un gagnant et un perdant dans chaque match suite à un duel en 3 manches le premier à 2 victoires gagne."
    />
    <CardFAQ
      Style="1"
      Title="Sur quelle plate-forme du jeu se déroule le tournoi ?"
      Text="Le jeu se déroulera sur plusieurs Nintendo Switch."
    />
    <CardFAQ
      Style="1"
      Title="Dois-je emmener  ma propre manette ?"
      Text="Oui, il est même OBLIGATOIRE d’amener votre propre manette. Quelques joycons seront mis à disposition s'il y a un oubli, prenez en compte qu’il y a un stock limité."
    />
    <CardFAQ
      Style="1"
      Title="Le tournoi sera-t-il diffusé en streaming ?"
      Text="Oui la seconde édition du tournois sera certainement diffusé en streaming"
    />
    <CardFAQ
      Style="1"
      Title="Y aura-t-il des commentaires pour les matchs lors du tournoi ?"
      Text="Pour dynamiser et mettre l’ambiance, il y aura des bénévoles réquisitionnés pour faire les commentateurs à chaque poste de Switch lié au tournoi."
    />
    <CardFAQ
      Style="1"
      Title="Quels sont les prix pour les gagnants du tournoi ?"
      Text="Pour le grand gagnant, il y aura un trophée à remporter, plusieurs lots seront également mis en place pour le second et le troisième. Vous en saurez plus le jour J !"
    />
    <CardFAQ
      Style="1"
      Title="À qui dois-je parler des problèmes techniques lors de l’événement ?"
      Text="Vous pouvez directement voir le bénévole mis à votre poste ou vous adressez à l’un des organisateurs."
    />
  </article>
  <article class="col-span-12 col12 relative" id="accessible">
    <MotifsMobile class="-mt-48"/>
    <motifs class="top-10 hidden lg:flex"/>
    <h2 class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl mt-12 lg:mt-24 lg:mb-12 relative z-10">
      <span class="text-Tonic">L'</span>accessibilité
    </h2>
    <CardFAQ
      Style="0"
      Title="Y a-t-il des places disponibles  proches de l’événement  si l’on vient en voiture ?"
      Text="Oui, il y a un grand parking gratuit disponible à 200m de l’événement."
    />
    <CardFAQ
      Style="0"
      Title="Quels bus prendre pour accéder à l’événement ?"
      Text="Si vous voulez accéder à l’événement en bus, vous pouvez, grâce à Evolity, venir depuis la gare de Montbéliard (arrêt Acropole) avec les lignes 1 (direction Valentigney) et 2 (direction Audincourt), puis vous arrêtez à l'arrêt Campus”."
    />
    <CardFAQ
      Style="0"
      Title="Quelles lignes de train prendre ?"
      Text="Si vous venez de Besançon, vous pouvez prendre un TER en direction de Belfort et vous arrêtez à Montbéliard. Et inversement, si vous venez de Belfort, prenez un train en direction de Besançon Viotte et Lyon Perrache, puis sortez à Montbéliard."
    />
    <CardFAQ
      Style="0"
      Title="Peut-on venir à l’événement en cosplay ?"
      Text="Oui, si le cosplay ne porte pas atteinte à la pudeur et n'est pas trop volumineux, il est tout à fait possible de venir en cosplay."
    />
    <CardFAQ
      Style="0"
      Title="L’événement est-il accessible aux personnes ayant des handicaps ?"
      Text="La salle n'est pas adaptée aux fauteuils roulants mais n'a pas de marches. Contactez-nous pour que l’on vous prépare un suivi afin d’améliorer votre expérience."
    />
  </article>
  <article class="col-span-12 col12 relative" id="benevole">
    <MotifsMobile class="-mt-48"/>
    <motifs class="top-10 hidden lg:flex"/>
    <h2 class="col-span-12 font-fugaz-one uppercase text-3xl lg:text-5xl mt-12 lg:mt-24 lg:mb-12 relative z-10">
      <span class="text-Tonic">Le</span> bénévolat
    </h2>
    <CardFAQ
      Style="1"
      Title="Quelles sont les étapes à suivre pour postuler en tant que bénévole ?"
      Text="Pour vous inscrire comme bénévole, rendez-vous sur le site du tournoi, cliquez sur la fiche, puis sur le bouton “Je m’inscris” dans la section “Vous voulez aider ? Devenez bénévole” en bas de page. Indiquez le rôle souhaité en vous référant aux missions décrites. Vos données seront conservées un an après votre inscription."
    />
    <CardFAQ
      Style="1"
      Title="Y a-t-il des critères spécifiques pour devenir bénévole ?"
      Text="Si vous êtes certains de votre disponibilité et que vous avez un bon contact humain, ainsi que le souhait d’aider, vous êtes les bienvenus. Nous recherchons des personnes sur qui nous pouvons compter !"
    />
    <CardFAQ
      Style="1"
      Title="Comment les rôles  de bénévolat sont-ils attribués ?"
      Text="Ils seront choisis par vous, pour éviter un favoritisme sur un poste. Nous mettrons sur notre site un quota visant à limiter le nombre de bénévoles sur chaque poste."
    />
    <CardFAQ
      Style="1"
      Title="Y a-t-il des compétences spécifiques que vous recherchez chez les bénévoles ?"
      Text="Oui, vous pourrez voir cela en téléchargeant les fiches décrivant les postes au sein de l’événement."
    />
    <CardFAQ
      Style="1"
      Title="Proposez-vous une formation pour les bénévoles ?"
      Text="Nous ne proposons pas de formations pour les bénévoles, en revanche, nous organiserons une rencontre au préalable avec l’ensemble pour discuter du déroulement de l’événement."
    />
    <CardFAQ
      Style="1"
      Title="Est-ce que le bénévolat  est occasionnel ou régulier ?"
      Text="Il est occasionnel, car il ne durera qu’une après-midi cette année, il y aura également un système de roulette pour avoir des pauses et également partir de l’événement si vous avez une autre occupation à faire dans la journée."
    />
    <CardFAQ
      Style="1"
      Title="Quelle est la politique en cas d'annulation ou de modification de mes disponibilités ?"
      Text="Non, il n’est pas possible d’amener votre propre nourriture à l’événement. En revanche, une restauration et une buvette sera mise en place pour vos besoins."
    />
    <CardFAQ
      Style="1"
      Title="Dois-je informer l'organisation à l'avance en cas de changement de mes engagements ?"
      Text="Oui, vous devez nous tenir au courant de toute modification et changement lié à vos engagements. Si cela n’est pas fait, cela peut mettre en péril le bon déroulement de l’événement."
    />
    <CardFAQ
      Style="1"
      Title="Y a-t-il une limite d'âge pour les bénévoles ?"
      Text="Conformément à la loi n° 2006-586 du 23 mai 2006 relative au volontariat associatif et à l'engagement éducatif - Article 3, la personne volontaire doit être âgée de plus de seize ans. Pour les personnes âgées de plus de seize ans et de moins de dix-huit ans, une autorisation parentale est exigée. Une visite médicale préalable est obligatoire. Les modalités d'accueil du mineur sont fixées par décret."
    />
    <CardFAQ
      Style="1"
      Title="Y a-t-il des possibilités  de bénévolat en ligne ou  à distance ?"
      Text="Non, l’événement sera disponible uniquement sur place, il n’y aura donc pas de possibilité de bénévolat en distance."
    />
    <CardFAQ Style="1" Title="Je me suis inscrit sur discord, comment cela se déroule ?" Text="Une fois que vous avez rejoint le serveur Discord, vous devrez choisir votre rôle entre bénévole, participant et visiteur. Si vous voulez changer de rôle, allez dans le salon (''🎭-rôles''). Vous aurez la possibilité de changé jusqu'au 21 mars (sauf pour les bénévoles qui aurons jusqu'au 15 mars)" />
  </article>
  <section class="col-span-12 col12 relative">
    <motifs class="top-[-100px] hidden lg:flex"/>
    <p class="lg:col-start-4 col-span-12 lg:col-span-6 lg:text-xl text-center mt-24 mb-12">
      Vous avez encore des questions sans réponse ?<br />Envoyez nous un message via nos réseaux
      sociaux ou depuis notre formulaire de contact !
    </p>
    <RouterLink class="col-span-12 mx-auto mb-12 -skew-x-[25deg] bg-Noir" onclick="window.scrollTo(0, 0);" to="/contact">
      <button class="bg-Tonic h-12 lg:h-20 ml-[13px] hover:opacity-60 duration-200">
        <p class="font-fugaz-one uppercase lg:text-xl text-Noir px-6 lg:px-9 skew-x-[25deg]">
          Nous contacter
        </p>
      </button>
    </RouterLink>
  </section>
</template>
