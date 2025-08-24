<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>

  <div class="title-text">
    <h1 class="green">{{ title }}</h1>
    <h3>It's empty right now</h3>
    <h3>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
    </h3>
  </div>

</template>
<!--
<script lang='ts'>
export default {
  name: 'MainTitle',
}
</script>
-->
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.title-text h1,
.title-text h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .title-text h1,
  .title-text h3 {
    text-align: left;
  }
}
</style>
