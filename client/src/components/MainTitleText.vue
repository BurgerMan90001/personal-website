<script setup lang="ts">
import RouterLinks from './RouterLinks.vue';
defineProps<{
  title: string;
  subHeader: string;
}>()
</script>

<template>

  <div class="title-text">
    <h1 class="sage-soft-text">{{ title }}</h1>
    <h4 class="sage-text">{{subHeader}}</h4>
    <RouterLinks></RouterLinks>
  </div>

</template>

<style scoped>

template {

}
h4 {
  padding: 3px;
  font-size: 1rem;
}
h1 {
  font-weight: 500;
  font-size: 2rem;
}

h3 {
  font-size: 1.2rem;
}

.title-text {
  text-align: left;
}
</style>
