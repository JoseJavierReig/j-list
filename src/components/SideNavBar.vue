<script setup lang="ts">
  interface Props {
    activated: boolean
  }
  const props = defineProps<Props>()

  const options = [
    {label: 'DashBoard', value: 'dashboard', icon: 'dashboard'},
    {label: 'Inventario', value: 'stocktaking', icon: 'inventory_2'},
    {label: 'Lista compra', value: 'listCart', icon: 'shopping_cart'},
    {label: 'Categorias', value: 'categories', icon: 'sell'},
    {label: 'Tiendas', value: 'shops', icon: 'storefront'},
    {label: 'Historial', value: 'history', icon: 'history'},
  ]

  const lanzarConsola = () => {
    console.log('Esto llega al sideBar ', props.activated)
  }
</script>

<template>
  <div
    class="column-container side-container"
    :class="activated ? 'side-container-activated' : ''">
    <!-- Botones de opciones -->
    <div class="column-container">
     <q-btn
       v-for="option in options"
       align="left"
       flat
       :icon="option.icon"
       :label="option.label"
       class="btn-option"
       :class="activated ? '' : 'btn-hidden'"
       no-caps
       @click="lanzarConsola"/>
    </div>
  </div>
</template>

<style scoped>
  .side-container {
    background-color: var(--secondary);
    color: var(--app-bg);
    height: calc(100vh - 74px);
    width: 300px;
    transition: all 0.5s ease;
    align-items: flex-start;
    z-index: 2;
  }
  .btn-option {
    border-radius: 10px;
    padding: 5px 0px 5px 10px;
    transition: all 0.5s ease;
  }
  @media screen and (max-width: 1024px) {
    .side-container {
      width: 0px;
      padding: 0px;
    }
    .side-container-activated {
      width: 300px;
    }
    .btn-option {
      opacity: 1;
      transform: translateX(0);
    }
    .btn-hidden {
      opacity: 0;
      transform: translateX(-300px);
      overflow: hidden;
    }
  }
</style>