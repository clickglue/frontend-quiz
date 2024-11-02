import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: './index.html',
  },
  plugins: [react()],
  base: "/frontend-quiz/"
})
