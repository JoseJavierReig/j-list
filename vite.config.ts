import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  base: '/j-list/',
  plugins: [
    vue({
      template: {
        transformAssetUrls
      }
    }),
    quasar()
  ]
})