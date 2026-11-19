<script setup lang="ts">
// Componentes
import Nav from './components/Nav.vue';
import SideNavBar from './components/SideNavBar.vue';
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <Nav />
      <div class="app-content">
        <SideNavBar />
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.app-content {
  display: flex;
  width: 100%;
  min-height: calc(100vh - 74px);
}
</style>