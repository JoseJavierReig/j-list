<script setup lang="ts">
  // Propiedades heredades
  interface Props {
    imageUrl: string,
    title: string,
    count: number,
    unit: string,
    brand: string
  }
  const props = defineProps<Props>()

  // Propiedades
  const emit = defineEmits(['editProduct', 'deleteProduct']);

  // Metodos
  const editProduct = () => {
    emit('editProduct')
  }
  const deleteProduct = () => {
    emit('deleteProduct')
  }

</script>
<template>
  <div 
    class="card-container-product simple-container">
    <!-- Sección de imagen -->
    <div class="column-container image-subcategory">
      <q-avatar rounded size="40px">
        <q-img
          :src="props.imageUrl"
          fit="cover"
        />
      </q-avatar>
    </div>
    <!-- Información del producto -->
    <div class="column-container">
        <span class="title-card-mini">{{ props.title }}</span>
        <div class="vertical-center-container clean-padding">
          <q-icon name="inventory" class="icon-mini" />
          <span> Stock {{ props.count }} {{ props.unit }} </span>
        </div>
    </div>
    <!-- Botones de acción para móvil -->
    <div class="action-btn">
      <q-btn
        round
        flat
        icon="more_vert"
        class="btn-icon-mini btn-icon-clean">
        <q-menu>
          <q-list role="menu" style="min-width: 100px">
            <q-item clickable v-close-popup @click="editProduct">
              <q-item-section no-wrap>Editar la producto</q-item-section>
            </q-item>
            <q-separator class="separator" />
            <q-item clickable v-close-popup @click="deleteProduct">
              <q-item-section no-wrap>Eliminar la producto</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<style scoped>
.card-container-product {
  flex: 1 1 calc(50% - 16px);
  max-width: 198px;
  background-color: var(--app-bg);
  border: 1px solid var(--text-primary);
  border-radius: 10px;
  cursor: pointer;
}

.action-btn {
  display: flex;
  position: absolute;
  right: 8px;
}
.image-subcategory {
  width: auto;
  max-height: fit-content;
}
@media screen and (max-width: 768px) {
    .card-container-product {
      min-width: 310px;
    }
}
</style>