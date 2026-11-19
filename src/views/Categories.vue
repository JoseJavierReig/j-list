<template>
  <div class="view-container">
    <!-- Cabecera de Categorías -->
    <div class="separator-container wraped-container">
      <div class="vertical-container">
        <h1 class="title">Categorías</h1>
        <h2 class="subtitle">Organiza tus productos por categorías y subcategorías.</h2>
      </div>
      <div class="btn-categories vertical-center-container">
        <q-chip
          :clickable="false"
          :ripple="false"
          class="chip-base">
          3 categorías
        </q-chip>
        <q-btn
          round
          icon="add"
          class="btn-icon">
          <q-tooltip>Nueva categoría</q-tooltip>
        </q-btn>
      </div>
    </div>
    
  </div>
</template>
<style scoped>
  .btn-categories {
    width: auto;
  }
</style>