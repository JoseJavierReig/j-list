<script setup lang="ts">
  // Propiedades heredadas
  interface Props {
    title: string,
    description: string
  }
  const props = defineProps<Props>()

  // Propiedades
  const emit = defineEmits(['openAdd']);

  // Metodos
  const openAddDialog = () => {
    emit('openAdd')
  }
</script>
<template>
  <div class="column-container vertical-center-container add-card-container">
    <!-- Botón para agregar -->
    <q-btn
      round
      icon="add"
      class="btn-icon"
      @click="openAddDialog" />
    <!-- Título y subtítulo -->
    <span class="title-card">{{ props.title }}</span>
    <span class="subtitle-card">{{ props.description }}</span>
  </div>
</template>
<style scoped>
.add-card-container {
  flex: 1 1 calc(50% - 16px);
  min-width: 380px;
  border-radius: 10px;
  border: 1px dashed var(--secondary);
}
@media screen and (max-width: 768px) {
  .add-card-container {
    min-width: 310px;
  }
}
</style>