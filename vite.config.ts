import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType:'prompt',
  includeAssets:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"week-shedule",
    short_name:"week-shedule",
    description:"App for determining activity for the day of the week",
    icons:[{
      src: '/pwa/apple-icon-180.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/pwa/manifest-icon-512.maskable.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/pwa/apple-icon-180.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: '/pwa/manifest-icon-512.maskable.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})
