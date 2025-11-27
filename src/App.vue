<template>
  <HeaderSection />
  <BannerSections />

  <ProductsSection
    :Product="store.Deals"
    :ListSections="store.ListSections"

  />
  <BackToTop/><br><br>
  <FooterSection/>
</template>

<script setup>
import HeaderSection from './components/HeaderSection.vue';
import BannerSections from './components/BannerSections.vue';
import ProductsSection from './components/ProductsSection.vue';

import BackToTop from './components/BackToTop.vue';
import { useProductStore } from './store/Products';
import FooterSection from './components/FooterSection.vue';
const store = useProductStore();
</script>
