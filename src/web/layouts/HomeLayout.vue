<script setup lang="ts">
import MainTitleText from '../components/MainTitleText.vue'
</script>

<template>
  <div class="flex-layout">
    <header class="main-header"></header>

    <main>
      <section class="main-title-container">

        <MainTitleText class="main-title-text" title="This is my website" />
        <img src="../assets/website-dinosaur.png" class="dinosaur-image" />
      </section>

    </main>
    <footer class="main-footer">

    </footer>
  </div>
</template>

<style scoped>
.flex-layout {
  height: 100%;
  /*display: flex;*/
  place-items: center;

}
.main-footer {
  
  width: 100%;
  background-color: rgb(51, 50, 50);
}
.main-title-text {

}
main {

}
.main-title-container {
  margin: 10rem;
  margin-top: 20rem;
  display: flex;
  flex-direction: row;


}
.dinosaur-image {
  height: 200px;
  width: 200px;
}
.main-header {
  height: 100px;
  width: 100%;
  background-color: rgb(51, 50, 50);
}
</style>
