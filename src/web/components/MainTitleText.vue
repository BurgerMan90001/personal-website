<script setup lang="ts">
import RouterLinks from './RouterLinks.vue';
defineProps<{
  title: string;
  subHeader: string;
}>()
</script>

<template>

  <div class="title-text">
    <h1 class="green">{{ title }}</h1>
    <h3>{{subHeader}}</h3>
    <RouterLinks></RouterLinks>
  </div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  /*position: relative;*/

}

h3 {
  font-size: 1.2rem;
}

.title-text h1,
.title-text h3 {
  text-align: center;
}
</style>
