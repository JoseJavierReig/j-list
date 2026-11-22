<script setup lang="ts">
  // Vue
  import { ref } from 'vue';
  // Componentes
  import CardStore from '../components/CardStore.vue';

  // Propiedades
  const search = ref('')
  const url1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLmz_pnYuWINdtsIopdXImiCqkN6OCVqCwZwN2hZyLArvtNId-1TtpA0&s=10'
  const url2 = 'https://i.pinimg.com/736x/66/bc/4e/66bc4e8d1482e6ec4525987c1691c83e.jpg'
  const url3 = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/AldiNord-WorldwideLogo.svg/1280px-AldiNord-WorldwideLogo.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail'
  const url4 = 'https://media.printables.com/media/prints/737685/images/5765405_a7258822-3e12-4c3d-80d0-a93eca2c2b4a_c0f967a3-1528-46e1-8b05-f2f25fe7c8ff/thumbs/inside/1280x960/png/thumbnail-2.webp'
  const stores = [
    {id: '1', name: 'Carrefour', type: 'Supermercado', imageUrl: url1, address: 'Calle 2', schedule: 'Lun - Dom: 9:00 - 22:00'},
    {id: '2', name: 'Mercadona', type: 'Supermercado', imageUrl: url2, address: 'Calle 2', schedule: 'Lun - Dom: 9:00 - 21:30'},
    {id: '3', name: 'Aldi', type: 'Supermercado', imageUrl: url3, address: 'Calle 2', schedule: 'Lun - Sab: 9:00 - 21:00'},
    {id: '4', name: 'Lidl', type: 'Supermercado', imageUrl: url4, address: 'Calle 2', schedule: 'Lun - Dom: 8:00 - 22:00'},
  ]
</script>
<template>
  <div class="view-container">
    <!-- Cabecera de tiendas -->
    <div class="separator-container wraped-container">
      <div class="simple-container title-container">
        <q-icon name="storefront" class="icon-max" />
        <div class="vertical-container">
          <h1 class="title">Tiendas</h1>
          <h2 class="subtitle">Gestiona los establecimientos donde realizas tus compras.</h2>
        </div>
      </div>
      <div class="btn-stores vertical-center-container">
        <q-chip
          :clickable="false"
          :ripple="false"
          class="chip-base">
          4 tiendas
        </q-chip>
        <q-btn
          round
          icon="add"
          class="btn-icon">
          <q-tooltip>Agregar tienda</q-tooltip>
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
    <!-- Sección de tiendas -->
    <div class="simple-container wraped-container">
      <CardStore
        v-for="store in stores"
        :imageUrl="store.imageUrl"
        :title="store.name"
        :type="store.type"
        :address="store.address"
        :schedule="store.schedule"
      />
    </div>
  </div>
</template>
<style scoped>
  .title-container {
    width: auto;
  }
  .btn-stores {
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