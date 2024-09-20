import  federation  from '@originjs/vite-plugin-federation';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    // federation config, name: front_and_sidebar,
    federation({
      name: 'TopBar',
      filename: 'remoteEntry.js',
      // expose Front, Sidebar, and ThumbCarousel,
      exposes: {
        './TopBar': './src/components/topbar/TopBar',
      },
      remotes: {
        mediastore: 'http://localhost:3001/assets/remoteEntry.js',
      },
      // shared: react, react-dom, react-router-dom
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3004, // Set the desired port here
  },
  preview: {
    port: 3004, // Set the desired port here
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
