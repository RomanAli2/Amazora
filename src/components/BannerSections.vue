<template>
  <div class="slider w-full h-full relative overflow-hidden">
    <!-- Images -->
    <img
      :src="images[currentIndex]"
      class="w-full h-full object-cover  duration-500"
    />

    <!-- Prev Button -->
    <button @click="prevSlide" class="absolute left-2 top-1/2 bg-black/50 text-white px-3 py-1">
      <
    </button>

    <!-- Next Button -->
    <button @click="nextSlide" class="absolute right-2 top-1/2 bg-black/50 text-white px-3 py-1">
      >
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const images = [
  "https://m.media-amazon.com/images/I/71t6-l+UneL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81DKIMqhSQL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81jDd5S9ewL._SX3000_.jpg"
];
const currentIndex = ref(0);
function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % images.length;
}
function prevSlide() {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length;
}
onMounted(() => {
  setInterval(() => {
    nextSlide();
  }, 3000);
});
</script>
