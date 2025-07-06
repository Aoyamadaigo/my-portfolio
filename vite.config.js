import { defineConfig } from 'vite';

export default defineConfig({
  // root: 'vite-project',
  publicDir: 'public',
  build: {
    // outDir: 'dist',
    // assetsDir: 'assets',
    rollupOptions: {
      input: 'src/style.css',
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});