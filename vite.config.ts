
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          '/api/anthropic': {
            target: 'https://api.anthropic.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api\/anthropic/, ''),
            headers: {
              'Origin': 'https://api.anthropic.com'
            }
          }
        }
      },
      plugins: [
        react(),
        tailwindcss()
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.ANTHROPIC_API_KEY || env.GEMINI_API_KEY),
        'process.env.ANTHROPIC_API_KEY': JSON.stringify(env.ANTHROPIC_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'recharts-vendor': ['recharts'],
              'lucide-icons': ['lucide-react'],
            }
          }
        },
        chunkSizeWarningLimit: 1000,
        target: 'es2020',
      }
    };
});
