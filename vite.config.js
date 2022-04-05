import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@imgs': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
    },
  },
  server: {
    host: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/scss/main";
          @import "@/scss/base/_reset.scss";
          @import "@/scss/base/_typography.scss";
          @import "@/scss/abstracts/_variables.scss";
        `,
      },
    },
  },
});
