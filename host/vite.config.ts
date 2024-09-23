import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({

  base: '/~tomihenr/microfrontend-project/host/',

  plugins: [
    react(),
    federation({
      name: 'juutube',
      remotes: {
        mediastore: 'https://users.metropolia.fi/~tomihenr/microfrontend-project/store/assets/remoteEntry.js',
        front_and_sidebar: 'https://users.metropolia.fi/~tomihenr/microfrontend-project/juutube-front-and-sidebar/assets/remoteEntry.js',
        TopBar: 'https://users.metropolia.fi/~tomihenr/microfrontend-project/juutube-top-bar/assets/remoteEntry.js',
        video_player: 'https://users.metropolia.fi/~tomihenr/microfrontend-project/juutube-video/assets/remoteEntry.js',
        Sidebar: 'https://users.metropolia.fi/~tomihenr/microfrontend-project/juutube-real-sidebar/assets/remoteEntry.js',
        upload: 'https://users.metropolia.fi/~tomihenr/microfrontend-project/juutube-upload/assets/remoteEntry.js',
        comments: 'https://users.metropolia.fi/~tomihenr/microfrontend-project/juutube-comments/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'esnext',
  },
});
