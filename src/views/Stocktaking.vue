<script setup lang="ts">
  // Vue
  import { ref, reactive} from 'vue';
  // Componentes
  import HeaderView from '../components/HeaderView.vue';
  import ProductCard from '../components/ProductCard.vue';
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
    categoryId: '',
    subcategoryId: '',
    count: 0,
    unit: '',
    brand: ''
  })
  const url1 = 'https://kitchenacademy.es/wp-content/uploads/pollo.jpg'
  const url2 = 'https://media.pescoandgo.es/product/filete-de-merluza-con-piel-sin-escamas-2-unidades-de-300gr-800x800.jpg?width=1200'
  const url3 = 'https://huertadelperigall.com/wp-content/uploads/2022/04/Zanahoria-ecologica.png'
  const url4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFzVAGhKw0BJEsnu9TONuYrDpyBvj-GBQocGERRFJ1_w7svwwlB2AOlY&s=10'
  const url5 = 'https://images.ctfassets.net/qilztky7jpz1/5ecg58gMaxGjcxk62Jobng/b510b3b8a25a772a11f75fb894899be5/JNB_EMEA_PT_3574669907750_9432005_Baby_Shampoo_Gold_500ml_MOBILE.Jpg?fm=webp&w=3840'
  const products = [
    {name: 'Pollo', imageUrl: url1, categoryId: '1', subcategoryId: '1', count: 2, unit: '', brand: ''},
    {name: 'Pollo', imageUrl: url1, categoryId: '1', subcategoryId: '1', count: 2, unit: '', brand: ''},
    {name: 'Pollo', imageUrl: url1, categoryId: '1', subcategoryId: '1', count: 2, unit: '', brand: ''},
    {name: 'Pollo', imageUrl: url1, categoryId: '1', subcategoryId: '1', count: 2, unit: '', brand: ''},
    {name: 'Merluza', imageUrl: url2, categoryId: '1', subcategoryId: '2', count: 2, unit: 'kg', brand: ''},
    {name: 'Zanahoria', imageUrl: url3, categoryId: '1', subcategoryId: '3', count: 2, unit: '', brand: ''},
    {name: 'Trapo de microfibra', imageUrl: url4, categoryId: '2', subcategoryId: '4', count: 2, unit: '', brand: 'Hacendado'},
    {name: 'Champu', imageUrl: url5, categoryId: '3', subcategoryId: '', count: 2, unit: '', brand: 'Hacendado'},
  ]
  const categories = [
    {label: 'Alimentación', value: '1', icon: 'restaurant'},
    {label: 'Limpieza', value: '2', icon: 'cleaning_services'},
    {label: 'Higiene', value: '3', icon: 'medical_services'},
  ]
  const subcategories = [
    {label: 'Carne', value: '1', categoryId: '1'},
    {label: 'Pescado', value: '2', categoryId: '1'},
    {label: 'Verduras', value: '3', categoryId: '1'},
    {label: 'Trapos', value: '4', categoryId: '2'},
  ]

  const titleFormProduct = ref('')
  const subtitleFormProduct = ref('')

  // Métodos
  const cleanForm = () => {
    productForm.name = ''
    productForm.description = ''
    productForm.imageUrl = ''
    productForm.categoryId = ''
    productForm.subcategoryId = ''
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
    titleFormProduct.value = 'Agregar nuevo producto'
    subtitleFormProduct.value = 'Introduce los datos del producto.'
    cleanForm()
  }
  const getSubcategory = (id: string) => {
    return subcategories.filter(item => item.categoryId === id)
  }
  const getCategoryWithProducts = () => {
    return categories.filter(item => countProductsByCategory(item.value) > 0)
  }
  const getIconCategory = (id: string | null) => {
    return categories.find(item => item.value === id)?.icon
  }
  const getProductsBySubcategory = (id: string) => {
    return products.filter(item => item.subcategoryId === id)
  }
  const getProductsByCategory = (id: string) => {
    return products.filter(item => item.categoryId === id && item.subcategoryId === '')
  }
  const countProductsByCategory = (id: string) => {
    return products.filter(item => item.categoryId === id).length
  }
  const countProductsBySubcategory = (id: string) => {
    return products.filter(item => item.subcategoryId === id).length
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
            <q-input v-model="productForm.imageUrl" filled label="Imagen del producto *">
              <template #prepend>
                <q-icon name="image" />
              </template>
            </q-input>
            <q-space />
            <!-- Selector de categoría -->
            <q-select
              filled
              v-model="productForm.categoryId" 
              :options="categories"
              option-label="label"
              option-value="value"
              emit-value
              map-options
              label="Seleccionar categoría *">
              <template #prepend>
                <q-icon :name="getIconCategory(productForm.categoryId) || 'category'" />
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
              v-if="productForm.categoryId"
              filled
              clearable
              v-model="productForm.subcategoryId" 
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
    <HeaderView
      title="Inventario"
      subtitle="Consulta y controla las existencias de tus productos."
      icon="inventory_2"
      tooltip="Agregar producto"
      @open-add="openDialog('addProduct')" />
    <!-- Sección de busquedas -->
    <div class="simple-container">
      <!-- Input de busqueda -->
      <q-input filled class="cover-input" v-model="search" placeholder="Buscar tiendas...">
        <template #prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="column-container navigate-container">
      <!-- Contenedor de categoria -->
      <div
        v-for="categorie in getCategoryWithProducts()"
        class="vertical-container">
        <!-- Título de la categoría -->
        <div class="simple-container">
          <q-icon :name="categorie.icon" class="icon-base" />
          <h2 class="title">{{ categorie.label }}</h2>
          <q-chip
            :clickable="false"
            :ripple="false"
            class="chip-base">
            {{ countProductsByCategory(categorie.value) }} 
            <label v-if="countProductsByCategory(categorie.value) === 1">
              &nbsp;Producto
            </label>
            <label v-else>&nbsp;Productos</label>
          </q-chip>
        </div>
        <q-separator class="separator" />
        <!-- Contenedor de subcategorias de cada categoria-->
        <div
          v-for="subcategorie in getSubcategory(categorie.value)"
          class="vertical-container">
          <!-- Título de la subcategoría -->
          <div class="simple-container">
            <h2 class="title">{{ subcategorie.label }}</h2>
            <q-chip
              :clickable="false"
              :ripple="false"
              class="chip-base">
              {{ countProductsBySubcategory(subcategorie.value) }}
              <label v-if="countProductsBySubcategory(subcategorie.value) === 1">
                &nbsp;Producto
              </label>
              <label v-else>&nbsp;Productos</label>
            </q-chip>
          </div>
          <div class="simple-container wraped-container">
            <ProductCard
              v-for="product in getProductsBySubcategory(subcategorie.value)"
              :title="product.name"
              :image-url="product.imageUrl"
              :count="product.count"
              :unit="product.unit"
              :brand="product.brand" />
          </div>
        </div>
        <!-- Contenedor de productos sin subcategoria -->
        <div
          v-if="getProductsByCategory(categorie.value)"
          class="simple-container wraped-container">
          <ProductCard
            v-for="product in getProductsByCategory(categorie.value)"
            :title="product.name"
            :image-url="product.imageUrl"
            :count="product.count"
            :unit="product.unit"
            :brand="product.brand" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .cover-input {
    width: 100%;
  }
  .cover-input :deep(.q-field__control) {
    border-radius: 10px;
    overflow: hidden;
  }
</style>