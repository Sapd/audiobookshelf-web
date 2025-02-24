export default {
  target: 'static',

  head: {
    title: 'audiobookshelf',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:title',
        content: 'audiobookshelf',
        vmid: 'og:title'
      },
      {
        property: 'og:image',
        content: 'https://audiobookshelf.org/Logo.png',
        vmid: 'og:image'
      },
      {
        property: 'og:description',
        content: 'Self-hosted audiobook and podcast server',
        vmid: 'og:description'
      },
      {
        property: 'twitter:title',
        content: 'AudioBookshelf',
        vmid: 'twitter:title'
      },
      {
        property: 'twitter:image',
        content: 'https://audiobookshelf.org/Logo.png',
        vmid: 'twitter:image'
      },
      {
        property: 'twitter:description',
        content: 'Self-hosted audiobook and podcast server',
        vmid: 'twitter:description'
      },
      {
        name: 'twitter:card',
        content: 'summary',
        vmid: 'twitter:card'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu+Mono&family=Open+Sans:wght@400;600;700&family=Gentium+Book+Basic&family=Material+Icons' }
    ],
    script: [
      {
        src: '/prism.js'
      },
      {
        src: 'https://buttons.github.io/buttons.js',
        defer: false,
        async: false
      }
    ]
  },

  css: [
    '@/assets/app.css'
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxt/content'
  ],

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).fetch()
      return files.map(file => file.fullpath)
    }
  },

  content: {
    markdown: {
      remarkPlugins: [
        'remark-squeeze-paragraphs',
        'remark-slug',
        ['remark-autolink-headings', {
          content: {
            type: 'element',
            tagName: 'span',
            properties: { className: ['material-icons'] },
            children: [{
              type: 'text',
              value: 'tag'
            }]
          }
        }],
        'remark-external-links',
        'remark-footnotes',
        'remark-gfm'
      ],
      prism: {
        theme: false
      }
    }
  },

  build: {
  }
}
