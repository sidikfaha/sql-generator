import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

const vite = {
  plugins: [
    eslintPlugin()
  ]
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite,
  build: {
    postcss: {
      postcssOptions: require('./postcss.config')
    }
  },
  css: [
    '@/assets/css/app.css'
  ]
})
