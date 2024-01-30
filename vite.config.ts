import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType:'prompt',
  manifest:{
    name:"Week Schedule",
    short_name:"Week Schedule",
    description:"App for determining activity for the day of the week",
    icons:[
    {
        src: 'icon-180.png',
        sizes:'180x180',
        type:'image/png',
        purpose:'any',
    },
    {
      src: 'maskable-icon-512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any',
    },
    {
      src: 'icon-180.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'maskable',
  },
  {
    src: 'maskable-icon-512.png',
    sizes:'512x512',
    type:'image/png',
    purpose:'maskable',
  },
  ],
  theme_color:'#171717',
  background_color:'#242424',
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
