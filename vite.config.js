import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'
import restart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
  [
    restart({ restart: [ '../static/**', ] }), 
    react(),
    glsl() 
  ],
})
