<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './web/components/MainTitle.vue'

</script>

<template>
  <!--
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href= "css/main.css">
  <script>var exports = {};</script>

    <script src="js\index.js"></script>

  <title><%= pageName %></title>
  <link rel="icon" href="/favicon.ico">
  target="_blank" rel="noopener noreferrer" for new tab hyperlinks just in case
  </head>
  -->
  <!--
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="128" height="128" />
    -->

  <main>

    <div class="wrapper">
      <RouterView/>
    </div>

  </main>
</template>


<!--
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {

    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);

  }

  .logo {

    margin: 0 2rem 0 0;
  }

  header .wrapper {

    display: flex;

    place-items: flex-start;
    flex-wrap: wrap;

  }

  nav {

    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;

  }
}

</style>
-->
