import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Single SPA serving two portfolio cases via client-side routing:
// /flavour-case and /ssh-key-case (see src/main.tsx). Base stays '/' so
// bundled assets resolve the same regardless of which case route is active.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
