import { defineConfig } from 'vite';
import sass from 'sass';

// https://vitejs.dev/config/

export default defineConfig({
  base: 'real-estate-Turkey',
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
