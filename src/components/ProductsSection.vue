<template><div class="body bg-gray-300">
  <!-- Grid products -->
  <div class="productCards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 bg-gray-300 w-full">
    <div 
      class="product bg-white p-2 rounded text-center shadow" 
      v-for="item in Product" 
      :key="item.id"
    >
      <img :src="item.image" class="w-full h-40 object-contain" />
      <h1 class="text-sm font-semibold mt-2">{{ item.ProductTitle }}</h1>
      <p class="text-gray-700 font-bold">${{ item.price }}</p>

      <button class="bg-yellow-500 text-white px-3 py-1 rounded-md font-bold hover:bg-yellow-600">
        Buy now
      </button>
    </div>
  </div>

<!-- Scroll List -->
<div 
  v-for="Section in ListSections" 
  class="w-full mt-6 flex justify-center bg-gray-300 px-2"
>
  <div 
    class="bg-white p-3 rounded shadow 
           w-full max-w-6xl 
           overflow-x-auto 
           scrollbar-thin"
  >
    <h2 class="font-bold mb-3 text-base sm:text-lg">
      {{ Section.title }}
    </h2>

    <div 
      class="flex items-center gap-3 sm:gap-4 w-max"
    >
      <img 
        v-for="item in Section.items"
        :key="item.id"
        :src="item.image"
        class="h-20 sm:h-28 md:h-32 object-contain rounded"
      />
    </div>
  </div>
</div>
</div>
</template>

<script setup>
const props = defineProps({
  Product: Array,
  ProductTitle: String,
 ListSections:Array

})
</script>

