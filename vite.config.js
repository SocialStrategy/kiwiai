import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'local-energy': resolve(__dirname, 'local-energy-pitch.html')
      }
    }
  }
})
