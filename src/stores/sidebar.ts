import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {

  // Estado
  const activated = ref(false)

  // Acciones
  const toggleSidebar = () => {
    activated.value = !activated.value
  }

  const setSidebar = (value: boolean) => {
    activated.value = value
  }

  return {
    activated,
    toggleSidebar,
    setSidebar
  }
})