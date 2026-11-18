<script setup lang="ts">
import { ref } from 'vue'
// Componentes
import Nav from './components/Nav.vue';
import SideNavBar from './components/SideNavBar.vue';

const activated = ref()

const sendToSideNavBar = (data: boolean) => {
  activated.value = data
  console.log('Llega desde el Nav: ', activated.value);
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <Nav @activated-side-bar="sendToSideNavBar" />
      <SideNavBar
       :activated="activated"/>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
