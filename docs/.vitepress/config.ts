import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.VITEPRESS_BASE ?? '/',
  lang: 'en-US',
  title: 'INUI Education',
  description: 'INUI EDU Official website',
  lastUpdated: true,
  appearance: false,
  themeConfig: {
    logo: '/images/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Departments', link: '/departments/' },
      { text: 'Admission', link: '/admission/' },
      { text: 'News', link: '/news/' }
    ],
    footer: {
      message: 'All rights reserved © ' + new Date().getFullYear() + ' INUI Education',
      copyright: 'Address: No. 347 Rd, Andrew City, | Zip: 430000'
    },
    sidebar: {
      '/about/': [
        {
          text: 'About',
          items: [
            { text: 'Overview', link: '/about/' },
            { text: 'Philosophy', link: '/about/philosophy' }
          ]
        }
      ],
      '/departments/': [
        {
          text: 'Departments',
          items: [
            { text: 'School of Engineering', link: '/departments/engineering' },
            { text: 'School of Arts', link: '/departments/arts' },
            { text: 'School of Business', link: '/departments/business' }
          ]
        }
      ],
      '/admission/': [
        {
          text: 'Admission',
          items: [
            { text: 'Undergraduate', link: '/admission/undergrad' },
            { text: 'Graduate', link: '/admission/graduate' }
          ]
        }
      ],
      '/news/': [
        {
          text: 'News',
          items: [
            { text: 'Campus News', link: '/news/campus' },
            { text: 'Media Coverage', link: '/news/media' }
          ]
        }
      ]
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#0052D9' }],
    ['meta', { name: 'color-scheme', content: 'light' }],
    ['link', { rel: 'icon', href: '/images/favicon.svg' }]
  ]
})


