import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-app/',  // Замените "my-app" на имя вашего репозитория
  plugins: [react()],
})
