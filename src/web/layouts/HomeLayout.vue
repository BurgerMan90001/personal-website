<script setup lang="ts">
import MainTitleText from '../components/MainTitleText.vue'
</script>

<template>
  <div class="flex-layout">
    <header class="main-header"></header>
    <main>
      <section class="main-title-container">
        <MainTitleText class="main-title-text" title="This is my website" />
      </section>
      <img src="../assets/website-dinosaur.png" class="dinosaur-image" />
    </main>
    <footer></footer>
  </div>
</template>

<style scoped>
.flex-layout {
  height: 100%;
  /*display: flex;*/
  place-items: center;

  /*background-color: aqua;*/
}

main {
  height: 100%;
}
.main-title-container {
  margin: 10rem;
  background-color: aqua;
  /*height: 100%*/
}
.dinosaur-image {

}
.main-header {
  height: 20%;
  width: 100%;
  background-color: aqua;
}
</style>
