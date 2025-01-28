<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from "vue";
import MobileAnimationArrow from "@/components/img/MobileAnimationArrow.vue";
import DesktopAnimationArrow from "./img/DesktopAnimationArrow.vue";

const images = ref<string[]>([
  "/src/components/img/AnimationTeamPremierEdition.png", // Remplace par tes chemins d'images
  "/src/components/img/AnimationPartie.png",
  "/src/components/img/AnimationCartes.png",
  "/src/components/img/AnimationDuel.png",
  "/src/components/img/AnimationJeuxDeSociete.png"
]);

const currentIndex = ref<number>(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// Change d'image toutes les 3 secondes
onMounted(() => {
  setInterval(nextSlide, 5000);
});
</script>

<template>
  <div class="lg:col-start-3 col-span-12 lg:col-span-8 relative ">
    <div class="bg-Tonic_Sombre contrast-150 hover:contrast-100 duration-200">
      <div class="slideshow-container grayscale hover:grayscale-0 opacity-40 hover:opacity-100 contrast-150 hover:contrast-100 duration-200">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="slide"
          :class="{ active: index === currentIndex }"
        >
          <img :src="image" class="object-fill" alt="Images de la première édition" />
        </div>
      </div>
    </div>
    <MobileAnimationArrow class="h-full w-auto absolute top-0 right-0 block z-10 lg:hidden"/>
    <DesktopAnimationArrow class="h-full w-auto absolute top-0 right-0 lg:block z-10 hidden"/>
  </div>
</template>

<style scoped>
.slideshow-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.slide.active {
  opacity: 1;
}
</style>
