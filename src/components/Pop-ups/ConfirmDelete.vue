<script setup lang="ts">
  // Propiedades heredades
  interface Props {
    title: string,
    subtitle: string,
    dialog: boolean,
  }
  const props = defineProps<Props>()

  // Propiedades
  const emit = defineEmits(['closeDialog']);

  // Metodos
  const closeDialog = () => {
    emit('closeDialog')
  }
</script>
<template>
  <q-dialog v-model="props.dialog" persistent>
    <q-card>
      <!-- Cabecera de la card -->
      <q-card-section class="vertical-start-container">
        <div class="column-container">
          <h1 class="title">{{ props.title }}</h1>
          <h2 class="subtitle">{{ props.subtitle }}</h2>
        </div>
        <q-space />
        <q-btn icon="close" flat round dense @click="closeDialog" />
      </q-card-section>
      <!-- Botones de acción -->
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" class="btn-icon-alter btn-base" @click="closeDialog" />
        <q-btn label="Eliminar" class="btn-base" color="negative" @click="closeDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>