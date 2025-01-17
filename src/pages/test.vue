<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "FadeSlideshow",
  setup() {
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

    return {
      images,
      currentIndex,
    };
  },
});
</script>

<template>
  <div class="bg-Tonic_Sombre contrast-150">
  <div class="slideshow-container grayscale hover:grayscale-0 opacity-40 hover:opacity-100">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="slide contrast-150"
      :class="{ active: index === currentIndex }"
    >
      <img :src="image" alt="Slideshow image" />
    </div>
  </div>
  </div>
</template>

<style scoped>
.slideshow-container {
  position: relative;
  width: 100%;
  height: 400px; /* Ajuste selon tes besoins */
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
  object-fit: cover;
}

.slide.active {
  opacity: 1;
}
</style>