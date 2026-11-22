<script setup lang="ts">
  // Vue
  import { ref, reactive } from 'vue';
  // Modelos
  import type { Stocktaking } from '../models/Stocktaking.ts';

  // Propiedades
  const search = ref('')
  const dialogs = reactive({
    addProduct: false,
    confirmDeleteStore: false,
  })
  const productForm = reactive<Stocktaking>({
    name: '',
    description: '',
    imageUrl: '',
    category: null,
    subcategory: null,
    count: 0,
    unit: '',
    brand: ''
  })
  const categories = [
    {label: 'Alimentación', value: '1', icon: 'restaurant'},
    {label: 'Limpieza', value: '2', icon: 'cleaning_services'},
    {label: 'Higiene', value: '3', icon: 'medical_services'},
  ]
  const subcategories = [
    {label: 'Carne', value: '1', categoryId: '1'},
    {label: 'Pescado', value: '2', categoryId: '1'},
    {label: 'Verduras', value: '3', categoryId: '1'}
  ]

  const titleFormProduct = ref('')
  const subtitleFormProduct = ref('')

  // Métodos
  const cleanForm = () => {
    productForm.name = ''
    productForm.description = ''
    productForm.imageUrl = ''
    productForm.category = null
    productForm.subcategory = null
    productForm.count = 0
    productForm.unit = ''
    productForm.brand = ''
  }
  const closeDialog = (dialog: keyof typeof dialogs) => {
    dialogs[dialog] = false
    cleanForm()
  }
  const openDialog = (dialog: keyof typeof dialogs) => {
    dialogs[dialog] = true
    titleFormProduct.value = 'Agregar nueva tienda'
    subtitleFormProduct.value = 'Introduce los datos de la nueva tienda.'
    cleanForm()
  }
</script>
<template>
  <div class="view-container">
    <!-- Pop-up agregar tiendas -->
    <q-dialog v-model="dialogs.addProduct" persistent>
      <q-card>
        <!-- Cabecera de la card -->
        <q-card-section class="vertical-start-container">
          <div class="column-container">
            <h1 class="title">{{ titleFormProduct }}</h1>
            <h2 class="subtitle">{{ subtitleFormProduct }}</h2>
          </div>
          <q-space />
          <q-btn icon="close" flat round dense @click="closeDialog('addProduct')" />
        </q-card-section>
        <!-- Contenido de la card -->
        <q-card-section class="column-container">
          <div class="column-container">
            <!-- Input de nombre -->
            <q-input v-model="productForm.name" filled label="Nombre *">
            </q-input>
            <q-space />
            <!-- Input de descripción -->
            <q-input type="textarea" v-model="productForm.description" filled label="Descripción opcional... ">
            </q-input>
            <q-space/>
            <!-- Input de imagen -->
            <q-input v-model="productForm.imageUrl" filled label="Imagen de la subcategoría *">
              <template #prepend>
                <q-icon name="image" />
              </template>
            </q-input>
            <q-space />
            <!-- Selector de categoría -->
            <q-select
              filled
              v-model="productForm.category" 
              :options="categories"
              option-label="label"
              option-value="value"
              emit-value
              map-options
              label="Seleccionar categoría *">
              <template #prepend>
                <q-icon :name="productForm.category?.icon || 'category'" />
              </template>
              <template #option="scope">
                <q-item v-bind="scope.itemProps">
                  <q-item-section avatar>
                    <q-icon :name="scope.opt.icon" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ scope.opt.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <q-space />
            <!-- Selector de subcategoría -->
            <q-select
              v-if="productForm.category"
              filled
              clearable
              v-model="productForm.subcategory" 
              :options="subcategories"
              option-label="label"
              option-value="value"
              emit-value
              map-options
              label="Seleccionar subcategoría ">
              <template #prepend>
                <q-icon name="layers" />
              </template>
            </q-select>
            <q-space />
            <!-- Input de unidad -->
            <q-input v-model="productForm.count" min="0" type="number" filled label="Cantidad">
            </q-input>
            <q-space />
            <!-- Input de unidad -->
            <q-input v-model="productForm.unit" filled label="Unidad">
            </q-input>
            <q-space />
            <!-- Input de marca -->
            <q-input v-model="productForm.brand" filled label="Marca">
            </q-input>
            <q-space />
          </div>
        </q-card-section>
        <!-- Botones de acción -->
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" class="btn-icon-alter btn-base" @click="closeDialog('addProduct')" />
          <q-btn flat label="Guardar" class="btn-icon btn-base" @click="closeDialog('addProduct')" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
          class="btn-icon"
          @click="openDialog('addProduct')">
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