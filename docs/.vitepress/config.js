module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vuex',
      description: 'Centralized State Management for Vue.js'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vuex',
      description: 'Vue.js 的中心化状态管理方案'
    },
    '/ja/': {
      lang: 'ja',
      title: 'Vuex',
      description: 'Vue.js のための集中状態管理'
    },
    '/ru/': {
      lang: 'ru',
      title: 'Vuex',
      description: 'Централизованное управление состоянием для Vue.js'
    },
    '/kr/': {
      lang: 'kr',
      title: 'Vuex',
      description: 'Vue.js의 중앙 상태 관리'
    },
    '/ptbr/': {
      lang: 'pt-BR',
      title: 'Vuex',
      description: 'Gerenciamento de Estado Centralizado para Vue.js'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Vuex',
      description: 'Gestion d\'état centralisé pour Vue.js'
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
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: 'API 参考', link: '/zh/api/' },
          { text: '更新记录', link: 'https://github.com/vuejs/vuex/releases' }
        ],
        sidebar: [
          {
            text: '介绍',
            children: [
              { text: 'Vuex 是什么？', link: '/zh/' },
              { text: '安装', link: '/zh/installation' },
              { text: '开始', link: '/zh/guide/' }
            ]
          },
          {
            text: '核心概念',
            children: [
              { text: 'State', link: '/zh/guide/state' },
              { text: 'Getters', link: '/zh/guide/getters' },
              { text: 'Mutations', link: '/zh/guide/mutations' },
              { text: 'Actions', link: '/zh/guide/actions' },
              { text: 'Modules', link: '/zh/guide/modules' }
            ]
          },
          {
            text: '进阶',
            children: [
              { text: '项目结构', link: '/zh/guide/structure' },
              { text: '插件', link: '/zh/guide/plugins' },
              { text: '严格模式', link: '/zh/guide/strict' },
              { text: '表单处理', link: '/zh/guide/forms' },
              { text: '测试', link: '/zh/guide/testing' },
              { text: '热重载', link: '/zh/guide/hot-reload' }
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
      },
      '/ru/': {
        label: 'Русский',
        selectText: 'Переводы',
        editLinkText: 'Изменить эту страницу на GitHub',
        nav: [
          { text: 'Руководство', link: '/ru/guide/' },
          { text: 'Справочник API', link: '/ru/api/' },
          { text: 'История изменений', link: 'https://github.com/vuejs/vuex/releases' }
        ],
        sidebar: [
          {
            text: 'Введение',
            children: [
              { text: 'Что такое Vuex?', link: '/ru/' },
              { text: 'Установка', link: '/ru/installation' },
              { text: 'Введение', link: '/ru/guide/' }
            ]
          },
          {
            text: 'Основные понятия',
            children: [
              { text: 'Состояние', link: '/ru/guide/state' },
              { text: 'Геттеры', link: '/ru/guide/getters' },
              { text: 'Мутации', link: '/ru/guide/mutations' },
              { text: 'Действия', link: '/ru/guide/actions' },
              { text: 'Модули', link: '/ru/guide/modules' }
            ]
          },
          {
            text: 'Продвинутые темы',
            children: [
              { text: 'Структура приложения', link: '/ru/guide/structure' },
              { text: 'Плагины', link: '/ru/guide/plugins' },
              { text: 'Строгий режим (strict mode)', link: '/ru/guide/strict' },
              { text: 'Работа с формами', link: '/ru/guide/forms' },
              { text: 'Тестирование', link: '/ru/guide/testing' },
              { text: 'Горячая перезагрузка', link: '/ru/guide/hot-reload' }
            ]
          }
        ]
      },
      '/kr/': {
        label: '한국어',
        selectText: '언어 변경',
        editLinkText: 'GitHub에서 이 페이지 수정',
        nav: [
          { text: '가이드', link: '/kr/guide/' },
          { text: 'API 레퍼런스', link: '/kr/api/' },
          { text: '릴리즈 노트', link: 'https://github.com/vuejs/vuex/releases' }
        ],
        sidebar: [
          {
            text: 'Introduction',
            children: [
              { text: 'Vuex가 무엇인가요?', link: '/kr/' },
              { text: '설치', link: '/kr/installation' },
              { text: '시작하기', link: '/kr/guide/' }
            ]
          },
          {
            text: '핵심 컨셉',
            children: [
              { text: '상태', link: '/kr/guide/state' },
              { text: 'Getters', link: '/kr/guide/getters' },
              { text: '변이', link: '/kr/guide/mutations' },
              { text: '액션', link: '/kr/guide/actions' },
              { text: '모듈', link: '/kr/guide/modules' }
            ]
          },
          {
            text: 'Advanced',
            children: [
              { text: '애플리케이션 구조', link: '/kr/guide/structure' },
              { text: '플러그인', link: '/kr/guide/plugins' },
              { text: 'Strict 모드', link: '/kr/guide/strict' },
              { text: '폼 핸들링', link: '/kr/guide/forms' },
              { text: '테스팅', link: '/kr/guide/testing' },
              { text: '핫 리로딩', link: '/kr/guide/hot-reload' }
            ]
          }
        ]
      },
      '/ptbr/': {
        label: 'Português',
        selectText: 'Idiomas',
        editLinkText: 'Edite esta página no GitHub',
        nav: [
          { text: 'Guia', link: '/ptbr/guide/' },
          { text: 'Referência da API', link: '/ptbr/api/' },
          { text: 'Notas da Versão', link: 'https://github.com/vuejs/vuex/releases' }
        ],
        sidebar: [
          {
            text: 'Introdução',
            children: [
              { text: 'O que é Vuex?', link: '/ptbr/' },
              { text: 'Instalação', link: '/ptbr/installation' },
              { text: 'Começando', link: '/ptbr/guide/' }
            ]
          },
          {
            text: 'Conceitos Básicos',
            children: [
              { text: 'Estado', link: '/ptbr/guide/state' },
              { text: 'Getters', link: '/ptbr/guide/getters' },
              { text: 'Mutações', link: '/ptbr/guide/mutations' },
              { text: 'Ações', link: '/ptbr/guide/actions' },
              { text: 'Módulos', link: '/ptbr/guide/modules' }
            ]
          },
          {
            text: 'Avançado',
            children: [
              { text: 'Estrutura da Aplicação', link: '/ptbr/guide/structure' },
              { text: 'Plugins', link: '/ptbr/guide/plugins' },
              { text: 'Modo Estrito', link: '/ptbr/guide/strict' },
              { text: 'Manipulação de Formulários', link: '/ptbr/guide/forms' },
              { text: 'Testando', link: '/ptbr/guide/testing' },
              { text: 'Hot Reloading (Recarregamento Rápido)', link: '/ptbr/guide/hot-reload' }
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
      }
    }
  }
}
