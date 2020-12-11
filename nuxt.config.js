export default {
  /*
  ** Nuxt rendering mode
  */
  ssr: true,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.TITLE || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/vuex-persist.js', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/fontawesome',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},
  env: {
    TITLE: 'Vue Nuxt eCommerce',
    EF_API_URL: 'https://system.electronicfirst.com/api/',
    EF_IMAGE_URL: 'https://static.electronicfirst.com/products/',
    API_KEY: 'RHllanVrOHRkWjFwMXdaTU0zVUtGa2M5SHQ2MUdkbU1vaE5XSDM0a3dLZ1lXVFNUWnRZRlFGWkhPY05l5e20a744aaa79',
  },
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  }
}
