import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
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
        mediastore: 'http://localhost:3001/assets/remoteEntry.js',
      },
      
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3007, 
  },
  preview: {
    port: 3007, 
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
