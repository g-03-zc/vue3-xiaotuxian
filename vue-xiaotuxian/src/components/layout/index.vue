<template>
  <layNav />
  <layHeader />
  <RouterView />
  <layFooter />
  <layoutFixed/>
</template>

<script setup>
import { onMounted } from 'vue'
import layHeader from './components/layHeader.vue';
import layFooter from './components/layFooter.vue';
import layNav from './components/layNav.vue';
import layoutFixed from './components/layoutFixed.vue';
import { useCategoryStore } from '@/stores/category'

const cateDate = useCategoryStore()
onMounted(() => {
  cateDate.categoryDate()
  console.log(cateDate);
  
})
</script>

<style scoped>
</style>