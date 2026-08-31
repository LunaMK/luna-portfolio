// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxthub/core'
  ],
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { charset: 'utf-8' },
        { name: 'robots', content: 'index, follow' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          'http-equiv': 'X-Content-Type-Options',
          'content': 'nosniff'
        }
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
      style: [
        {
          innerHTML:
            '#__nuxt{opacity:0}#app-loader{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:var(--loader-bg, #f7e9eb)}.dark #app-loader{--loader-bg:#210c40}html.revealed #__nuxt{opacity:1;transition:opacity .3s ease}html.revealed #app-loader{opacity:0;pointer-events:none;transition:opacity .3s ease}'
        }
      ],
      script: [
        {
          innerHTML:
            '(function(){var revealed=false;function r(){if(revealed)return;revealed=true;document.documentElement.classList.add(\'revealed\')}addEventListener(\'load\',r);addEventListener(\'DOMContentLoaded\',r);setTimeout(r,1200)})()',
          tagPosition: 'head'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  routeRules: {
    '/': {
      prerender: true,
      headers: {
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'X-Content-Type-Options': 'nosniff'
      }
    }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
