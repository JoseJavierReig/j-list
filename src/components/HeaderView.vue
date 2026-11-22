<script setup lang="ts">
  // Propiedades heredadas
  interface Props {
    title: string,
    subtitle: string,
    icon: string,
    count?: string,
    chip?: string,
    tooltip: string,
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
  <div class="separator-container wraped-container">
    <div class="simple-container title-container">
      <q-icon :name="props.icon" class="icon-max" />
      <div class="vertical-container">
        <h1 class="title">{{ props.title }}</h1>
        <h2 class="subtitle">{{ props.subtitle }}</h2>
      </div>
    </div>
    <div class="btn-container vertical-center-container">
      <q-chip
        v-if="props.chip"
        :clickable="false"
        :ripple="false"
        class="chip-base">
        {{ props.count }} {{ props.chip }}
      </q-chip>
      <q-btn
        round
        icon="add"
        class="btn-icon"
        @click="openAddDialog">
        <q-tooltip>{{ props.tooltip }}</q-tooltip>
      </q-btn>
    </div>
  </div>
</template>
<style scoped>
  .title-container {
    width: auto;
  }
  .btn-container {
    width: auto;
    max-width: 200px;
  }
</style>