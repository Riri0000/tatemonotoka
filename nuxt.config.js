import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'タテモノトカ | %s',
    title: 'タテモノトカ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://elastic-allen-10c867.netlify.app/' },
      { hid: 'og:title', property: 'og:title', content: 'タテモノトカ' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'タテモノトカ' },
      { hid: 'og:description', property: 'og:description', content: '杉山由香が運営している設計事務所です。やわらかなものづくりを目指しています。' },
      { hid: 'og:image', property: 'og:image', content: '/image/logo.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/image/logo.jpg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // プロジェクト内の CSS ファイル
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {

      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
