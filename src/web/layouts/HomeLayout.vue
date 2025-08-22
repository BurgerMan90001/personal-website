<script setup lang="ts">
import MainTitleContainer from '../components/MainTitleContainer.vue';
</script>

<template>
  <div class ='flex-layout'>
    <MainTitleContainer class="main-title-container" title="This is my website"/>

  </div>

</template>

<style scoped>
.main-title-container {
  grid-area: header;
}


</style>
