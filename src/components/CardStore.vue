<script setup lang="ts">
  // Propiedades heredades
  interface Props {
    imageUrl: string,
    title: string,
    type: string,
    address: string,
    schedule: string,
  }
  const props = defineProps<Props>()

  // Propiedades
  const emit = defineEmits(['editStore', 'deleteStore']);

  // Metodos
  const editStore = () => {
    emit('editStore')
  }
  const deleteStore = () => {
    emit('deleteStore')
  }

</script>
<template>
  <div 
    class="card-container-subcategory simple-container">
    <!-- Sección de icono -->
    <div class="column-container image-subcategory">
      <!-- <q-icon :name="props.icon" class="icon-max" /> -->
      <q-avatar rounded size="120px">
        <q-img
          :src="props.imageUrl"
          fit="cover"
        />
      </q-avatar>
    </div>
    <!-- Información de la categoría -->
    <div class="column-container">
        <span class="title-card">{{ props.title }}</span>
        <!-- Información de la tienda -->
        <div class="vertical-center-container clean-padding">
          <q-icon name="shopping_cart" class="icon-mini" />
          <span> {{ props.type }} </span>
        </div>
        <div class="vertical-center-container clean-padding">
          <q-icon name="location_on" class="icon-mini" />
          <span> {{ props.address }} </span>
        </div>
        <div class="vertical-center-container clean-padding">
          <q-icon name="schedule" class="icon-mini" />
          <span> {{ props.schedule }} </span>
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
            <q-item clickable v-close-popup @click="editStore">
              <q-item-section no-wrap>Editar la categoría</q-item-section>
            </q-item>
            <q-separator class="separator" />
            <q-item clickable v-close-popup @click="deleteStore">
              <q-item-section no-wrap>Eliminar la categoría</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<style scoped>
.card-container-subcategory {
  flex: 1 1 calc(50% - 16px);
  min-width: 380px;
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
    .card-container-subcategory {
      min-width: 310px;
    }
}
</style>