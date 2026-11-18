<script setup lang="ts">
  const options = [
    {label: 'DashBoard', value: 'dashboard', icon: 'dashboard'},
    {label: 'Inventario', value: 'stocktaking', icon: 'inventory_2'},
    {label: 'Lista compra', value: 'listCart', icon: 'shopping_cart'},
    {label: 'Categorias', value: 'categories', icon: 'sell'},
    {label: 'Tiendas', value: 'shops', icon: 'storefront'},
    {label: 'Historial', value: 'history', icon: 'history'},
  ]
</script>

<template>
  <div
    class="column-container side-container">
    <!-- Botones de opciones -->
    <div class="column-container">
     <q-btn
       v-for="option in options"
       align="left"
       flat
       :icon="option.icon"
       :label="option.label"
       class="btn-option"
       no-caps/>
    </div>
  </div>
</template>

<style scoped>
  .side-container {
    background-color: var(--secondary);
    color: var(--app-bg);
    height: calc(100vh - 74px);
    width: 300px;
    align-items: flex-start;
    transition: all 0.5s ease;
    z-index: 2;
  }
  .btn-option {
    border-radius: 10px;
    padding: 5px 0px 5px 10px;
  }
</style>