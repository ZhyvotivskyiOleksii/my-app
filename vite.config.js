import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-app/',  // Убедитесь, что это соответствует пути развертывания
  plugins: [react()],
});
