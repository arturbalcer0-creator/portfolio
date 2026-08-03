import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served under /flavour-case as one case of the artur-b-portfolio site.
export default defineConfig({
  base: '/flavour-case/',
  plugins: [react()],
  build: {
    outDir: 'dist/flavour-case',
  },
})
