<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>
<template>
  <article
    class="flex flex-col items-center col-span-12 User-View min-h-fit justify-center lg:col12 py-auto lg:content-center pb-[10vh]"
  >
    <section class="lg:col-start-2 col-span-4 lg:my-auto">
      <h1
        class="font-fugaz-one uppercase text-4xl lg:text-6xl text-center leading-[56px] lg:leading-normal lg:text-left"
      >
        <span class="text-Tonic">E</span>rreur <span class="text-Tonic">404</span>
      </h1>
      <p class="text-center mt-5 my-12 lg:text-left lg:text-xl">
        Même Donkey Kong n’a su retrouver la page.<br />Celle-ci doit être actuellement introuvable.
      </p>
      <RouterLink to="/" class="hidden lg:block ml-[13px] hover:opacity-60">
        <button class="bg-Tonic h-12 lg:h-20 -skew-x-[25deg]">
          <p
            class="font-fugaz-one uppercase text-Noir text-xs lg:text-xl px-6 lg:px-9 skew-x-[25deg]"
          >
            Retourner à l'accueil
          </p>
        </button>
      </RouterLink>
    </section>
    <img
      class="lg:col-start-7 lg:col-span-6"
      src="/src/components/img/DonkeyKong404.webp"
      alt="Image de donkey kong"
      loading="lazy"
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
