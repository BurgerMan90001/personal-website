<script setup lang="ts">
import RouterLinks from '../components/RouterLinks.vue'
import MainTitleText from '../components/MainTitleText.vue';
</script>
<template>
  <div class="layout">
    <header class="main-header"></header>

    <main>
      <section class="main-title-container">
        <MainTitleText
        title="Contact me by email"
        sub-header="I prefer it">
        </MainTitleText>

        <div class="email-link">
          <a href="mailto:paulcasigay@gmail.com">paulcasigay@gmail.com</a>

        </div>

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

.email-link {
  margin-left: 10rem;
  font-size: larger;
}
.main-title-container {
  margin: 10rem;
  height: 400px;
  margin-top: 15rem;

  align-items: center;
  display: flex;
  flex-direction: row;
  background-color: var();
  font-size: larger;

}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
