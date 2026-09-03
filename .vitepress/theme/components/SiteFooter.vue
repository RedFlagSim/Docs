<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { frontmatter, lang } = useData()
const isHome = computed(() => frontmatter.value.layout === 'home')

type FooterCopy = {
  prefix: string
  docs: [string, string, string, string]
  blog: [string, string, string]
  support: [string, string, string, string]
}

const copies: Record<string, FooterCopy> = {
  'en-US': {
    prefix: '',
    docs: ['Basics', 'Game Systems', 'F-15C Flight Manual', 'FAQ'],
    blog: ['All Posts', 'Platform and Multiplayer Roadmap', 'Website Restructure Notes'],
    support: ['Support Center', 'Feedback', 'Privacy Policy', 'Developer Email']
  },
  'zh-CN': {
    prefix: '/zh',
    docs: ['基础操作', '游戏系统', 'F-15C 飞行手册', '常见问题'],
    blog: ['全部文章', '平台与联机路线图', '网站结构调整说明'],
    support: ['支持中心', '用户反馈', '隐私政策', '开发者邮箱']
  },
  'zh-TW': {
    prefix: '/zh-tw',
    docs: ['基礎操作', '遊戲系統', 'F-15C 飛行手冊', '常見問題'],
    blog: ['全部文章', '平台與多人連線路線圖', '網站架構調整說明'],
    support: ['支援中心', '用戶反饋', '隱私政策', '開發者信箱']
  },
  'ja-JP': {
    prefix: '/ja',
    docs: ['基本操作', 'ゲームシステム', 'F-15C フライトマニュアル', 'よくある質問'],
    blog: ['すべての記事', 'プラットフォームとマルチプレイのロードマップ', 'Webサイト構成変更のお知らせ'],
    support: ['サポートセンター', 'フィードバック', 'プライバシーポリシー', '開発者メール']
  },
  'ru-RU': {
    prefix: '/ru',
    docs: ['Основы', 'Игровые системы', 'Руководство F-15C', 'Частые вопросы'],
    blog: ['Все записи', 'План платформ и сетевой игры', 'Обновление структуры сайта'],
    support: ['Центр поддержки', 'Обратная связь', 'Политика конфиденциальности', 'Email разработчика']
  },
  'de-DE': {
    prefix: '/de',
    docs: ['Grundlagen', 'Spielsysteme', 'F-15C-Flughandbuch', 'FAQ'],
    blog: ['Alle Beiträge', 'Plattform- und Multiplayer-Roadmap', 'Hinweise zur neuen Website-Struktur'],
    support: ['Support-Center', 'Feedback', 'Datenschutzerklärung', 'Entwickler-E-Mail']
  },
  'es-ES': {
    prefix: '/es',
    docs: ['Conceptos básicos', 'Sistemas de juego', 'Manual de vuelo del F-15C', 'Preguntas frecuentes'],
    blog: ['Todos los artículos', 'Hoja de ruta de plataformas y multijugador', 'Actualización de la estructura del sitio'],
    support: ['Centro de soporte', 'Comentarios', 'Política de privacidad', 'Correo del desarrollador']
  },
  'fr-FR': {
    prefix: '/fr',
    docs: ['Bases', 'Systèmes de jeu', 'Manuel de vol du F-15C', 'FAQ'],
    blog: ['Tous les articles', 'Feuille de route plateformes et multijoueur', 'Évolution de la structure du site'],
    support: ['Centre de support', 'Commentaires', 'Politique de confidentialité', 'E-mail du développeur']
  },
  'ko-KR': {
    prefix: '/ko',
    docs: ['기본 조작', '게임 시스템', 'F-15C 비행 매뉴얼', '자주 묻는 질문'],
    blog: ['전체 글', '플랫폼 및 멀티플레이 로드맵', '웹사이트 구조 개편 안내'],
    support: ['지원 센터', '사용자 의견', '개인정보 처리방침', '개발자 이메일']
  }
}

const copy = computed(() => copies[lang.value] ?? copies['en-US'])
const groups = computed(() => {
  const prefix = copy.value.prefix
  return [
    {
      title: 'Docs',
      links: [
        [copy.value.docs[0], `${prefix}/Docs/basics/mobile-platform`],
        [copy.value.docs[1], `${prefix}/Docs/game/index`],
        [copy.value.docs[2], `${prefix}/Docs/aircraft/f15c/introduction`],
        [copy.value.docs[3], `${prefix}/faq`]
      ]
    },
    {
      title: 'Dev Blog',
      links: [
        [copy.value.blog[0], `${prefix}/blog/`],
        [copy.value.blog[1], `${prefix}/blog/2026-08-11-platform-roadmap`],
        [copy.value.blog[2], `${prefix}/blog/2026-08-10-website-structure`]
      ]
    },
    {
      title: 'Support',
      links: [
        [copy.value.support[0], `${prefix}/support/`],
        [copy.value.support[1], `${prefix}/feedback`],
        [copy.value.support[2], `${prefix}/privacy-policy`],
        ['Instagram', 'https://www.instagram.com/carrier_landing_hd/'],
        [copy.value.support[3], 'mailto:support@redflagsim.com']
      ]
    }
  ]
})

const isExternal = (href: string) => href.startsWith('http')
const isAbsolute = (href: string) => isExternal(href) || href.startsWith('mailto:')
const hrefFor = (href: string) => isAbsolute(href) ? href : withBase(href)
</script>

<template>
  <footer v-if="isHome" class="rfs-site-footer" aria-label="Sitemap">
    <div class="rfs-site-footer__container">
      <section v-for="group in groups" :key="group.title" class="rfs-site-footer__group">
        <h2>{{ group.title }}</h2>
        <ul>
          <li v-for="link in group.links" :key="link[0]">
            <a
              :href="hrefFor(link[1])"
              :target="isExternal(link[1]) ? '_blank' : undefined"
              :rel="isExternal(link[1]) ? 'noreferrer' : undefined"
            >
              {{ link[0] }}<span v-if="isExternal(link[1])" aria-hidden="true"> ↗</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
    <div class="rfs-site-footer__legal">
      <p>RedFlagSim</p>
      <p>Copyright © 2026 RedFlagSim</p>
    </div>
  </footer>
</template>
