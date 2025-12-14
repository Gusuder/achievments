import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://gusuder.github.io/achievments/
export default defineConfig({
  plugins: [react()],
  base: '/achievments/',
})
