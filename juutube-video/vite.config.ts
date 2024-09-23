import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/~tomihenr/microfrontend-project/juutube-video/',

  plugins: [
    react(),
    federation({
      name: 'video_player',
      filename: 'remoteEntry.js',
      exposes: {
        './VideoPlayer': './src/components/player/VideoPlayer',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3003, // Development server port
  },
  preview: {
    port: 3003, // Preview server port
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
