<script setup lang="ts">
import MainTitleText from '../components/MainTitleText.vue'
</script>

<template>
  <div class="layout">
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


.main-header {
  height: 50px;
  width: 100%;
  background-color: var(--vt-c-navy);
  border-bottom: 2px solid var(--vt-c-navy-soft);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

main {
  background-color: rgba(15, 14, 14, 0.089);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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
