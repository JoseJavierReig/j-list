<script setup lang="ts">
  // Propiedades heredades
  interface Props {
    icon: string,
    title: string,
    description: string,
    color: string,
    subcategories: string,
    data: boolean
  }
  const props = defineProps<Props>()

  // Propiedades
  const emit = defineEmits(['editForm', 'deleteForm', 'navCategory']);

  // Metodos
  const editForm = () => {
    emit('editForm')
  }
  const deleteForm = () => {
    emit('deleteForm')
  }
  const navCategory = () => {
    emit('navCategory')
  }
  const getBorderColor = () => {
    return {
      borderLeft: `5px solid ${props.color}`
    }
  }

</script>
<template>
  <div 
    class="card-container-category simple-container"
    :style="getBorderColor()">
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
    <div class="vertical-end-container end-container clean-padding btn-container">
      <!-- Botón para acceder a la categoria -->
      <q-btn
        v-if="data"
        round
        flat
        icon="chevron_right"
        class="btn-icon-mini btn-icon-alter"
        @click="navCategory">
        <q-tooltip>Entrar en la categoría</q-tooltip>
      </q-btn>
        <!-- Botón para editar la categoría -->
      <q-btn
        round
        flat
        icon="edit"
        class="btn-icon-mini btn-icon-alter"
        @click="editForm">
        <q-tooltip>Editar la categoría</q-tooltip>
      </q-btn>
        <!-- Botón para eliminar la categoría -->
      <q-btn
        round
        flat
        icon="delete"
        class="btn-icon-mini btn-icon-alter"
        @click="deleteForm">
        <q-tooltip>Eliminar la categoría</q-tooltip>
      </q-btn>
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
            <q-item  v-if="data" clickable v-close-popup @click="navCategory">
              <q-item-section no-wrap>Entrar en la categoría</q-item-section>
            </q-item>
            <q-separator v-if="data" class="separator" />
            <q-item clickable v-close-popup @click="editForm">
              <q-item-section no-wrap>Editar la categoría</q-item-section>
            </q-item>
            <q-separator class="separator" />
            <q-item clickable v-close-popup @click="deleteForm">
              <q-item-section no-wrap>Eliminar la categoría</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<style scoped>
.card-container-category {
  flex: 1 1 calc(50% - 16px);
  min-width: 380px;
  background-color: var(--app-bg);
  border-radius: 10px;
  cursor: pointer;
}

.action-btn {
  display: none;
}
.icon-category {
  width: auto;
  max-height: fit-content;
  background-color: color-mix(in srgb, var(--primary) 20%, transparent);;
  padding: 17px;
  border-radius: 10px;
}
@media screen and (max-width: 768px) {
    .card-container-category {
      min-width: 310px;
    }
    .btn-container {
      display: none;
    }
    .action-btn {
      display: flex;
      position: absolute;
      right: 8px;
    }
}
</style>