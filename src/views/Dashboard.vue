<script setup lang="ts">
// Componentes
import Card from '../components/Card.vue'

// Propiedades
const simpleCards = [
  {title: 'Productos', value: '125', icon: 'category', name: 'products'},
  {title: 'Stock', value: '8', icon: 'store', name: 'stock'},
  {title: 'Por Comprar', value: '12', icon: 'shopping_cart', name: 'cart'},
  {title: 'Gasto Mensual', value: '245 €', icon: 'account_balance_wallet', name: 'wallet'},
]
</script>
<template>
  <div class="view-container">
    <!-- Cabecera de Dashboard -->
     <div class="separator-container wraped-container">
      <div class="vertical-container">
        <h1 class="title">Buenos días</h1>
        <h2 class="subtitle">Este es el resumen de tu hogar</h2>
      </div>
    </div>
    <!-- Contenedor de cards simples -->
    <div class="simple-container wraped-container">
      <Card 
        v-for="simpleCard in simpleCards"
        :icon="simpleCard.icon"
        :value="simpleCard.value"
        :title="simpleCard.title"
        />
    </div>
  </div>
</template>