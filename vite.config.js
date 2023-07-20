import { defineConfig } from 'vite';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
