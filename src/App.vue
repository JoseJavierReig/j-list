<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import SideNavBar from './components/SideNavBar.vue';
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <Nav />
      <SideNavBar />
      <router-view />
    </q-page-container>
  </q-layout>
</template>
