<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { pb, SliderImage } from '@/backend' 
import ImgPb from './ImgPb.vue'
import MobileAnimationArrow from './icons/MobileAnimationArrow.vue'
import DesktopAnimationArrow from './icons/DesktopAnimationArrow.vue'

const Images = await pb.collection('ImagesSlider').getFullList();

const currentIndex = ref<number>(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % Images.length;
};

onMounted(() => {
  setInterval(nextSlide, 5000);
})

</script>

<template>
  <div class="lg:col-start-3 col-span-12 lg:col-span-8 relative group bg-Tonic isolate">
    <div
      class="relative grayscale group-hover:grayscale-0 group-hover:mix-blend-normal mix-blend-multiply isolate transition-all transition-discrete duration-500"
    >
      <div class="slideshow-container">
        <div
          v-for="(image, index) in Images"
          :key="index"
          class="slide"
          :class="{ active: index === currentIndex }"
        >
        <ImgPb
            v-if="image.Image"
            :record="image"
            :filename="image.Image"
            :aria-label="image.Name"
            class="object-fill"
            loading="lazy"
          />
          </div>
        <div
          class="absolute h-full w-full top-0 opacity-10 bg-Blanc group-hover:hidden transition-all duration-500"
        ></div>
      </div>
    </div>
    <MobileAnimationArrow aria-hidden="true" class="h-full w-auto absolute top-0 right-0 block z-10 lg:hidden" />
    <DesktopAnimationArrow aria-hidden="true" class="h-full w-auto absolute top-0 right-0 lg:block z-10 hidden" />
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
