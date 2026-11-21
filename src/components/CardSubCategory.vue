<script setup lang="ts">
  // Propiedades heredades
  interface Props {
    icon: string,
    title: string,
    description: string,
    products: string
  }
  const props = defineProps<Props>()

  // Propiedades
  const emit = defineEmits(['editSubcategory', 'deleteSubcategory']);

  // Metodos
  const editSubcategory = () => {
    emit('editSubcategory')
  }
  const deleteSubcategory = () => {
    emit('deleteSubcategory')
  }

</script>
<template>
  <div 
    class="card-container-subcategory simple-container">
    <!-- Sección de icono -->
    <div class="column-container icon-category">
      <q-icon :name="props.icon" class="icon-max" />
    </div>
    <!-- Información de la categoría -->
    <div class="column-container">
        <span class="title-card">{{ props.title }}</span>
        <span class="subtitle-card">{{ props.description }}</span>
        <!-- Subcategorías -->
        <div class="vertical-center-container clean-padding">
          <q-icon name="inventory_2" class="icon-mini" />
          <span> {{ props.products }} productos </span>
        </div>
    </div>
    <!-- Botones de acción para móvil -->
    <div class="action-btn">
      <q-btn
        round
        flat
        icon="more_vert"
        class="btn-icon-mini btn-icon-alter">
        <q-menu>
          <q-list role="menu" style="min-width: 100px">
            <q-item clickable v-close-popup @click="editSubcategory">
              <q-item-section no-wrap>Editar la categoría</q-item-section>
            </q-item>
            <q-separator class="separator" />
            <q-item clickable v-close-popup @click="deleteSubcategory">
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
.icon-category {
  width: auto;
  max-height: fit-content;
  background-color: color-mix(in srgb, var(--primary) 20%, transparent);;
  padding: 17px;
  border-radius: 10px;
}
@media screen and (max-width: 768px) {
    .card-container-subcategory {
      min-width: 310px;
    }
}
</style>