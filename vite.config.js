import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '', // Set the base path to empty
  build: {
    outDir: 'dist', // Output directory relative to the root
    rollupOptions: {
      input: {
        main: 'index.html', // Ensure Vite knows where to find index.html
      },
    },
  },
});