import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base:'/my-profile/',
  publicDir: 'public', 
  server: {
    fs: {
      allow: ['..'] 
    },
    // CONFIGURAÇÃO DO PROXY AQUI:
    proxy: {
      '/api': {
        target: 'https://api.steampowered.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})