import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  // Set the base path to ensure correct asset loading in production
  base: '/~tomihenr/microfrontend-project/juutube-real-sidebar/',

  plugins: [
    react(),
    federation({
      name: 'real_sidebar',
      filename: 'remoteEntry.js',
      exposes: {
        './Sidebar': './src/components/sidebar/Sidebar',
        './ThumbCarousel': './src/components/thumb-carousel/ThumbCarousel',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3005, // Development server port
  },
  preview: {
    port: 3005, // Preview server port
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
