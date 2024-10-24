import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'incywincywebservices',
  plugins: [react()],
  base: '/incywincywebservices/',  
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});