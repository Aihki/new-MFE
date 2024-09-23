import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  // Set the base path here at the top level
  base: '/~tomihenr/microfrontend-project/juutube-front-and-sidebar/',

  plugins: [
    react(),
    federation({
      name: 'front_and_sidebar',
      filename: 'remoteEntry.js',
      exposes: {
        './Front': './src/components/front/Front',
        './Sidebar': './src/components/sidebar/Sidebar',
        './ThumbCarousel': './src/components/thumb-carousel/ThumbCarousel',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3002, // Development server port
  },
  preview: {
    port: 3002, // Preview server port
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },
});
