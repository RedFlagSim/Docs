
import { defineConfig } from 'vitepress'

const docsRewrites = {
  'basics/:path*': 'Docs/basics/:path*',
  'game/:path*': 'Docs/game/:path*',
  'aircraft/:path*': 'Docs/aircraft/:path*',
  'zh/basics/:path*': 'zh/Docs/basics/:path*',
  'zh/game/:path*': 'zh/Docs/game/:path*',
  'zh/aircraft/:path*': 'zh/Docs/aircraft/:path*',
  'zh-tw/basics/:path*': 'zh-tw/Docs/basics/:path*',
  'zh-tw/game/:path*': 'zh-tw/Docs/game/:path*',
  'zh-tw/aircraft/:path*': 'zh-tw/Docs/aircraft/:path*',
  'ja/basics/:path*': 'ja/Docs/basics/:path*',
  'ja/game/:path*': 'ja/Docs/game/:path*',
  'ja/aircraft/:path*': 'ja/Docs/aircraft/:path*',
  'ru/basics/:path*': 'ru/Docs/basics/:path*',
  'ru/game/:path*': 'ru/Docs/game/:path*',
  'ru/aircraft/:path*': 'ru/Docs/aircraft/:path*',
  'de/basics/:path*': 'de/Docs/basics/:path*',
  'de/game/:path*': 'de/Docs/game/:path*',
  'de/aircraft/:path*': 'de/Docs/aircraft/:path*',
  'es/basics/:path*': 'es/Docs/basics/:path*',
  'es/game/:path*': 'es/Docs/game/:path*',
  'es/aircraft/:path*': 'es/Docs/aircraft/:path*',
  'fr/basics/:path*': 'fr/Docs/basics/:path*',
  'fr/game/:path*': 'fr/Docs/game/:path*',
  'fr/aircraft/:path*': 'fr/Docs/aircraft/:path*',
  'ko/basics/:path*': 'ko/Docs/basics/:path*',
  'ko/game/:path*': 'ko/Docs/game/:path*',
  'ko/aircraft/:path*': 'ko/Docs/aircraft/:path*'
}

const enNav = [
  { text: 'Docs', link: '/Docs/' },
  { text: 'Dev Blog', link: '/blog/' },
  { text: 'Support', link: '/support/' }
]

const enSidebar = [
  {
    text: 'Basics',
    items: [
      { text: 'Mobile Platform', link: '/Docs/basics/mobile-platform' },
      { text: 'VR Platform', link: '/Docs/basics/vr-platform' },
      { text: 'Game Controller', link: '/Docs/basics/game-controller' }
    ]
  },
  {
    text: 'Game',
    items: [
      { text: 'Overview', link: '/Docs/game/index' },
      { text: 'Account & Profile', link: '/Docs/game/account-profile' },
      { text: 'Career XP', link: '/Docs/game/career-xp' },
      { text: 'Qualifications', link: '/Docs/game/qualifications' },
      { text: 'Medals', link: '/Docs/game/medals' },
      { text: 'Patches', link: '/Docs/game/patches' },
      { text: 'Tac Editor', link: '/Docs/basics/tac-editor' }
    ]
  },
  {
    text: 'Aircraft Modules',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/Docs/aircraft/f15c/introduction' },
          { text: 'Touch UI', link: '/Docs/aircraft/f15c/touch-ui' },
          { text: 'Cockpit Instruments', link: '/Docs/aircraft/f15c/cockpit-instruments' },
          { text: 'HUD Operation', link: '/Docs/aircraft/f15c/hud-operation' },
          { text: 'AN/APG-63 Radar and VSD', link: '/Docs/aircraft/f15c/radar' },
          { text: 'Defensive Systems', link: '/Docs/aircraft/f15c/defensive-systems' },
          { text: 'Appendix: Acronyms', link: '/Docs/aircraft/f15c/appendix' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/Docs/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/Docs/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/Docs/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/Docs/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const zhNav = [
  { text: 'Docs', link: '/zh/Docs/' },
  { text: 'Dev Blog', link: '/zh/blog/' },
  { text: '支持', link: '/zh/support/' }
]

const zhSidebar = [
  {
    text: '基础操作',
    items: [
      { text: '移动平台', link: '/zh/Docs/basics/mobile-platform' },
      { text: 'VR 平台', link: '/zh/Docs/basics/vr-platform' },
      { text: '游戏手柄', link: '/zh/Docs/basics/game-controller' }
    ]
  },
  {
    text: '游戏',
    items: [
      { text: '概览', link: '/zh/Docs/game/index' },
      { text: '账号与资料', link: '/zh/Docs/game/account-profile' },
      { text: '生涯 XP', link: '/zh/Docs/game/career-xp' },
      { text: '认证资质', link: '/zh/Docs/game/qualifications' },
      { text: '奖牌', link: '/zh/Docs/game/medals' },
      { text: '臂章', link: '/zh/Docs/game/patches' },
      { text: 'Tac 编辑器', link: '/zh/Docs/basics/tac-editor' }
    ]
  },
  {
    text: '飞机模组',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: '简介', link: '/zh/Docs/aircraft/f15c/introduction' },
          { text: '触摸 UI', link: '/zh/Docs/aircraft/f15c/touch-ui' },
          { text: '驾驶舱仪表', link: '/zh/Docs/aircraft/f15c/cockpit-instruments' },
          { text: 'HUD 操作', link: '/zh/Docs/aircraft/f15c/hud-operation' },
          { text: 'AN/APG-63雷达和VSD', link: '/zh/Docs/aircraft/f15c/radar' },
          { text: 'MPCD', link: '/zh/Docs/aircraft/f15c/mpcd' },
          { text: '对抗系统', link: '/zh/Docs/aircraft/f15c/defensive-systems' },
          { text: '附录：缩略词', link: '/zh/Docs/aircraft/f15c/appendix' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: '简介', link: '/zh/Docs/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: '简介', link: '/zh/Docs/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: '简介', link: '/zh/Docs/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: '简介', link: '/zh/Docs/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const zhTwNav = [
  { text: 'Docs', link: '/zh-tw/Docs/' },
  { text: 'Dev Blog', link: '/zh-tw/blog/' },
  { text: '支援', link: '/zh-tw/support/' }
]

const zhTwSidebar = [
  {
    text: '基礎操作',
    items: [
      { text: '移動平台', link: '/zh-tw/Docs/basics/mobile-platform' },
      { text: 'VR 平台', link: '/zh-tw/Docs/basics/vr-platform' },
      { text: '遊戲手把', link: '/zh-tw/Docs/basics/game-controller' }
    ]
  },
  {
    text: '遊戲',
    items: [
      { text: '概覽', link: '/zh-tw/Docs/game/index' },
      { text: '帳號與資料', link: '/zh-tw/Docs/game/account-profile' },
      { text: '生涯 XP', link: '/zh-tw/Docs/game/career-xp' },
      { text: '認證資質', link: '/zh-tw/Docs/game/qualifications' },
      { text: '獎牌', link: '/zh-tw/Docs/game/medals' },
      { text: '臂章', link: '/zh-tw/Docs/game/patches' },
      { text: 'Tac 編輯器', link: '/zh-tw/Docs/basics/tac-editor' }
    ]
  },
  {
    text: '飛機模組',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: '簡介', link: '/zh-tw/Docs/aircraft/f15c/introduction' },
          { text: '觸控 UI', link: '/zh-tw/Docs/aircraft/f15c/touch-ui' },
          { text: '駕駛艙儀表', link: '/zh-tw/Docs/aircraft/f15c/cockpit-instruments' },
          { text: 'HUD 操作', link: '/zh-tw/Docs/aircraft/f15c/hud-operation' },
          { text: 'AN/APG-63雷達與VSD', link: '/zh-tw/Docs/aircraft/f15c/radar' },
          { text: '防禦系統', link: '/zh-tw/Docs/aircraft/f15c/defensive-systems' },
          { text: '附錄：縮寫', link: '/zh-tw/Docs/aircraft/f15c/appendix' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: '簡介', link: '/zh-tw/Docs/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: '簡介', link: '/zh-tw/Docs/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: '簡介', link: '/zh-tw/Docs/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: '簡介', link: '/zh-tw/Docs/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const jaNav = [
  { text: 'Docs', link: '/ja/Docs/' },
  { text: 'Dev Blog', link: '/ja/blog/' },
  { text: 'サポート', link: '/ja/support/' }
]

const jaSidebar = [
  {
    text: '基本操作',
    items: [
      { text: 'モバイルプラットフォーム', link: '/ja/Docs/basics/mobile-platform' },
      { text: 'VR プラットフォーム', link: '/ja/Docs/basics/vr-platform' },
      { text: 'ゲームコントローラー', link: '/ja/Docs/basics/game-controller' }
    ]
  },
  {
    text: 'ゲーム',
    items: [
      { text: '概要', link: '/ja/Docs/game/index' },
      { text: 'アカウントとプロフィール', link: '/ja/Docs/game/account-profile' },
      { text: 'キャリア XP', link: '/ja/Docs/game/career-xp' },
      { text: '資格', link: '/ja/Docs/game/qualifications' },
      { text: 'メダル', link: '/ja/Docs/game/medals' },
      { text: 'パッチ', link: '/ja/Docs/game/patches' },
      { text: 'Tac エディタ', link: '/ja/Docs/basics/tac-editor' }
    ]
  },
  {
    text: '機体モジュール',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: '概要', link: '/ja/Docs/aircraft/f15c/introduction' },
          { text: 'タッチ UI', link: '/ja/Docs/aircraft/f15c/touch-ui' },
          { text: 'コックピット計器', link: '/ja/Docs/aircraft/f15c/cockpit-instruments' },
          { text: 'HUD 操作', link: '/ja/Docs/aircraft/f15c/hud-operation' },
          { text: 'AN/APG-63 レーダーとVSD', link: '/ja/Docs/aircraft/f15c/radar' },
          { text: '防御システム', link: '/ja/Docs/aircraft/f15c/defensive-systems' },
          { text: '付録：略語', link: '/ja/Docs/aircraft/f15c/appendix' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: '概要', link: '/ja/Docs/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: '概要', link: '/ja/Docs/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: '概要', link: '/ja/Docs/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: '概要', link: '/ja/Docs/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const ruNav = [
  { text: 'Docs', link: '/ru/Docs/' },
  { text: 'Dev Blog', link: '/ru/blog/' },
  { text: 'Поддержка', link: '/ru/support/' }
]

const ruSidebar = [
  {
    text: 'Основы',
    items: [
      { text: 'Мобильная платформа', link: '/ru/Docs/basics/mobile-platform' },
      { text: 'VR платформа', link: '/ru/Docs/basics/vr-platform' },
      { text: 'Геймпад', link: '/ru/Docs/basics/game-controller' }
    ]
  },
  {
    text: 'Игра',
    items: [
      { text: 'Обзор', link: '/ru/Docs/game/index' },
      { text: 'Аккаунт и профиль', link: '/ru/Docs/game/account-profile' },
      { text: 'Career XP', link: '/ru/Docs/game/career-xp' },
      { text: 'Квалификации', link: '/ru/Docs/game/qualifications' },
      { text: 'Медали', link: '/ru/Docs/game/medals' },
      { text: 'Нашивки', link: '/ru/Docs/game/patches' },
      { text: 'Tac Редактор', link: '/ru/Docs/basics/tac-editor' }
    ]
  },
  {
    text: 'Модули самолётов',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: 'Введение', link: '/ru/Docs/aircraft/f15c/introduction' },
          { text: 'Сенсорный UI', link: '/ru/Docs/aircraft/f15c/touch-ui' },
          { text: 'Приборы кабины', link: '/ru/Docs/aircraft/f15c/cockpit-instruments' },
          { text: 'Работа с HUD', link: '/ru/Docs/aircraft/f15c/hud-operation' },
          { text: 'РЛС AN/APG-63 и VSD', link: '/ru/Docs/aircraft/f15c/radar' },
          { text: 'Оборонительные системы', link: '/ru/Docs/aircraft/f15c/defensive-systems' },
          { text: 'Приложение: сокращения', link: '/ru/Docs/aircraft/f15c/appendix' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: 'Введение', link: '/ru/Docs/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: 'Введение', link: '/ru/Docs/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: 'Введение', link: '/ru/Docs/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: 'Введение', link: '/ru/Docs/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const deNav = [
  { text: 'Docs', link: '/de/Docs/' },
  { text: 'Dev Blog', link: '/de/blog/' },
  { text: 'Support', link: '/de/support/' }
]

const deSidebar = [
  {
    text: 'Grundlagen',
    items: [
      { text: 'Mobile Plattform', link: '/de/Docs/basics/mobile-platform' },
      { text: 'VR Plattform', link: '/de/Docs/basics/vr-platform' },
      { text: 'Gamecontroller', link: '/de/Docs/basics/game-controller' }
    ]
  },
  {
    text: 'Spiel',
    items: [
      { text: 'Übersicht', link: '/de/Docs/game/index' },
      { text: 'Konto & Profil', link: '/de/Docs/game/account-profile' },
      { text: 'Career XP', link: '/de/Docs/game/career-xp' },
      { text: 'Qualifikationen', link: '/de/Docs/game/qualifications' },
      { text: 'Medaillen', link: '/de/Docs/game/medals' },
      { text: 'Patches', link: '/de/Docs/game/patches' },
      { text: 'Tac Editor', link: '/de/Docs/basics/tac-editor' }
    ]
  },
  {
    text: 'Flugzeugmodule',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: 'Einführung', link: '/de/Docs/aircraft/f15c/introduction' },
          { text: 'Touch UI', link: '/de/Docs/aircraft/f15c/touch-ui' },
          { text: 'Cockpit-Instrumente', link: '/de/Docs/aircraft/f15c/cockpit-instruments' },
          { text: 'HUD-Bedienung', link: '/de/Docs/aircraft/f15c/hud-operation' },
          { text: 'AN/APG-63 Radar und VSD', link: '/de/Docs/aircraft/f15c/radar' },
          { text: 'Defensivsysteme', link: '/de/Docs/aircraft/f15c/defensive-systems' },
          { text: 'Anhang: Abkürzungen', link: '/de/Docs/aircraft/f15c/appendix' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: 'Einführung', link: '/de/Docs/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: 'Einführung', link: '/de/Docs/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: 'Einführung', link: '/de/Docs/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: 'Einführung', link: '/de/Docs/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const esNav = [
  { text: 'Docs', link: '/es/Docs/' },
  { text: 'Dev Blog', link: '/es/blog/' },
  { text: 'Soporte', link: '/es/support/' }
]

const esSidebar = [
  {
    text: 'Conceptos básicos',
    items: [
      { text: 'Plataforma móvil', link: '/es/Docs/basics/mobile-platform' },
      { text: 'Plataforma VR', link: '/es/Docs/basics/vr-platform' },
      { text: 'Mando de juego', link: '/es/Docs/basics/game-controller' }
    ]
  },
  {
    text: 'Juego',
    items: [
      { text: 'Resumen', link: '/es/Docs/game/index' },
      { text: 'Cuenta y perfil', link: '/es/Docs/game/account-profile' },
      { text: 'Career XP', link: '/es/Docs/game/career-xp' },
      { text: 'Calificaciones', link: '/es/Docs/game/qualifications' },
      { text: 'Medallas', link: '/es/Docs/game/medals' },
      { text: 'Parches', link: '/es/Docs/game/patches' },
      { text: 'Editor Tac', link: '/es/Docs/basics/tac-editor' }
    ]
  },
  {
    text: 'Módulos de aeronaves',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: 'Introducción', link: '/es/Docs/aircraft/f15c/introduction' },
          { text: 'Interfaz táctil', link: '/es/Docs/aircraft/f15c/touch-ui' },
          { text: 'Instrumentos de cabina', link: '/es/Docs/aircraft/f15c/cockpit-instruments' },
          { text: 'Operación del HUD', link: '/es/Docs/aircraft/f15c/hud-operation' },
          { text: 'Radar AN/APG-63 y VSD', link: '/es/Docs/aircraft/f15c/radar' },
          { text: 'Sistemas defensivos', link: '/es/Docs/aircraft/f15c/defensive-systems' },
          { text: 'Apéndice: abreviaturas', link: '/es/Docs/aircraft/f15c/appendix' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: 'Introducción', link: '/es/Docs/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: 'Introducción', link: '/es/Docs/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: 'Introducción', link: '/es/Docs/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: 'Introducción', link: '/es/Docs/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const frNav = [
  { text: 'Docs', link: '/fr/Docs/' },
  { text: 'Dev Blog', link: '/fr/blog/' },
  { text: 'Support', link: '/fr/support/' }
]

const frSidebar = [
  {
    text: 'Bases',
    items: [
      { text: 'Plateforme mobile', link: '/fr/Docs/basics/mobile-platform' },
      { text: 'Plateforme VR', link: '/fr/Docs/basics/vr-platform' },
      { text: 'Manette de jeu', link: '/fr/Docs/basics/game-controller' }
    ]
  },
  {
    text: 'Jeu',
    items: [
      { text: 'Vue d\'ensemble', link: '/fr/Docs/game/index' },
      { text: 'Compte et profil', link: '/fr/Docs/game/account-profile' },
      { text: 'Career XP', link: '/fr/Docs/game/career-xp' },
      { text: 'Qualifications', link: '/fr/Docs/game/qualifications' },
      { text: 'Médailles', link: '/fr/Docs/game/medals' },
      { text: 'Patchs', link: '/fr/Docs/game/patches' },
      { text: 'Éditeur Tac', link: '/fr/Docs/basics/tac-editor' }
    ]
  },
  {
    text: 'Modules d\'aéronefs',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/fr/Docs/aircraft/f15c/introduction' },
          { text: 'Interface tactile', link: '/fr/Docs/aircraft/f15c/touch-ui' },
          { text: 'Instruments du cockpit', link: '/fr/Docs/aircraft/f15c/cockpit-instruments' },
          { text: 'Utilisation du HUD', link: '/fr/Docs/aircraft/f15c/hud-operation' },
          { text: 'Radar AN/APG-63 et VSD', link: '/fr/Docs/aircraft/f15c/radar' },
          { text: 'Systèmes défensifs', link: '/fr/Docs/aircraft/f15c/defensive-systems' },
          { text: 'Annexe : abréviations', link: '/fr/Docs/aircraft/f15c/appendix' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/fr/Docs/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/fr/Docs/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/fr/Docs/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/fr/Docs/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

const koNav = [
  { text: 'Docs', link: '/ko/Docs/' },
  { text: 'Dev Blog', link: '/ko/blog/' },
  { text: '지원', link: '/ko/support/' }
]

const koSidebar = [
  {
    text: '기본 조작',
    items: [
      { text: '모바일 플랫폼', link: '/ko/Docs/basics/mobile-platform' },
      { text: 'VR 플랫폼', link: '/ko/Docs/basics/vr-platform' },
      { text: '게임 컨트롤러', link: '/ko/Docs/basics/game-controller' }
    ]
  },
  {
    text: '게임',
    items: [
      { text: '개요', link: '/ko/Docs/game/index' },
      { text: '계정 및 프로필', link: '/ko/Docs/game/account-profile' },
      { text: 'Career XP', link: '/ko/Docs/game/career-xp' },
      { text: '자격', link: '/ko/Docs/game/qualifications' },
      { text: '메달', link: '/ko/Docs/game/medals' },
      { text: '패치', link: '/ko/Docs/game/patches' },
      { text: 'Tac 에디터', link: '/ko/Docs/basics/tac-editor' }
    ]
  },
  {
    text: '항공기 모듈',
    items: [
      {
        text: 'F-15C',
        collapsed: false,
        items: [
          { text: '소개', link: '/ko/Docs/aircraft/f15c/introduction' },
          { text: '터치 UI', link: '/ko/Docs/aircraft/f15c/touch-ui' },
          { text: '조종석 계기', link: '/ko/Docs/aircraft/f15c/cockpit-instruments' },
          { text: 'HUD 운용', link: '/ko/Docs/aircraft/f15c/hud-operation' },
          { text: 'AN/APG-63 레이더 및 VSD', link: '/ko/Docs/aircraft/f15c/radar' },
          { text: '방어 시스템', link: '/ko/Docs/aircraft/f15c/defensive-systems' },
          { text: '부록: 약어', link: '/ko/Docs/aircraft/f15c/appendix' }
        ]
      },
      {
        text: 'F-5E',
        collapsed: false,
        items: [
          { text: '소개', link: '/ko/Docs/aircraft/f5e/introduction' }
        ]
      },
      {
        text: 'F-16C',
        collapsed: false,
        items: [
          { text: '소개', link: '/ko/Docs/aircraft/f16c/introduction' }
        ]
      },
      {
        text: 'A-10C',
        collapsed: false,
        items: [
          { text: '소개', link: '/ko/Docs/aircraft/a10c/introduction' }
        ]
      },
      {
        text: 'F-15E',
        collapsed: false,
        items: [
          { text: '소개', link: '/ko/Docs/aircraft/f15e/introduction' }
        ]
      }
    ]
  }
]

export default defineConfig({
  title: 'Red Flag Sim',
  description: '官方网站',
  base: '/',
  rewrites: docsRewrites,
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Red Flag Sim',
      description: 'Official Website',
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
      description: '官方网站',
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
    'zh-tw': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-tw/',
      title: 'Red Flag Sim',
      description: '官方網站',
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
      description: '公式サイト',
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
      description: 'Официальный сайт',
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
      description: 'Offizielle Website',
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
      description: 'Sitio web oficial',
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
      description: 'Site officiel',
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
      description: '공식 웹사이트',
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
      { icon: 'instagram', link: 'https://www.instagram.com/carrier_landing_hd/' },
      { icon: 'youtube', link: 'https://youtube.com/channel/UC65kVO7otf4-oSQJ1ISTQhA' }
    ],
    search: {
      provider: 'local'
    }
  }
})
