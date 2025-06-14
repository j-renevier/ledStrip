import path from 'path'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// Mode d'environnement
const isArduinoBuild = process.env.ARDUINO_BUILD === 'true'
const outDir = isArduinoBuild
  ? path.resolve(__dirname, '../arduino/data')
  : 'dist'

export default defineConfig({
  plugins: [
    preact(),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  build: {
    outDir,
    emptyOutDir: true
  }
})
