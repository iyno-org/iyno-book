import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Neurosurgery Simplified: A beginner's Guide",
  description: "A beginners guide to start learning neurosurgery.",
  srcDir: 'book',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'The Why', link: '/0. Preface/' },
      { text: 'Privacy Policy', link: '/privacy'}
    ],

    sidebar: [
      {
        // text: '0. Preface',
        items: [
          { text: 'The Why', link: '/0. preface/' },
        ],      
      },

      {
        text: 'A. NEUROANATOMY',
        items: [
          { text: '01. Embryology', link: '/A. Neuroanatomy/01. Embryology/Embryology'},
          { text: '02. Cerebrum', link: '/A. Neuroanatomy/02. Cerebrum/Cerebrum'},
        ],
      },


      {
        text: '1. Spinal cord',
        items: [
          {text: 'Overview', link:'/1. spinal cord/overview'},
          {text: 'Bone Structure', link:'/1. spinal cord/'},
          {text: 'Tractology', link:'/1. spinal cord/tractology'},
          {text: 'Blood Supply', link:'/1. spinal cord/blood supply'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
