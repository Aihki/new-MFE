import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/~tomihenr/microfrontend-project/juutube-upload/',

  plugins: [
    react(),
    federation({
      name: 'upload',
      filename: 'remoteEntry.js',
      exposes: {
        './MediaForm': './src/views/upload/MediaForm.tsx',
      },
      remotes: {
        mediastore: 'https://users.metropolia.fi/~tomihenr/microfrontend-project/store/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3006, // Development server port
  },
  preview: {
    port: 3006, // Preview server port
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
