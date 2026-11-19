<script setup lang="ts">
  interface Props {
    icon: string,
    title: string,
    value: string
  }
  const props = defineProps<Props>()

</script>
<template>
  <div class="card-container column-container">
    <!-- Sección de icono -->
    <q-icon :name="props.icon" size="20px" />
    <!-- Cabecera -->
    <span class="subtitle">{{ props.title }}</span>
    <!-- Valor -->
    <span class="title">{{ props.value }}</span>
  </div>
</template>

<style scoped>
.card-container {
  flex: 1 1 calc(50% - 16px);
  min-width: 300px;
  background-color: var(--app-bg);
  align-items: flex-start;
  border-radius: 10px;
}
</style>