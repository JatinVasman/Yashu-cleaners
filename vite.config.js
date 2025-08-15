import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to GitHub Pages at https://JatinVasman.github.io/Yashu-cleaners
  // set base to the repo name so assets resolve correctly in production.
  base: '/Yashu-cleaners/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
