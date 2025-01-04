import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Holistic Clinical Neurosurgery",
  description: "A holistic approach to start learning neurosurgery.",
  srcDir: 'book',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'The Why', link: '/0. Preface/' },
      { text: 'Privacy Policy', link: '/privacy'}
    ],
    outline: {level: 'deep'},
    sidebar: [
      {
        // text: '0. Preface',
        items: [
          { text: 'The Why', link: 'files/index.md' },
        ],      
      },

      {
        text: 'December 2024',
        link: '/files/December 2024.md',
      },
      {
        text: 'January 2025',
        link: 'Janauary 2025/january2025.md'
      },

      // {
      //   text: 'A. NEUROANATOMY',
      //   link: '/A. Neuroanatomy/neuroanatomy.md',
      //   items: [
      //     { text: 'Spinal Cord',
      //       link: '/A. Neuroanatomy/spinal cord/overview.md',
      //       items: [
      //         {text: 'General Spinal Cord Malformations', link: '/A. Neuroanatomy/spinal cord/general spinal cord malformations'}
      //       ]
      //     },
      //     // { text: '01. Embryology', link: '/A. Neuroanatomy/01. Embryology/Embryology'},
      //     // { text: '02. Cerebrum', link: '/A. Neuroanatomy/02. Cerebrum/Cerebrum'},
      //   ],
      // },


      // {
      //   text: '1. Spinal cord',
      //   items: [
      //     {text: 'Overview of the spianl cord with smth', link:'/spinal cord/overview'},
      //     {text: 'Overview', link:'/1. spinal cord/overview'},
      //     {text: 'Bone Structure', link:'/1. spinal cord/'},
      //     {text: 'Tractology', link:'/1. spinal cord/tractology'},
      //     {text: 'Blood Supply', link:'/1. spinal cord/blood supply'},
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
