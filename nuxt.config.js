export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Nuxt Composition APIで作る完全静的サイト",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/211020_nuxt_composition_api_full_static/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  generate: {
    interval: 500,
    dir: "docs",
  },

  router: {
    base: "/211020_nuxt_composition_api_full_static/",
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/composition-api"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxt/http"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  vue: {
    config: {
      devtools: true,
    },
  },
};
