<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    
</script>
<template>
    <h1 class="font-fugaz-one uppercase text-4xl"><span class="text-Tonic">F</span>oire <span class="text-Tonic">a</span>ux <span class="text-Tonic">q</span>uestions</h1>
    <nav class="flex flex-wrap gap-5">
        <a class="bg-Blanc" href="#event">
            <button>
                <p class="text-Noir font-fugaz-one uppercase text-xs">L'événement</p>
            </button>
        </a>
        <a class="bg-Blanc" href="#tournoi">
            <button>
                <p class="text-Noir font-fugaz-one uppercase text-xs">Le tournoi</p>
            </button>
        </a>
        <a class="bg-Blanc" href="#accessible">
            <button>
                <p class="text-Noir font-fugaz-one uppercase text-xs">L'accessibilité</p>
            </button>
        </a>
        <a class="bg-Blanc" href="#benevole">
            <button>
                <p class="text-Noir font-fugaz-one uppercase text-xs">Le bénévolat</p>
            </button>
        </a>
    </nav>
    <article id="event">
        <h2 class="font-fugaz-one uppercase text-3xl"><span class="text-Tonic">L'</span>évenement</h2>
        <!--Cards-->
    </article>
    <article id="tournoi">
        <h2 class="font-fugaz-one uppercase text-3xl"><span class="text-Tonic">Le</span> tournois</h2>
        <!--Cards-->
    </article>
    <article id="accessible">
        <h2 class="font-fugaz-one uppercase text-3xl"><span class="text-Tonic">L'</span>accessibilité</h2>
        <!--Cards-->
    </article>
    <article id="benevole">
        <h2 class="font-fugaz-one uppercase text-3xl"><span class="text-Tonic">Le</span> bénévolat</h2>
        <!--Cards-->
    </article>
    <p>Vous avez encore des questions sans réponse ?<br/>Envoyez nous un message via nos réseaux sociaux ou depuis notre formulaire de contact !</p>
    <RouterLink to="/contact">
        <button class="bg-Tonic">
            <p class="text-Noir font-fugaz-one uppercase text-xs">Nous contacter</p>
        </button>
    </RouterLink>
</template>