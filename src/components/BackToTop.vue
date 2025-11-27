<template>
  <button
    v-if="show"
    @click="goTop"
    class="fixed bottom-6 right-6 bg-black text-white px-3 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-all cursor-pointer"
  >
    ↑ Top
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)

const checkScroll = () => {
  show.value = window.scrollY > 300
}

const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>
