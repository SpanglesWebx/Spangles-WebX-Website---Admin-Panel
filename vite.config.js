import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor_framer';
            if (id.includes('gsap')) return 'vendor_gsap';
            if (id.includes('lucide-react')) return 'vendor_icons';
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    host: true,
    strictPort: true,
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
})