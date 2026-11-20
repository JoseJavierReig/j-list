<script setup lang="ts">
  // Vue
  import { reactive } from 'vue'
  // Componenetes
  import CardCategory from '../components/CardCategory.vue';
  import AddCard from '../components/AddCard.vue'

  // Propiedades
  const categories = [
    {title: 'Productos', description: 'descripcion general', icon: 'category', subcategories: '0'},
    {title: 'Stock', description: 'descripcion general', icon: 'store', subcategories: '0'},
    {title: 'Por Comprar', description: 'descripcion general', icon: 'shopping_cart', subcategories: '0'},
  ]
  const dialogs = reactive({
    addCatalog: false
  })
  const addForm = reactive({
    name: '',
    description: '',
    icon: '',
    color: '#43A047'
  })
  const icons = [
    {label: 'Home', value: 'home'},
    {label: 'Restaurant', value: 'restaurant'},
    {label: 'Checkroom', value: 'checkroom'},
    {label: 'Cleaning services', value: 'cleaning_services'},
    {label: 'Pets', value: 'pets'},
    {label: 'Medical services', value: 'medical_services'},
    {label: 'Devices', value: 'devices'},
    {label: 'Sports esports', value: 'sports_esports'},
    {label: 'Redeem', value: 'redeem'},
    {label: 'Fitness center', value: 'fitness_center'},
    {label: 'Menu book', value: 'menu_book'},
    {label: 'Flight', value: 'flight'},
    {label: 'Directions bus', value: 'directions_bus'},
    {label: 'Coffee', value: 'coffee'},
    {label: 'Eco', value: 'eco'},
    {label: 'Favorite', value: 'favorite'},
    {label: 'Category', value: 'category'},
  ]
  const colors = [
    '#43A047', // Verde
    '#8BC34A', // Verde lima
    '#009688', // Turquesa
    '#00BCD4', // Cian
    '#2196F3', // Azul
    '#3F51B5', // Índigo
    '#673AB7', // Violeta
    '#9C27B0', // Púrpura
    '#E91E63', // Rosa
    '#F44336', // Rojo
    '#FF5722', // Naranja intenso
    '#FF9800', // Naranja
    '#FFC107', // Ámbar
    '#FFEB3B', // Amarillo
    '#795548', // Marrón
    '#607D8B', // Azul grisáceo
    '#EC407A', // Rosa intenso
    '#26A69A'  // Verde azulado
  ]
</script>
<template>
  <div class="view-container">
    <!-- Pop-up agregar categorias -->
    <q-dialog v-model="dialogs.addCatalog" persistent>
      <q-card>
        <!-- Cabecera de la card -->
        <q-card-section class="vertical-start-container">
          <div class="column-container">
            <h1 class="title">Nueva categoría</h1>
            <h2 class="subtitle">Introduce los datos de la nueva categoría.</h2>
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <!-- Contenido de la card -->
        <q-card-section class="column-container">
          <div class="column-container">
            <!-- Input de nombre -->
            <q-input v-model="addForm.name" filled label="Nombre *">
            </q-input>
            <q-space />
            <!-- Input de descripción -->
            <q-input type="textarea" v-model="addForm.description" filled label="Descripción opcional... ">
            </q-input>
            <q-space/>
            <!-- Selector de iconos -->
            <q-select
              filled
              v-model="addForm.icon" 
              :options="icons"
              option-label="label"
              option-value="value"
              emit-value
              map-options
              label="Seleccionar icono">
              <template #prepend>
                <q-icon :name="addForm.icon || 'category'" />
              </template>
              <template #option="scope">
                <q-item v-bind="scope.itemProps">
                  <q-item-section avatar>
                    <q-icon :name="scope.opt.value" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ scope.opt.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-space/>
            <!-- Color picker -->
            <div class="vertical-center-container">
              <span class="title-input">Seleccionar color: </span>
              <q-btn
                round
                unelevated
                :style="{ backgroundColor: addForm.color }"
                icon="palette"
                :color="addForm.color">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-color
                    v-model="addForm.color"
                    format-model="hex"
                    default-view="palette"
                    :palette="colors"
                  />
                </q-popup-proxy>
              </q-btn>
            </div>
          </div>
        </q-card-section>
        <!-- Botones de acción -->
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" class="btn-icon-alter btn-base" v-close-popup />
          <q-btn flat label="Guardar" class="btn-icon btn-base" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
          class="btn-icon"
          @click="dialogs.addCatalog = true">
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
        description="Añade una nueva categoría para organizar tus productos."
        @open-add="dialogs.addCatalog = true" />
    </div>
  </div>
</template>
<style scoped>
  .btn-categories {
    width: auto;
  }
</style>