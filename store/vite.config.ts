import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base path for correct asset loading in production
  base: '/~tomihenr/microfrontend-project/store/',

  plugins: [
    react(),
    federation({
      name: 'mediastore',
      filename: 'remoteEntry.js',
      exposes: {
        './contextHooks': './src/hooks/contextHooks',
        './MediaContext': './src/contexts/MediaContext',
        './UserContext': './src/contexts/UserContext',
        './apiHooks': './src/hooks/apiHooks',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3001, // Development server port
  },
  preview: {
    port: 3001, // Preview server port
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
