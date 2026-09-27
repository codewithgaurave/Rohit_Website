import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Rohit Jewellers',
        short_name: 'RohitJewels',
        description: 'Exquisite handcrafted jewellery by Rohit Jewellers.',
        theme_color: '#F6F0E7',
        background_color: '#F6F0E7',
        display: 'standalone',
        icons: [
          {
            src: '/pwa-icon.jpg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: '/pwa-icon.jpg',
            sizes: '512x512',
            type: 'image/jpeg'
          }
        ]
      }
    })
  ],
})
