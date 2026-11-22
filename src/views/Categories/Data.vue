<script setup lang="ts">
  // Vue
  import { reactive, ref } from 'vue'
  // Componenetes
  import CardCategory from '../../components/CardCategory.vue';
  import CardSubCategory from '../../components/CardSubCategory.vue';
  import ConfirmDelete from '../../components/Pop-ups/ConfirmDelete.vue';
  // Modelos
  import type { Category } from '../../models/Category.ts';
  import type { Subcategory } from '../../models/Subcategory.ts';

  // Propiedades
  const url1 = 'https://media.istockphoto.com/id/505207430/es/foto/mariscos-frescos-y-bistecs-de-carne-de-res.jpg?s=612x612&w=0&k=20&c=UKxPwxvPUlDgh0U5byXg1RX1_egoBJOgUi9bii_jdRI='
  const url2 = 'https://opercebeiro.com/wp-content/uploads/nc/catalog/besugo.jpg'
  const url3 = 'https://www.nutricionvitoria.com/wp-content/uploads/2021/06/verduras-y-hortalizas.jpg'
  const subcategories = [
    {id: '1', name: 'Carne', description: 'descripcion general', imageUrl: url1, products: '0'},
    {id: '2', name: 'Pescado', description: 'descripcion general', imageUrl: url2, products: '0'},
    {id: '3', name: 'Verduras', description: 'descripcion general', imageUrl: url3, products: '0'},
  ]
  const category = {id: '1', name: 'Alimentación', description: 'descripcion general', icon: 'restaurant', subcategories: '3', color: '#43a047'}
  const dialogs = reactive({
    addSubcategory: false,
    addCategory: false,
    confirmDeleteCategory: false,
    confirmDeleteSubcategory: false,
  })
  const categoryForm = reactive({
    name: '',
    description: '',
    icon: '',
    color: '#43A047'
  })
  const subcategoryForm = reactive({
    name: '',
    description: '',
    imageUrl: '',
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

  const titleFormSubcategory = ref('')
  const subtitleFormSubcategory = ref('')
  // Métodos
  const cleanForm = () => {
    subcategoryForm.name = ''
    subcategoryForm.description = ''
    subcategoryForm.imageUrl = ''
  }
  const closeDialog = (dialog: keyof typeof dialogs) => {
    dialogs[dialog] = false
    cleanForm()
  }
  const openDialog = (dialog: keyof typeof dialogs) => {
    dialogs[dialog] = true
    titleFormSubcategory.value = 'Nueva subcategoría'
    subtitleFormSubcategory.value = 'Introduce los datos de la nueva subcategoría.'
    cleanForm()
  }
  const deleteCategory = (category: Category) => {
    console.log(category)
    dialogs.confirmDeleteCategory = true
  }
  const deleteSubcategory = (subcategory: Subcategory) => {
    console.log(subcategory)
    dialogs.confirmDeleteSubcategory = true
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
  const editSubcategory = (subcategory: Subcategory) => {
    subcategoryForm.name = subcategory.name
    subcategoryForm.description = subcategory.description
    titleFormSubcategory.value = 'Editar subcategoría'
    subtitleFormSubcategory.value = 'Modifica los datos de esta subcategoría.'
    dialogs.addSubcategory = true
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
    <!-- Pop-up agregar subcategorias -->
    <q-dialog v-model="dialogs.addSubcategory" persistent>
      <q-card>
        <!-- Cabecera de la card -->
        <q-card-section class="vertical-start-container">
          <div class="column-container">
            <h1 class="title">{{ titleFormSubcategory }}</h1>
            <h2 class="subtitle">{{ subtitleFormSubcategory }}</h2>
          </div>
          <q-space />
          <q-btn icon="close" flat round dense @click="closeDialog('addSubcategory')" />
        </q-card-section>
        <!-- Contenido de la card -->
        <q-card-section class="column-container">
          <div class="column-container">
            <!-- Input de nombre -->
            <q-input v-model="subcategoryForm.name" filled label="Nombre *">
            </q-input>
            <q-space />
            <!-- Input de descripción -->
            <q-input type="textarea" v-model="subcategoryForm.description" filled label="Descripción opcional... ">
            </q-input>
            <q-space/>
            <!-- Input de imagen -->
            <q-input v-model="subcategoryForm.imageUrl" filled label="Imagen de la subcategoría *">
              <template #prepend>
                <q-icon name="image" />
              </template>
            </q-input>
          </div>
        </q-card-section>
        <!-- Botones de acción -->
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" class="btn-icon-alter btn-base" @click="closeDialog('addSubcategory')" />
          <q-btn flat label="Guardar" class="btn-icon btn-base" @click="closeDialog('addSubcategory')" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- Pop-up confirmar borrado catálogo-->
    <Confirm-delete
      title="Eliminar categoría"
      subtitle="¿Estas seguro de querer eliminar esta categoría?"
      :dialog="dialogs.confirmDeleteCategory"
      @close-dialog="closeDialog('confirmDeleteCategory')" />
    <!-- Pop-up confirmar borrado subcatálogo -->
    <Confirm-delete
      title="Eliminar subcategoría"
      subtitle="¿Estas seguro de querer eliminar esta subcategoría?"
      :dialog="dialogs.confirmDeleteSubcategory"
      @close-dialog="closeDialog('confirmDeleteSubcategory')" />
    <!-- Miga de pan -->
    <div class="card-container">
      <q-breadcrumbs>
        <q-breadcrumbs-el class="breadCrumbs-base" label="Categorías" icon="sell" to="/categories" />
        <q-breadcrumbs-el label="Alimentación" icon="restaurant" />
      </q-breadcrumbs>
    </div>
    <!-- Card de categoría -->
    <div class="simple-container clean-padding-side">
      <Card-category
        icon="restaurant"
        title="Alimentación"
        description="descripcion general"
        color="#43a047"
        subcategories="3"
        :data="false"
        @delete-form="deleteCategory(category)"
        @edit-form="editCategory(category)"
      />
    </div>
    <!-- Sección subcategorías -->
    <div class="column-container card-container ">
       <!-- Cabecera -->
      <div class="separator-container">
        <div class="vertical-center-container clean-padding">
          <q-icon name="layers" size="28px" />
          <h1 class="title">Subcategorías</h1>
        </div>
        <q-btn
          round
          icon="add"
          class="btn-icon"
          @click="openDialog('addSubcategory')">
          <q-tooltip>Nueva subcategoría</q-tooltip>
        </q-btn>
      </div>
      <!-- Sección de cards -->
      <div class="simple-container wraped-container">
        <Card-sub-category
          v-for="subcategory in subcategories"
          :imageUrl="subcategory.imageUrl"
          :title="subcategory.name"
          :description="subcategory.description"
          :products="subcategory.products"
          @delete-subcategory="deleteSubcategory(subcategory)"
          @edit-subcategory="editSubcategory(subcategory)"
        />
      </div>
    </div>
  </div>
</template>