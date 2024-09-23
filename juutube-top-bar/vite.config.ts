import federation from '@originjs/vite-plugin-federation';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  // Set the base path to ensure correct asset loading in production
  base: '/~tomihenr/microfrontend-project/juutube-top-bar/',

  plugins: [
    react(),
    federation({
      name: 'TopBar',
      filename: 'remoteEntry.js',
      exposes: {
        './TopBar': './src/components/topbar/TopBar',
      },
      remotes: {
        // Correct URL pointing to the deployed 'store' project (mediastore)
        mediastore: 'https://users.metropolia.fi/~tomihenr/microfrontend-project/store/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3004, // Development server port
  },
  preview: {
    port: 3004, // Preview server port
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
