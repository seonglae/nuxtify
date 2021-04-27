import dotenv from 'dotenv'
import colors from 'vuetify/es5/util/colors'
import type { NuxtConfig } from '@nuxt/types'

dotenv.config()
process.env.NODE_ENV === 'production' ? (process.env.dev = '') : (process.env.dev = '1')
process.env.title = 'Nuxt TS Template'

const config: NuxtConfig = {
  // Project
  srcDir: 'src/',
  target: 'static',
  plugins: [{ src: '~/plugins/init/config', ssr: false }],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/sitemap'],

  // Application
  vue: { config: { productionTip: false, devtools: Boolean(process.env.dev) } },
  loading: { color: '#424242' },
  server: {
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
  },
  env: { dev: process.env.dev, title: process.env.title },
  pwa: { manifest: { lang: 'en' } },

  // Head
  head: {
    title: process.env.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'typescript, template, nuxt',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },
  sitemap: {
    hostname: 'https://example.com'
  },

  // Theme
  vuetify: {
    defaultAssets: { icons: 'fa' },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build
  build: {
    devMiddleware: {
      headers: {
        'Cache-Control': 'no-store',
        Vary: '*',
      },
    },
    extractCSS: true,
    optimizeCSS: true,
    splitChunks: {
      commons: true,
      pages: true,
      layouts: true,
    },
  },
}

export default config
