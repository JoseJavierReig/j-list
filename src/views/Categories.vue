<script setup lang="ts">
// Componenetes
import CardCategory from '../components/CardCategory.vue';
import AddCard from '../components/AddCard.vue'

// Propiedades
const categories = [
  {title: 'Productos', description: 'descripcion general', icon: 'category', subcategories: '0'},
  {title: 'Stock', description: 'descripcion general', icon: 'store', subcategories: '0'},
  {title: 'Por Comprar', description: 'descripcion general', icon: 'shopping_cart', subcategories: '0'},
]
</script>
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
    <!-- Sección de cards -->
    <div class="simple-container wraped-container">
      <Card-category
        v-for="category in categories"
        :icon="category.icon"
        :title="category.title"
        :description="category.description"
        :subcategories="category.subcategories" />
      <Add-card
        title="Nueva categoría"
        description="Añade una nueva categoría para organizar tus productos." />
    </div>
  </div>
</template>
<style scoped>
  .btn-categories {
    width: auto;
  }
</style>