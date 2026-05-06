import { defineConfig } from 'vitepress'

const enNav = [
  { text: 'About', link: '/about' },
  { text: 'Basics', link: '/basics/mobile-platform' },
  { text: 'Aircraft Modules', link: '/aircraft/index' },
  { text: 'Privacy Policy', link: '/privacy-policy' },
  { text: 'FAQ', link: '/faq' }
]

const enSidebar = [
  {
    text: 'About',
    items: [
      { text: 'Positioning & Development Status', link: '/about' }
    ]
  },
  {
    text: 'Basics',
    items: [
      { text: 'Mobile Platform', link: '/basics/mobile-platform' },
      { text: 'VR Platform', link: '/basics/vr-platform' },
      { text: 'Tac Editor', link: '/basics/tac-editor' }
    ]
  },
  {
    text: 'Aircraft Modules',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/aircraft/f15c/introduction' },
          { text: 'Touch UI', link: '/aircraft/f15c/touch-ui' },
          { text: 'HUD', link: '/aircraft/f15c/hud' },
          { text: 'Navigation', link: '/aircraft/f15c/navigation' },
          { text: 'Fire Control Radar', link: '/aircraft/f15c/fire-control-radar' },
          { text: 'MPCD', link: '/aircraft/f15c/mpcd' },
          { text: 'RWR', link: '/aircraft/f15c/rwr' },
          { text: 'Weapons', link: '/aircraft/f15c/weapons' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const zhNav = [
  { text: '关于', link: '/zh/about' },
  { text: '基础操作', link: '/zh/basics/mobile-platform' },
  { text: '飞机模组', link: '/zh/aircraft/index' },
  { text: '隐私声明', link: '/zh/privacy-policy' },
  { text: 'FAQ', link: '/zh/faq' }
]

const zhSidebar = [
  {
    text: '关于',
    items: [
      { text: '游戏定位与开发状态', link: '/zh/about' }
    ]
  },
  {
    text: '基础操作',
    items: [
      { text: '移动平台', link: '/zh/basics/mobile-platform' },
      { text: 'VR 平台', link: '/zh/basics/vr-platform' },
      { text: 'Tac 编辑器', link: '/zh/basics/tac-editor' }
    ]
  },
  {
    text: '飞机模组',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: '简介', link: '/zh/aircraft/f15c/introduction' },
          { text: '触摸 UI', link: '/zh/aircraft/f15c/touch-ui' },
          { text: 'HUD', link: '/zh/aircraft/f15c/hud' },
          { text: '导航', link: '/zh/aircraft/f15c/navigation' },
          { text: '火控雷达', link: '/zh/aircraft/f15c/fire-control-radar' },
          { text: 'MPCD', link: '/zh/aircraft/f15c/mpcd' },
          { text: 'RWR', link: '/zh/aircraft/f15c/rwr' },
          { text: '武器', link: '/zh/aircraft/f15c/weapons' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: '简介', link: '/zh/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: '简介', link: '/zh/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: '简介', link: '/zh/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: '简介', link: '/zh/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const zhTwNav = [
  { text: '關於', link: '/zh-tw/about' },
  { text: '基礎操作', link: '/zh-tw/basics/mobile-platform' },
  { text: '飛機模組', link: '/zh-tw/aircraft/index' },
  { text: 'FAQ', link: '/zh-tw/faq' }
]

const zhTwSidebar = [
  {
    text: '關於',
    items: [
      { text: '遊戲定位與開發狀態', link: '/zh-tw/about' }
    ]
  },
  {
    text: '基礎操作',
    items: [
      { text: '移動平台', link: '/zh-tw/basics/mobile-platform' },
      { text: 'VR 平台', link: '/zh-tw/basics/vr-platform' },
      { text: 'Tac 編輯器', link: '/zh-tw/basics/tac-editor' }
    ]
  },
  {
    text: '飛機模組',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: '簡介', link: '/zh-tw/aircraft/f15c/introduction' },
          { text: '觸控 UI', link: '/zh-tw/aircraft/f15c/touch-ui' },
          { text: 'HUD', link: '/zh-tw/aircraft/f15c/hud' },
          { text: '導航', link: '/zh-tw/aircraft/f15c/navigation' },
          { text: '火控雷達', link: '/zh-tw/aircraft/f15c/fire-control-radar' },
          { text: 'MPCD', link: '/zh-tw/aircraft/f15c/mpcd' },
          { text: 'RWR', link: '/zh-tw/aircraft/f15c/rwr' },
          { text: '武器', link: '/zh-tw/aircraft/f15c/weapons' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: '簡介', link: '/zh-tw/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: '簡介', link: '/zh-tw/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: '簡介', link: '/zh-tw/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: '簡介', link: '/zh-tw/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const jaNav = [
  { text: 'プロジェクトについて', link: '/ja/about' },
  { text: '基本操作', link: '/ja/basics/mobile-platform' },
  { text: '機体モジュール', link: '/ja/aircraft/index' },
  { text: 'FAQ', link: '/ja/faq' }
]

const jaSidebar = [
  {
    text: 'プロジェクトについて',
    items: [
      { text: 'ゲームの位置づけと開発状況', link: '/ja/about' }
    ]
  },
  {
    text: '基本操作',
    items: [
      { text: 'モバイルプラットフォーム', link: '/ja/basics/mobile-platform' },
      { text: 'VR プラットフォーム', link: '/ja/basics/vr-platform' },
      { text: 'Tac エディタ', link: '/ja/basics/tac-editor' }
    ]
  },
  {
    text: '機体モジュール',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: '概要', link: '/ja/aircraft/f15c/introduction' },
          { text: 'タッチ UI', link: '/ja/aircraft/f15c/touch-ui' },
          { text: 'HUD', link: '/ja/aircraft/f15c/hud' },
          { text: 'ナビゲーション', link: '/ja/aircraft/f15c/navigation' },
          { text: '火器管制レーダー', link: '/ja/aircraft/f15c/fire-control-radar' },
          { text: 'MPCD', link: '/ja/aircraft/f15c/mpcd' },
          { text: 'RWR', link: '/ja/aircraft/f15c/rwr' },
          { text: '武装', link: '/ja/aircraft/f15c/weapons' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: '概要', link: '/ja/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: '概要', link: '/ja/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: '概要', link: '/ja/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: '概要', link: '/ja/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const ruNav = [
  { text: 'О проекте', link: '/ru/about' },
  { text: 'Основы', link: '/ru/basics/mobile-platform' },
  { text: 'Модули самолётов', link: '/ru/aircraft/index' },
  { text: 'FAQ', link: '/ru/faq' }
]

const ruSidebar = [
  {
    text: 'О проекте',
    items: [
      { text: 'Позиционирование и статус разработки', link: '/ru/about' }
    ]
  },
  {
    text: 'Основы',
    items: [
      { text: 'Мобильная платформа', link: '/ru/basics/mobile-platform' },
      { text: 'VR платформа', link: '/ru/basics/vr-platform' },
      { text: 'Tac Редактор', link: '/ru/basics/tac-editor' }
    ]
  },
  {
    text: 'Модули самолётов',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: 'Введение', link: '/ru/aircraft/f15c/introduction' },
          { text: 'Сенсорный UI', link: '/ru/aircraft/f15c/touch-ui' },
          { text: 'HUD', link: '/ru/aircraft/f15c/hud' },
          { text: 'Навигация', link: '/ru/aircraft/f15c/navigation' },
          { text: 'Радар управления огнём', link: '/ru/aircraft/f15c/fire-control-radar' },
          { text: 'MPCD', link: '/ru/aircraft/f15c/mpcd' },
          { text: 'RWR', link: '/ru/aircraft/f15c/rwr' },
          { text: 'Вооружение', link: '/ru/aircraft/f15c/weapons' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: 'Введение', link: '/ru/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: 'Введение', link: '/ru/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: 'Введение', link: '/ru/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: 'Введение', link: '/ru/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const deNav = [
  { text: 'Über das Projekt', link: '/de/about' },
  { text: 'Grundlagen', link: '/de/basics/mobile-platform' },
  { text: 'Flugzeugmodule', link: '/de/aircraft/index' },
  { text: 'FAQ', link: '/de/faq' }
]

const deSidebar = [
  {
    text: 'Über das Projekt',
    items: [
      { text: 'Spielpositionierung und Entwicklungsstand', link: '/de/about' }
    ]
  },
  {
    text: 'Grundlagen',
    items: [
      { text: 'Mobile Plattform', link: '/de/basics/mobile-platform' },
      { text: 'VR Plattform', link: '/de/basics/vr-platform' },
      { text: 'Tac Editor', link: '/de/basics/tac-editor' }
    ]
  },
  {
    text: 'Flugzeugmodule',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: 'Einführung', link: '/de/aircraft/f15c/introduction' },
          { text: 'Touch UI', link: '/de/aircraft/f15c/touch-ui' },
          { text: 'HUD', link: '/de/aircraft/f15c/hud' },
          { text: 'Navigation', link: '/de/aircraft/f15c/navigation' },
          { text: 'Feuerleitradar', link: '/de/aircraft/f15c/fire-control-radar' },
          { text: 'MPCD', link: '/de/aircraft/f15c/mpcd' },
          { text: 'RWR', link: '/de/aircraft/f15c/rwr' },
          { text: 'Waffen', link: '/de/aircraft/f15c/weapons' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: 'Einführung', link: '/de/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: 'Einführung', link: '/de/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: 'Einführung', link: '/de/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: 'Einführung', link: '/de/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const esNav = [
  { text: 'Acerca de', link: '/es/about' },
  { text: 'Conceptos básicos', link: '/es/basics/mobile-platform' },
  { text: 'Módulos de aeronaves', link: '/es/aircraft/index' },
  { text: 'FAQ', link: '/es/faq' }
]

const esSidebar = [
  {
    text: 'Acerca de',
    items: [
      { text: 'Posicionamiento y estado de desarrollo', link: '/es/about' }
    ]
  },
  {
    text: 'Conceptos básicos',
    items: [
      { text: 'Plataforma móvil', link: '/es/basics/mobile-platform' },
      { text: 'Plataforma VR', link: '/es/basics/vr-platform' },
      { text: 'Editor Tac', link: '/es/basics/tac-editor' }
    ]
  },
  {
    text: 'Módulos de aeronaves',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: 'Introducción', link: '/es/aircraft/f15c/introduction' },
          { text: 'Interfaz táctil', link: '/es/aircraft/f15c/touch-ui' },
          { text: 'HUD', link: '/es/aircraft/f15c/hud' },
          { text: 'Navegación', link: '/es/aircraft/f15c/navigation' },
          { text: 'Radar de control de tiro', link: '/es/aircraft/f15c/fire-control-radar' },
          { text: 'MPCD', link: '/es/aircraft/f15c/mpcd' },
          { text: 'RWR', link: '/es/aircraft/f15c/rwr' },
          { text: 'Armas', link: '/es/aircraft/f15c/weapons' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: 'Introducción', link: '/es/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: 'Introducción', link: '/es/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: 'Introducción', link: '/es/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: 'Introducción', link: '/es/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const frNav = [
  { text: 'À propos', link: '/fr/about' },
  { text: 'Bases', link: '/fr/basics/mobile-platform' },
  { text: 'Modules d\'aéronefs', link: '/fr/aircraft/index' },
  { text: 'FAQ', link: '/fr/faq' }
]

const frSidebar = [
  {
    text: 'À propos',
    items: [
      { text: 'Positionnement du jeu et état du développement', link: '/fr/about' }
    ]
  },
  {
    text: 'Bases',
    items: [
      { text: 'Plateforme mobile', link: '/fr/basics/mobile-platform' },
      { text: 'Plateforme VR', link: '/fr/basics/vr-platform' },
      { text: 'Éditeur Tac', link: '/fr/basics/tac-editor' }
    ]
  },
  {
    text: 'Modules d\'aéronefs',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/fr/aircraft/f15c/introduction' },
          { text: 'Interface tactile', link: '/fr/aircraft/f15c/touch-ui' },
          { text: 'HUD', link: '/fr/aircraft/f15c/hud' },
          { text: 'Navigation', link: '/fr/aircraft/f15c/navigation' },
          { text: 'Radar de conduite de tir', link: '/fr/aircraft/f15c/fire-control-radar' },
          { text: 'MPCD', link: '/fr/aircraft/f15c/mpcd' },
          { text: 'RWR', link: '/fr/aircraft/f15c/rwr' },
          { text: 'Armement', link: '/fr/aircraft/f15c/weapons' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/fr/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/fr/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/fr/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/fr/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const koNav = [
  { text: '프로젝트 소개', link: '/ko/about' },
  { text: '기본 조작', link: '/ko/basics/mobile-platform' },
  { text: '항공기 모듈', link: '/ko/aircraft/index' },
  { text: 'FAQ', link: '/ko/faq' }
]

const koSidebar = [
  {
    text: '프로젝트 소개',
    items: [
      { text: '게임 포지셔닝 및 개발 현황', link: '/ko/about' }
    ]
  },
  {
    text: '기본 조작',
    items: [
      { text: '모바일 플랫폼', link: '/ko/basics/mobile-platform' },
      { text: 'VR 플랫폼', link: '/ko/basics/vr-platform' },
      { text: 'Tac 에디터', link: '/ko/basics/tac-editor' }
    ]
  },
  {
    text: '항공기 모듈',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: '소개', link: '/ko/aircraft/f15c/introduction' },
          { text: '터치 UI', link: '/ko/aircraft/f15c/touch-ui' },
          { text: 'HUD', link: '/ko/aircraft/f15c/hud' },
          { text: '항법', link: '/ko/aircraft/f15c/navigation' },
          { text: '화기관제 레이더', link: '/ko/aircraft/f15c/fire-control-radar' },
          { text: 'MPCD', link: '/ko/aircraft/f15c/mpcd' },
          { text: 'RWR', link: '/ko/aircraft/f15c/rwr' },
          { text: '무장', link: '/ko/aircraft/f15c/weapons' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: '소개', link: '/ko/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: '소개', link: '/ko/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: '소개', link: '/ko/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: '소개', link: '/ko/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

export default defineConfig({
  title: 'Red Flag Sim',
  description: '官方文档',
  base: '/Docs/',
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Red Flag Sim',
      description: 'Official Documentation',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        lastUpdated: {
          text: 'Last Updated',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'short'
          }
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'Red Flag Sim',
      description: '官方文档',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        lastUpdated: {
          text: '最后更新',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'short'
          }
        }
      }
    },
    zhTW: {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-tw/',
      title: 'Red Flag Sim',
      description: '官方文件',
      themeConfig: {
        nav: zhTwNav,
        sidebar: zhTwSidebar,
        lastUpdated: {
          text: '最後更新',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'short'
          }
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      title: 'Red Flag Sim',
      description: '公式ドキュメント',
      themeConfig: {
        nav: jaNav,
        sidebar: jaSidebar,
        lastUpdated: {
          text: '最終更新日',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'short'
          }
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/',
      title: 'Red Flag Sim',
      description: 'Официальная документация',
      themeConfig: {
        nav: ruNav,
        sidebar: ruSidebar,
        lastUpdated: {
          text: 'Последнее обновление',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'short'
          }
        }
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      link: '/de/',
      title: 'Red Flag Sim',
      description: 'Offizielle Dokumentation',
      themeConfig: {
        nav: deNav,
        sidebar: deSidebar,
        lastUpdated: {
          text: 'Zuletzt aktualisiert',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'short'
          }
        }
      }
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/',
      title: 'Red Flag Sim',
      description: 'Documentación oficial',
      themeConfig: {
        nav: esNav,
        sidebar: esSidebar,
        lastUpdated: {
          text: 'Última actualización',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'short'
          }
        }
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/',
      title: 'Red Flag Sim',
      description: 'Documentation officielle',
      themeConfig: {
        nav: frNav,
        sidebar: frSidebar,
        lastUpdated: {
          text: 'Dernière mise à jour',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'short'
          }
        }
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      link: '/ko/',
      title: 'Red Flag Sim',
      description: '공식 문서',
      themeConfig: {
        nav: koNav,
        sidebar: koSidebar,
        lastUpdated: {
          text: '마지막 업데이트',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'short'
          }
        }
      }
    }
  },
  themeConfig: {
    nav: enNav,
    sidebar: enSidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RedFlagSim/Docs' },
      { icon: 'instagram', link: 'https://www.instagram.com/carrier_landing_hd/' }
    ],
    search: {
      provider: 'local'
    }
  }
})
