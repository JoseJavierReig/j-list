<script setup lang="ts">
  // Vue
  import { reactive, ref } from 'vue'
  // Router
  import { useRouter } from 'vue-router'
  // Componenetes
  import CardCategory from '../../components/CardCategory.vue';
  import AddCard from '../../components/AddCard.vue'
  import ConfirmDelete from '../../components/Pop-ups/ConfirmDelete.vue';
  import HeaderView from '../../components/HeaderView.vue';
  // Modelos
  import type { Category } from '../../models/Category.ts';

  // Propiedades
  const router = useRouter()
  const categories = [
    {id: '1', name: 'Alimentación', description: 'descripcion general', icon: 'restaurant', subcategories: '3', color: '#43a047'},
    {id: '2', name: 'Limpieza', description: 'descripcion general', icon: 'cleaning_services', subcategories: '0', color: '#ffeb3b'},
    {id: '3', name: 'Higiene', description: 'descripcion general', icon: 'medical_services', subcategories: '0', color: '#ff5722'},
  ]
  const dialogs = reactive({
    addCategory: false,
    confirmDelete: false
  })
  const categoryForm = reactive({
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
  const titleFormCategory = ref('')
  const subtitleFormCategory = ref('')
  // Métodos
  const cleanForm = () => {
    categoryForm.name = ''
    categoryForm.description = ''
    categoryForm.icon = ''
    categoryForm.color = '#43A047'
  }
  const closeDialog = (dialog: keyof typeof dialogs) => {
    dialogs[dialog] = false
    cleanForm()
  }
  const openDialog = (dialog: keyof typeof dialogs) => {
    dialogs[dialog] = true
    titleFormCategory.value = 'Nueva categoría'
    subtitleFormCategory.value = 'Introduce los datos de la nueva categoría.'
    cleanForm()
  }
  const editCategory = (category: Category) => {
    categoryForm.name = category.name
    categoryForm.description = category.description
    categoryForm.icon = category.icon
    categoryForm.color = category.color
    titleFormCategory.value = 'Editar categoría'
    subtitleFormCategory.value = 'Modifica los datos de esta categoría.'
    dialogs.addCategory = true
  }
  const deleteCategory = (category: Category) => {
    console.log(category)
    dialogs.confirmDelete = true
  }
  const navigateToCategory = (id: string) => {
    console.log('Entra en la categoria')
    router.push({
    name: 'category_data',
    params: {
      id
    }
  })
  }
</script>
<template>
  <div class="view-container">
    <!-- Pop-up agregar categorias -->
    <q-dialog v-model="dialogs.addCategory" persistent>
      <q-card>
        <!-- Cabecera de la card -->
        <q-card-section class="vertical-start-container">
          <div class="column-container">
            <h1 class="title">{{ titleFormCategory }}</h1>
            <h2 class="subtitle">{{ subtitleFormCategory }}</h2>
          </div>
          <q-space />
          <q-btn icon="close" flat round dense @click="closeDialog('addCategory')" />
        </q-card-section>
        <!-- Contenido de la card -->
        <q-card-section class="column-container">
          <div class="column-container">
            <!-- Input de nombre -->
            <q-input v-model="categoryForm.name" filled label="Nombre *">
            </q-input>
            <q-space />
            <!-- Input de descripción -->
            <q-input type="textarea" v-model="categoryForm.description" filled label="Descripción opcional... ">
            </q-input>
            <q-space/>
            <!-- Selector de iconos -->
            <q-select
              filled
              v-model="categoryForm.icon" 
              :options="icons"
              option-label="label"
              option-value="value"
              emit-value
              map-options
              label="Seleccionar icono">
              <template #prepend>
                <q-icon :name="categoryForm.icon || 'category'" />
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
                :style="{ backgroundColor: categoryForm.color }"
                icon="palette"
                :color="categoryForm.color">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-color
                    v-model="categoryForm.color"
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
          <q-btn flat label="Cancelar" class="btn-icon-alter btn-base" @click="closeDialog('addCategory')" />
          <q-btn flat label="Guardar" class="btn-icon btn-base" @click="closeDialog('addCategory')" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- Pop-up confirmar borrado -->
    <Confirm-delete
      title="Eliminar categoría"
      subtitle="¿Estas seguro de querer eliminar esta categoría?"
      :dialog="dialogs.confirmDelete"
      @close-dialog="closeDialog('confirmDelete')" />
    <!-- Cabecera de Categorías -->
    <HeaderView 
      title="Categorías"
      subtitle="Organiza tus productos por categorías y subcategorías."
      icon="sell"
      count="3"
      chip="categorías"
      tooltip="Nueva categoría"
      @open-add="openDialog('addCategory')" />
    <!-- Sección de cards -->
    <div class="simple-container wraped-container">
      <!-- Cards de categorías -->
      <Card-category
        v-for="category in categories"
        :icon="category.icon"
        :title="category.name"
        :description="category.description"
        :color="category.color"
        :subcategories="category.subcategories"
        :data="true"
        @edit-form="editCategory(category)"
        @delete-form="deleteCategory(category)"
        @nav-category="navigateToCategory(category.id)" />
      <!-- Card de agregación -->
      <Add-card
        title="Nueva categoría"
        description="Añade una nueva categoría para organizar tus productos."
        @open-add="openDialog('addCategory')" />
    </div>
  </div>
</template>
<style scoped>
  .card-container-category:hover {
    transform: translateY(-3px);
    transform: translateX(3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
</style>