import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use default base for Vercel (root '/')
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
