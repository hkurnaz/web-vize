<template>
  <v-container fluid>
    <!-- Background image -->
    <div
      :style="{
        backgroundImage: 'url(' + activeSlide + ')',
        filter: 'blur(5px)',
      }"
      class="background-container"
    >
      <!-- Your content -->
    </div>
  </v-container>

  <v-container>
    <!-- Carousel in the middle -->
    <div class="carousel-container" style="margin-top: -400px">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        style="width: 70%"
      >
        <!-- Your slides here -->
        <q-carousel-slide :name="1">
          <img
            src="photo/carousel1.png"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </q-carousel-slide>
        <q-carousel-slide :name="2">
          <img
            src="photo/carousel2.png"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </q-carousel-slide>
        <q-carousel-slide :name="3">
          <img
            src="photo/carousel3.png"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </q-carousel-slide>
        <q-carousel-slide :name="4">
          <img
            src="photo/carousel4.png"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </q-carousel-slide>
      </q-carousel>
    </div>
  </v-container>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const slide = ref(1);
    const autoplay = ref(true);

    // Array of image sources
    const slideImages = [
      'photo/carousel1.png',
      'photo/carousel2.png',
      'photo/carousel3.png',
      'photo/carousel4.png',
    ];

    // Get the active slide's image source
    const activeSlide = computed(() => slideImages[slide.value - 1]);

    return {
      slide,
      autoplay,
      slideImages,
      activeSlide,
    };
  },
};
</script>

<style scoped>
.background-container {
  background-size: cover;
  background-position: center;
  height: 500px; /* Adjust this height as needed */
  transition: filter 0.3s ease-in-out; /* Smooth transition for blur effect */
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Adjust this height as needed */
}
</style>
