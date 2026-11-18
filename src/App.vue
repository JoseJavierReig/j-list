<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <Nav />
      <router-view />
    </q-page-container>
  </q-layout>
</template>
