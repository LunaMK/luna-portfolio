// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico" },
        // { rel: 'icon', type: 'image/x-icon', href: process.env.BASE_URL + '/logo.png' },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxthub/core",
  ],
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
  content: {
    database: {
      type: "d1",
      bindingName: "DB", 
    },
  },
  nitro: {
    experimental: {
      database: true,
    },
  },
});
