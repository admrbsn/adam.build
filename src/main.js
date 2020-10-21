// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/main.scss'
import VuePrlx from 'vue-prlx'

export default function(Vue, { router, head, isClient }) {
  Vue.use(VuePrlx);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased' }

  // Styles

  // Basic meta tags
  head.meta.push({
    name: 'author',
    content: 'Adam Robertson',
  })

  head.meta.push({
    name: 'keywords',
    content: 'Adam Robertson,developer,designer,front end,denver,web design,denver web deisng,Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS',
  })

  head.meta.push({
    name: 'description',
    content: 'Single page starter template for Gridsome.',
  })

  // Open Graph + Twitter meta tags
  head.meta.push({
    property: 'og:description',
    content: 'Single page starter template for Gridsome.',
  })

  head.meta.push({
    name: 'twitter:description',
    content: 'Single page starter template for Gridsome.',
  })

  head.meta.push({
    property: 'og:type',
    content: 'website',
  })

  head.meta.push({
    property: 'og:title',
    content: 'Adam Robertson - A frontend engineer and UX designer interested in accessibility',
  })

  head.meta.push({
    name: 'twitter:title',
    content: 'Adam Robertson - A frontend engineer and UX designer interested in accessibility',
  })

  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image',
  })

  head.meta.push({
    name: 'twitter:creator',
    content: '@uninen',
  })

  head.meta.push({
    property: 'og:image',
    content: ' https://adam.build/img/social-preview.png',
  })

  head.meta.push({
    name: 'twitter:image',
    content: 'https://adam.build/img/social-preview.png',
  })
}
