<script setup lang="ts">
import MainTitleText from '../components/MainTitleText.vue';

</script>

<template>
  <div class="layout">
    <header class="main-header"></header>

    <main>
      <section class="main-title-container">

        <MainTitleText class="main-title-text"
        title="This is my website" subHeader="Its empty right now">
        </MainTitleText>

        <img src="../assets/images/website-dinosaur.png" class="dinosaur-image" />

      </section>

    </main>
    <footer class="main-footer">

    </footer>
  </div>
</template>

<style scoped>

main {
  background-color: var(--color-background-dark);
  box-shadow: var(--drop-shadow);
}

.main-title-container {
  margin: 10rem;
  height: 400px;
  margin-top: 15rem;

  align-items: center;
  display: flex;
  flex-direction: row;


}
.dinosaur-image {
  height: 200px;
  width: 200px;
}
</style>
