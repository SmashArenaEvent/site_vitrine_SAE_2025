<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Insta from '../components/icons/BoutonInsta.vue'
import X from '../components/icons/BoutonX.vue'
import Discord from '../components/icons/BoutonDiscord.vue'
</script>
<template>
  <article
    class="flex flex-col items-center col-span-12 User-View min-h-fit justify-center lg:col12 py-auto lg:content-center pb-[10vh]"
  >
    <section class="lg:col-start-1 col-span-5 lg:my-auto">
      <h1
        class="font-fugaz-one uppercase text-3xl lg:text-5xl text-center leading-[56px] lg:leading-normal lg:text-left"
      >
      <span class="text-Tonic">L</span>es <span class="text-Tonic">i</span>nscriptions <span class="text-Tonic">a</span>rrivent <span class="text-Tonic">b</span>ientôt <span class="text-Tonic">!</span>
      </h1>
      <p class="text-center mt-5 mb-10  lg:text-left lg:text-xl">
        Vous voulez savoir quand vous pourrez vous inscrire en tant que participant ?
        <br/><br class="lg:hidden"/>
        Suivez-nous sur nos réseaux, nous l'annoncerons très bientôt !
      </p>
      <div class="flex justify-center lg:justify-start gap-5 lg:gap-8 mb-12 lg:mb-20">
          <a class="w-12 lg:w-14 h-12 lg:h-14 hover:opacity-60 duration-200" href="https://www.instagram.com/smash_arena_event/">
            <Insta alt="Instagram"/>
          </a>
          <a class="w-12 lg:w-14 h-12 lg:h-14 hover:opacity-60 duration-200" href="https://twitter.com/SmashArenaEvent">
            <X alt="X"/>
          </a>
          <a class="w-12 lg:w-14 h-12 lg:h-14 hover:opacity-60 duration-200" href="https://discord.gg/6zFJf9WXy2">
            <Discord alt="Discord"/>
          </a>
      </div>
      <RouterLink to="/" class="hidden lg:block ml-[13px] hover:opacity-60">
        <button class="bg-Blanc h-12 -skew-x-[25deg]">
          <p
            class="font-fugaz-one uppercase text-Noir text-xs lg:text-xl px-6 skew-x-[25deg]"
          >
            Retourner à l'accueil
          </p>
        </button>
      </RouterLink>
    </section>
    <img
      class="lg:col-start-7 lg:col-span-6"
      src="/src/components/img/Pikachu.avif"
      alt="Image de donkey kong"
    />
    <RouterLink to="/" class="lock lg:hidden mt-8 hover:opacity-60" onclick="window.scrollTo(0, 0);">
      <button class="bg-Tonic h-12 lg:h-20 -skew-x-[25deg]">
        <p
          class="font-fugaz-one uppercase text-Noir text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]"
        >
          Retourner à l'accueil
        </p>
      </button>
    </RouterLink>
  </article>
</template>