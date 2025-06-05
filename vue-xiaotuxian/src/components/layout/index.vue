<template>
  <layNav />
  <layHeader />
  <RouterView />
  <layFooter />
  <layoutFixed/>
</template>

<script setup>
import layHeader from './components/layHeader.vue';
import layFooter from './components/layFooter.vue';
import layNav from './components/layNav.vue';
import layoutFixed from './components/layoutFixed.vue';
</script>

<style scoped>
</style>