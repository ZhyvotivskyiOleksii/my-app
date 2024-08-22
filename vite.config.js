import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-app/',  // Убедитесь, что это соответствует пути развертывания
  plugins: [react()],
  // Дополнительные настройки при необходимости
  server: {
    open: true,  // Опционально: автоматически открывать браузер при запуске dev-сервера
  },
  build: {
    outDir: 'dist',  // Опционально: каталог для вывода собранного проекта
    sourcemap: true,  // Опционально: генерация карт источников для отладки
  },
});
