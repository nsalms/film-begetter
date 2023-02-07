<script setup>
import { RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <!-- HEADER/NAVBAR -->
  <header>
    <TheNavBar></TheNavBar>
  </header>

  <!-- MAIN -->
  <div class="wrap container container-fluid">
    <RouterView></RouterView>
  </div>

  <!-- FOOTER -->
  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>

<style scoped></style>
