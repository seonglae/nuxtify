import dotenv from 'dotenv'
import colors from 'vuetify/es5/util/colors'
import pkg from './package.json'
import type { NuxtConfig } from '@nuxt/types'

const TITLE: string = 'Nuxt TS Template'
const HOST: string = 'https://example.com'
const LANG: string = 'en'
const PORT: number = 3000
const KEYWORKDS: Array<string> = ['typescript', 'template', 'nuxt']
const PRODUCTION: string = 'production'
const FAVICON: string = 'favicon.svg'

dotenv.config()
const config: NuxtConfig = {
  // Project Config
  srcDir: 'src/',
  target: 'static',
  plugins: [{ src: '~/plugins/init/config', ssr: false }],
  buildModules: ['@nuxt/typescript-build', ['@nuxtjs/vuetify', { treeshake: true }], '@nuxtjs/composition-api/module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap', '@nuxtjs/toast'],
  store: true,

  // Application Config
  components: true,
  vue: { config: { productionTip: false, devtools: process.env.NODE_ENV === PRODUCTION } },
  loading: { color: colors.grey.base },
  server: { port: process.env.PORT || PORT, host: '0.0.0.0' },
  env: { title: TITLE, name: pkg.name },
  pwa: { manifest: { lang: LANG } },
  router: { base: process.env.BASE ? `/${pkg.name}/` : '/' },

  // Head with SEO
  head: {
    title: TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: KEYWORKDS.join() },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: process.env.BASE ? `/${pkg.name}/${FAVICON}` : `/${FAVICON}` }],
  },
  sitemap: { hostname: HOST },

  // Vuetify Theme
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
  toast: { position: 'bottom-center', duration: 2000, keepOnHover: true },

  // Build Options
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
