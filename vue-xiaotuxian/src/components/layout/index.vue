<template>
  <layNav />
  <layHeader />
  <RouterView />
  <layFooter />
</template>

<script setup>
import layHeader from './components/layHeader.vue';
import layFooter from './components/layFooter.vue';
import layNav from './components/layNav.vue';
</script>