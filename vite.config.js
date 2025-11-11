import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        werkwijze: resolve(__dirname, 'werkwijze.html'),
        celzouttherapie: resolve(__dirname, 'celzouttherapie.html'),
        fytotherpie: resolve(__dirname, 'fytotherpie.html'),
        bachboesemtherapie: resolve(__dirname, 'bachboesemtherapie.html'),
        voeding: resolve(__dirname, 'voeding.html'),
        orthomoleculaire: resolve(__dirname, 'orthomocleculaire-therapie.html'),
        iriscopie: resolve(__dirname, 'iriscopie.html'),
        electro: resolve(__dirname, 'electro-acupunctuur.html'),
        meridianen: resolve(__dirname, 'meridianen.html'),
        overmijzelf: resolve(__dirname, 'over-mijzelf.html'),
        kosten: resolve(__dirname, 'kosten.html'),
        contact: resolve(__dirname, 'contact.html'),
        klachten: resolve(__dirname, 'klachten.html'),
      }
    }
  }
})
