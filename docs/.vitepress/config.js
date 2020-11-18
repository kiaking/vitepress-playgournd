module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vuex',
      description: 'Centralized State Management for Vue.js'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Vuex',
      description: 'Gestion d\'état centralisé pour Vue.js'
    },
    '/ja/': {
      lang: 'ja',
      title: 'Vuex',
      description: 'Vue.js のための集中状態管理'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
  ],
  themeConfig: {
    repo: 'vuejs/vuex',
    docsDir: 'docs',
    docsBranch: 'dev',
    editLinks: true,

    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'API Reference', link: '/api/' },
          { text: 'Release Notes', link: 'https://github.com/vuejs/vuex/releases' }
        ],
        sidebar: [
          {
            text: 'Introduction',
            children: [
              { text: 'What is Vuex?', link: '/' },
              { text: 'Installation', link: '/installation' },
              { text: 'Getting Started', link: '/guide/' }
            ]
          },
          {
            text: 'Core Concepts',
            children: [
              { text: 'State', link: '/guide/state' },
              { text: 'Getters', link: '/guide/getters' },
              { text: 'Mutations', link: '/guide/mutations' },
              { text: 'Actions', link: '/guide/actions' },
              { text: 'Modules', link: '/guide/modules' }
            ]
          },
          {
            text: 'Advanced',
            children: [
              { text: 'Application Structure', link: '/guide/structure' },
              { text: 'Plugins', link: '/guide/plugins' },
              { text: 'Strict Mode', link: '/guide/strict' },
              { text: 'Form Handling', link: '/guide/forms' },
              { text: 'Testing', link: '/guide/testing' },
              { text: 'Hot Reloading', link: '/guide/hot-reload' }
            ]
          }
        ]
      },
      '/fr/': {
        label: 'Français',
        selectText: 'Langues',
        editLinkText: 'Éditer la page sur GitHub',
        nav: [
          { text: 'Guide', link: '/fr/guide/' },
          { text: 'API', link: '/fr/api/' },
          { text: 'Notes de version', link: 'https://github.com/vuejs/vuex/releases' }
        ],
        sidebar: [
          {
            title: 'Introduction',
            children: [
              { text: "Vuex, qu'est-ce que c'est ?", link: '/fr/' },
              { text: 'Installation', link: '/fr/installation' },
              { text: 'Pour commencer', link: '/fr/guide/' }
            ]
          },
          {
            text: 'Concepts centraux',
            children: [
              { text: 'State', link: '/fr/guide/state' },
              { text: 'Accesseurs', link: '/fr/guide/getters' },
              { text: 'Mutations', link: '/fr/guide/mutations' },
              { text: 'Actions', link: '/fr/guide/actions' },
              { text: 'Modules', link: '/fr/guide/modules' }
            ]
          },
          {
            text: 'Avancés',
            children: [
              { text: "Structure d'une application", link: '/fr/guide/structure' },
              { text: 'Plugins', link: '/fr/guide/plugins' },
              { text: 'Mode strict', link: '/fr/guide/strict' },
              { text: 'Gestion des formulaires', link: '/fr/guide/forms' },
              { text: 'Tests', link: '/fr/guide/testing' },
              { text: 'Rechargement à chaud', link: '/fr/guide/hot-reload' }
            ]
          }
        ]
      },
      '/ja/': {
        label: '日本語',
        selectText: '言語',
        editLinkText: 'GitHub 上でこのページを編集する',
        nav: [
          { text: 'ガイド', link: '/ja/guide/' },
          { text: 'API リファレンス', link: '/ja/api/' },
          { text: 'リリースノート', link: 'https://github.com/vuejs/vuex/releases' }
        ],
        sidebar: [
          {
            text: 'はじめに',
            children: [
              { text: 'Vuex とは何か？', link: '/ja/' },
              { text: 'インストール', link: '/ja/installation' },
              { text: 'Vuex 入門', link: '/ja/guide/' }
            ]
          },
          {
            text: 'コアコンセプト',
            children: [
              { text: 'ステート', link: '/ja/guide/state' },
              { text: 'ゲッター', link: '/ja/guide/getters' },
              { text: 'ミューテーション', link: '/ja/guide/mutations' },
              { text: 'アクション', link: '/ja/guide/actions' },
              { text: 'モジュール', link: '/ja/guide/modules' }
            ]
          },
          {
            text: '高度な活用',
            children: [
              { text: 'アプリケーションの構造', link: '/ja/guide/structure' },
              { text: 'プラグイン', link: '/ja/guide/plugins' },
              { text: '厳格モード', link: '/ja/guide/strict' },
              { text: 'フォームの扱い', link: '/ja/guide/forms' },
              { text: 'テスト', link: '/ja/guide/testing' },
              { text: 'ホットリローディング', link: '/ja/guide/hot-reload' }
            ]
          }
        ]
      }
    }
  }
}
