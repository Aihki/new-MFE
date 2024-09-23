import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  // Set the correct base path for production deployment
  base: '/~tomihenr/microfrontend-project/juutube-comments/',

  plugins: [
    react(),
    federation({
      name: 'juutube_comments',
      filename: 'remoteEntry.js',
      exposes: {
        './CommentArea': './src/components/comments/CommentArea',
        './Comment': './src/components/comments/Comment',
        './CommentForm': './src/components/comments/CommentForm',
      },
      remotes: {
        mediastore: 'https://users.metropolia.fi/~tomihenr/microfrontend-project/store/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3007, // Development server port
  },
  preview: {
    port: 3007, // Preview server port
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
