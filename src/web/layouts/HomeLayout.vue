<script setup lang="ts">
import MainTitleText from '../components/MainTitleText.vue'
</script>

<template>
  <div class="flex-layout">
    <header class="main-header"></header>

    <main>
      <section class="main-title-container">

        <MainTitleText class="main-title-text" title="This is my website" />
        <img src="../assets/images/website-dinosaur.png" class="dinosaur-image" />

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

.main-header {
  height: 100px;
  width: 100%;
  background-color: var(--vt-c-navy);
  border-bottom: 2px solid var(--vt-c-navy-soft);
}

/*background-image: url('../assets/images/shapes.png');*/
.main-title-text {
  /*margin: 10rem;*/
}
main {

}
.main-title-container {
  margin: 10rem;
  height: 400px;
  margin-top: 15rem;


  align-items: center;
  display: flex;
  flex-direction: row;
  background-color: var();

}
.dinosaur-image {
  height: 200px;
  width: 200px;
}

</style>
