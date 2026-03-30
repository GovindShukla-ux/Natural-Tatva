import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  optimizeDeps: {
    include: ['@emailjs/browser'],
  },

  build: {
    target: 'es2015',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    // Minify for smaller bundle = faster load = better SEO
    minify: 'esbuild',
    // Optimize CSS
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animation: ['framer-motion'],
        },
        // Better caching with hashed filenames
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  preview: {
    port: 4000,
  },
})