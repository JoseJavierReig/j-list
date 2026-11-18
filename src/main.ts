import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router'

// Estilos de Quasar
import 'quasar/src/css/index.sass'

// Iconos
import '@quasar/extras/material-icons/material-icons.css'

// Estilos propios
import './assets/styles/index.css'

const app = createApp(App)

app.use(createPinia())

app.use(Quasar, {
  plugins: {}
})

app.use(router)

app.mount('#app')
