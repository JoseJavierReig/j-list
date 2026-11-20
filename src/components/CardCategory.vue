<script setup lang="ts">
  interface Props {
    icon: string,
    title: string,
    description: string,
    subcategories: number
  }
  const props = defineProps<Props>()

</script>
<template>
  <div class="card-container-catalog simple-container">
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
          <q-icon name="layers" class="icon-mini" />
          <span> {{ props.subcategories }} subcategorías </span>
        </div>
    </div>
    <!-- Botones de acción -->
    <div class="vertical-end-container end-container clean-padding">
      <!-- Botón para acceder a la categoria -->
      <q-btn
        round
        flat
        icon="chevron_right"
        class="btn-icon-mini btn-icon-alter">
        <q-tooltip>Entrar en la categoría</q-tooltip>
      </q-btn>
        <!-- Botón para editar la categoría -->
      <q-btn
        round
        flat
        icon="edit"
        class="btn-icon-mini btn-icon-alter">
        <q-tooltip>Editar la categoría</q-tooltip>
      </q-btn>
        <!-- Botón para eliminar la categoría -->
      <q-btn
        round
        flat
        icon="delete"
        class="btn-icon-mini btn-icon-alter">
        <q-tooltip>Eliminar la categoría</q-tooltip>
      </q-btn>
    </div>
  </div>
</template>

<style scoped>
.card-container-catalog {
  flex: 1 1 calc(50% - 16px);
  min-width: 425px;
  background-color: var(--app-bg);
  border-radius: 10px;
  cursor: pointer;
}
.card-container-catalog:hover {
  transform: translateY(-3px);
  transform: translateX(3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.icon-category {
  width: auto;
  max-height: fit-content;
  background-color: color-mix(in srgb, var(--primary) 20%, transparent);;
  padding: 17px;
  border-radius: 10px;
}
</style>