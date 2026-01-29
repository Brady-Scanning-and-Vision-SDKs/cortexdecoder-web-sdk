import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: (assetInfo) => {
  //         // Keep other assets in the `assets` folder
  //         return assetInfo.name && assetInfo.name.endsWith('.wasm')
  //           ? '[name].[ext]' // Places `.wasm` files in the root of `dist`
  //           : 'assets/[name].[hash].[ext]';
  //       }
  //     }
  //   }
  // }
})
