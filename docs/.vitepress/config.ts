import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.VITEPRESS_BASE ?? '/',
  lang: 'en-US',
  title: 'Some University',
  description: 'Official website powered by VitePress',
  lastUpdated: true,
  themeConfig: {
    logo: '/images/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Departments', link: '/departments/' },
      { text: 'Admission', link: '/admission/' },
      { text: 'News', link: '/news/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    footer: {
      message: 'All rights reserved © ' + new Date().getFullYear() + ' Some University',
      copyright: 'Address: No. 100 University Rd, Some City, Some Province | Zip: 000000'
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
    ['link', { rel: 'icon', href: '/images/favicon.svg' }]
  ]
})


