<script setup lang="ts">
  // Vue
  import { ref, reactive } from 'vue';
  // Componentes
  import CardStore from '../components/CardStore.vue';
  // Modelos
  import type { StoreForm } from '../models/Store.ts'

  // Propiedades
  const search = ref('')
  const url1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLmz_pnYuWINdtsIopdXImiCqkN6OCVqCwZwN2hZyLArvtNId-1TtpA0&s=10'
  const url2 = 'https://i.pinimg.com/736x/66/bc/4e/66bc4e8d1482e6ec4525987c1691c83e.jpg'
  const url3 = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/AldiNord-WorldwideLogo.svg/1280px-AldiNord-WorldwideLogo.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail'
  const url4 = 'https://media.printables.com/media/prints/737685/images/5765405_a7258822-3e12-4c3d-80d0-a93eca2c2b4a_c0f967a3-1528-46e1-8b05-f2f25fe7c8ff/thumbs/inside/1280x960/png/thumbnail-2.webp'
  const stores = [
    {id: '1', name: 'Carrefour', type: { label: 'Hipermercado', value: 'hipermarket', icon: 'local_mall'}, imageUrl: url1, address: 'Calle 2', schedule: 'Lun - Dom: 9:00 - 22:00'},
    {id: '2', name: 'Mercadona', type: { label: 'Supermercado', value: 'supermarket', icon: 'shopping_cart'}, imageUrl: url2, address: 'Calle 2', schedule: 'Lun - Dom: 9:00 - 21:30'},
    {id: '3', name: 'Aldi', type: { label: 'Supermercado', value: 'supermarket', icon: 'shopping_cart'}, imageUrl: url3, address: 'Calle 2', schedule: 'Lun - Sab: 9:00 - 21:00'},
    {id: '4', name: 'Lidl', type: { label: 'Supermercado', value: 'supermarket', icon: 'shopping_cart'}, imageUrl: url4, address: 'Calle 2', schedule: 'Lun - Dom: 8:00 - 22:00'},
  ]
  const dialogs = reactive({
    addStore: false
  })
  const storeForm = reactive<StoreForm>({
    name: '',
    imageUrl: '',
    type: null,
    address: '',
    schedule: ''
  })
  const typesOptions = [
    { label: 'Tienda', value: 'store', icon: 'store'},
    { label: 'Supermercado', value: 'supermarket', icon: 'shopping_cart'},
    { label: 'Hipermercado', value: 'hipermarket', icon: 'local_mall'},
  ]
  const titleFormStore = ref('')
  const subtitleFormStore = ref('')

  // Métodos
  const cleanForm = () => {
    storeForm.name = ''
    storeForm.imageUrl = ''
    storeForm.type = null
    storeForm.address = ''
    storeForm.schedule = ''
  }
  const closeDialog = (dialog: keyof typeof dialogs) => {
    dialogs[dialog] = false
    cleanForm()
  }
  const openDialog = (dialog: keyof typeof dialogs) => {
    dialogs[dialog] = true
    titleFormStore.value = 'Agregar nueva tienda'
    subtitleFormStore.value = 'Introduce los datos de la nueva tienda.'
    cleanForm()
  }
  const editStore = (store: StoreForm) => {
    storeForm.name = store.name
    storeForm.imageUrl = store.imageUrl
    storeForm.type = store.type
    storeForm.address = store.address
    storeForm.schedule = store.schedule
    titleFormStore.value = 'Editar tienda'
    titleFormStore.value = 'Modifica los datos de esta tienda.'
    dialogs.addStore = true
  }
</script>
<template>
  <div class="view-container">
    <!-- Pop-up agregar categorias -->
    <q-dialog v-model="dialogs.addStore" persistent>
      <q-card>
        <!-- Cabecera de la card -->
        <q-card-section class="vertical-start-container">
          <div class="column-container">
            <h1 class="title">{{ titleFormStore }}</h1>
            <h2 class="subtitle">{{ subtitleFormStore }}</h2>
          </div>
          <q-space />
          <q-btn icon="close" flat round dense @click="closeDialog('addStore')" />
        </q-card-section>
        <!-- Contenido de la card -->
        <q-card-section class="column-container">
          <div class="column-container">
            <!-- Input de nombre -->
            <q-input v-model="storeForm.name" filled label="Nombre *">
            </q-input>
            <q-space />
            <!-- Input de imagen -->
            <q-input v-model="storeForm.imageUrl" filled label="Imagen de la subcategoría *">
              <template #prepend>
                <q-icon name="image" />
              </template>
            </q-input>
            <q-space />
            <!-- Selector de iconos -->
            <q-select
              filled
              v-model="storeForm.type" 
              :options="typesOptions"
              option-label="label"
              option-value="value"
              emit-value
              map-options
              label="Seleccionar icono *">
              <template #prepend>
                <q-icon :name="storeForm.type?.icon || 'category'" />
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
            <!-- Input de dirección -->
            <q-input v-model="storeForm.address" filled label="Dirección">
              <template #prepend>
                <q-icon name="location_on" />
              </template>
            </q-input>
            <q-space />
            <!-- Input de horario -->
            <q-input v-model="storeForm.schedule" filled label="Horario">
              <template #prepend>
                <q-icon name="schedule" />
              </template>
            </q-input>
            <q-space />
          </div>
        </q-card-section>
        <!-- Botones de acción -->
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" class="btn-icon-alter btn-base" @click="closeDialog('addStore')" />
          <q-btn flat label="Guardar" class="btn-icon btn-base" @click="closeDialog('addStore')" />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
          class="btn-icon"
          @click="openDialog('addStore')">
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
        @edit-store="editStore(store)"
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