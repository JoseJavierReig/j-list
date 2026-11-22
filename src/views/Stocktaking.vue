<script setup lang="ts">
  // Vue
  import { ref, reactive } from 'vue';

  // Propiedades
  const search = ref('')
</script>
<template>
  <div class="view-container">
    <!-- Cabecera de inventario -->
    <div class="separator-container wraped-container">
      <div class="simple-container title-container">
        <q-icon name="inventory_2" class="icon-max" />
        <div class="vertical-container">
          <h1 class="title">Inventario</h1>
          <h2 class="subtitle">Consulta y controla las existencias de tus productos</h2>
        </div>
      </div>
      <div class="btn-inventory vertical-center-container">
        <q-btn
          round
          icon="add"
          class="btn-icon">
          <q-tooltip>Agregar producto</q-tooltip>
        </q-btn>
      </div>
    </div>
    <!-- Sección de busquedas -->
    <div class="simple-container">
      <!-- Input de busqueda -->
      <q-input filled class="cover-input" v-model="search" placeholder="Buscar tiendas...">
        <template #prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </div>
</template>
<style scoped>
  .title-container {
    width: auto;
  }
  .btn-inventory {
    width: auto;
    max-width: 200px;
  }
  .cover-input {
    width: 100%;
  }
  .cover-input :deep(.q-field__control) {
    border-radius: 10px;
    overflow: hidden;
  }
</style>