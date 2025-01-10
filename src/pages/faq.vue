<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    
</script>
<template>
    <h1>Foire aux questions</h1>
    <nav class="flex flex-wrap gap-5">
        <a href="#event">
            <button>
                <p>L'événement</p>
            </button>
        </a>
        <a href="#tournoi">
            <button>
                <p>Le tournoi</p>
            </button>
        </a>
        <a href="#accessible">
            <button>
                <p>L'accessibilité</p>
            </button>
        </a>
        <a href="#benevole">
            <button>
                <p>Le bénévolat</p>
            </button>
        </a>
    </nav>
    <article id="event">
        <h2>L'évenement</h2>
        <!--Cards-->
    </article>
    <article id="tournoi">
        <h2>Le tournois</h2>
        <!--Cards-->
    </article>
    <article id="accessible">
        <h2>L'accessibilité</h2>
        <!--Cards-->
    </article>
    <article id="benevole">
        <h2>Le bénévolat</h2>
        <!--Cards-->
    </article>
    <p>Vous avez encore des questions sans réponse ?<br/>Envoyez nous un message via nos réseaux sociaux ou depuis notre formulaire de contact !</p>
    <RouterLink to="/contact">
        <button>
            <p>Nous contacter</p>
        </button>
    </RouterLink>
</template>