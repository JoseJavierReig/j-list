<script setup lang="ts">
  interface Props {
    title: string,
    description: string
  }
  const props = defineProps<Props>()

</script>
<template>
  <div class="column-container vertical-center-container add-card-container">
    <!-- Botón para agregar -->
    <q-btn
      round
      icon="add"
      class="btn-icon" />
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
</style>