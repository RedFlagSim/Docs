<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useData, withBase } from 'vitepress'
import { promoVideos } from '../data/promoVideos'

const { lang } = useData()

type HomeCopy = {
  prefix: string
  subtitle: string[]
  about: string
  promo: string
  promoGallery: string
  gallery: string
  screenshot: string
  closeGallery: string
  previousScreenshot: string
  nextScreenshot: string
  storesLabel: string
  appStore: string
  googlePlay: string
  comingSoon: string
  vrDetail: string
  steamDetail: string
  blogLabel: string
  blogTitle: string
  allPosts: string
  dates: [string, string]
  postTitles: [string, string]
  postExcerpts: [string, string]
}

const copies: Record<string, HomeCopy> = {
  'en-US': {
    prefix: '',
    subtitle: ['High-Fidelity Flight Simulation.', 'Within Reach.'],
    about: 'What is RedFlagSim?',
    promo: 'Promo Video',
    promoGallery: 'Promo Video Gallery',
    gallery: 'Screenshot Gallery',
    screenshot: 'Screenshot',
    closeGallery: 'Close gallery',
    previousScreenshot: 'Previous screenshot',
    nextScreenshot: 'Next screenshot',
    storesLabel: 'Get the game',
    appStore: 'Open App Store',
    googlePlay: 'Open Google Play',
    comingSoon: 'Coming Soon',
    vrDetail: 'An immersive edition for Meta VR devices.',
    steamDetail: 'The desktop edition for PC and Mac.',
    blogLabel: 'Development updates',
    blogTitle: 'Latest from the Dev Blog',
    allPosts: 'View all posts',
    dates: ['August 11, 2026', 'August 10, 2026'],
    postTitles: ['Platform and Multiplayer Roadmap', 'Website Restructure Notes'],
    postExcerpts: [
      'How Red Flag Sim will expand from mobile to VR, PC, Mac, and consoles, with shared multiplayer across supported platforms.',
      'The official site is organized around Docs, Dev Blog, About, and Support so each kind of content has a clear home.'
    ]
  },
  'zh-CN': {
    prefix: '/zh',
    subtitle: ['高保真飞行模拟，', '触手可及。'],
    about: '什么是 RedFlagSim？',
    promo: '宣传视频',
    promoGallery: '宣传视频库',
    gallery: '游戏截图',
    screenshot: '游戏截图',
    closeGallery: '关闭图库',
    previousScreenshot: '上一张截图',
    nextScreenshot: '下一张截图',
    storesLabel: '获取游戏',
    appStore: '打开 App Store',
    googlePlay: '打开 Google Play',
    comingSoon: '即将推出',
    vrDetail: '面向 Meta VR 设备的沉浸式版本。',
    steamDetail: '面向 PC 与 Mac 的桌面版本。',
    blogLabel: '开发动态',
    blogTitle: 'Dev Blog 最新文章',
    allPosts: '查看全部文章',
    dates: ['2026 年 8 月 11 日', '2026 年 8 月 10 日'],
    postTitles: ['平台与联机路线图', '网站结构调整说明'],
    postExcerpts: [
      '从移动设备到 VR、PC、Mac 与主机，说明 Red Flag Sim 的平台推进顺序与全平台联网目标。',
      '官方网站围绕 Docs、Dev Blog、About 与 Support 组织，让不同内容拥有清晰入口。'
    ]
  },
  'zh-TW': {
    prefix: '/zh-tw',
    subtitle: ['高擬真飛行模擬，', '觸手可及。'],
    about: '什麼是 RedFlagSim？',
    promo: '宣傳影片',
    promoGallery: '宣傳影片庫',
    gallery: '遊戲截圖',
    screenshot: '遊戲截圖',
    closeGallery: '關閉圖庫',
    previousScreenshot: '上一張截圖',
    nextScreenshot: '下一張截圖',
    storesLabel: '取得遊戲',
    appStore: '開啟 App Store',
    googlePlay: '開啟 Google Play',
    comingSoon: '即將推出',
    vrDetail: '適用於 Meta VR 裝置的沉浸式版本。',
    steamDetail: '適用於 PC 與 Mac 的桌面版本。',
    blogLabel: '開發動態',
    blogTitle: 'Dev Blog 最新文章',
    allPosts: '查看全部文章',
    dates: ['2026 年 8 月 11 日', '2026 年 8 月 10 日'],
    postTitles: ['平台與多人連線路線圖', '網站架構調整說明'],
    postExcerpts: [
      '說明 Red Flag Sim 從行動裝置擴展至 VR、PC、Mac 與主機的平台順序及跨平台連線目標。',
      '官方網站圍繞 Docs、Dev Blog、About 與 Support 組織，讓不同內容擁有清楚入口。'
    ]
  },
  'ja-JP': {
    prefix: '/ja',
    subtitle: ['高忠実度フライトシミュレーション。', 'もっと身近に。'],
    about: 'RedFlagSim とは？',
    promo: 'プロモーション映像',
    promoGallery: 'プロモーション映像ギャラリー',
    gallery: 'スクリーンショット',
    screenshot: 'スクリーンショット',
    closeGallery: 'ギャラリーを閉じる',
    previousScreenshot: '前のスクリーンショット',
    nextScreenshot: '次のスクリーンショット',
    storesLabel: 'ゲームを入手',
    appStore: 'App Store を開く',
    googlePlay: 'Google Play を開く',
    comingSoon: '近日公開',
    vrDetail: 'Meta VR デバイス向けの没入型バージョン。',
    steamDetail: 'PC と Mac 向けのデスクトップ版。',
    blogLabel: '開発アップデート',
    blogTitle: 'Dev Blog の最新記事',
    allPosts: 'すべての記事を見る',
    dates: ['2026年8月11日', '2026年8月10日'],
    postTitles: ['プラットフォームとマルチプレイのロードマップ', 'Webサイト構成変更のお知らせ'],
    postExcerpts: [
      'モバイルから VR、PC、Mac、コンソールへ展開する順序と、対応プラットフォーム間の共通マルチプレイ構想を紹介します。',
      '公式サイトを Docs、Dev Blog、About、Support を中心とした明確な構成へ更新しました。'
    ]
  },
  'ru-RU': {
    prefix: '/ru',
    subtitle: ['Высокоточный авиасимулятор.', 'Теперь доступнее.'],
    about: 'Что такое RedFlagSim?',
    promo: 'Промо-видео',
    promoGallery: 'Галерея промо-видео',
    gallery: 'Галерея скриншотов',
    screenshot: 'Скриншот',
    closeGallery: 'Закрыть галерею',
    previousScreenshot: 'Предыдущий скриншот',
    nextScreenshot: 'Следующий скриншот',
    storesLabel: 'Получить игру',
    appStore: 'Открыть App Store',
    googlePlay: 'Открыть Google Play',
    comingSoon: 'Скоро',
    vrDetail: 'Иммерсивная версия для устройств Meta VR.',
    steamDetail: 'Настольная версия для PC и Mac.',
    blogLabel: 'Новости разработки',
    blogTitle: 'Последние записи Dev Blog',
    allPosts: 'Все записи',
    dates: ['11 августа 2026 г.', '10 августа 2026 г.'],
    postTitles: ['План платформ и сетевой игры', 'Обновление структуры сайта'],
    postExcerpts: [
      'Порядок выхода Red Flag Sim на мобильных устройствах, VR, PC, Mac и консолях, а также единая сетевая игра между платформами.',
      'Официальный сайт теперь организован вокруг Docs, Dev Blog, About и Support с понятным разделением материалов.'
    ]
  },
  'de-DE': {
    prefix: '/de',
    subtitle: ['High-Fidelity-Flugsimulation.', 'Zum Greifen nah.'],
    about: 'Was ist RedFlagSim?',
    promo: 'Promo-Video',
    promoGallery: 'Promo-Video-Galerie',
    gallery: 'Screenshot-Galerie',
    screenshot: 'Screenshot',
    closeGallery: 'Galerie schließen',
    previousScreenshot: 'Vorheriger Screenshot',
    nextScreenshot: 'Nächster Screenshot',
    storesLabel: 'Spiel herunterladen',
    appStore: 'App Store öffnen',
    googlePlay: 'Google Play öffnen',
    comingSoon: 'Demnächst',
    vrDetail: 'Eine immersive Version für Meta-VR-Geräte.',
    steamDetail: 'Die Desktop-Version für PC und Mac.',
    blogLabel: 'Entwicklungsupdates',
    blogTitle: 'Neues im Dev Blog',
    allPosts: 'Alle Beiträge',
    dates: ['11. August 2026', '10. August 2026'],
    postTitles: ['Plattform- und Multiplayer-Roadmap', 'Hinweise zur neuen Website-Struktur'],
    postExcerpts: [
      'Die geplante Erweiterung von Mobilgeräten auf VR, PC, Mac und Konsolen sowie gemeinsames Multiplayer-Spiel auf unterstützten Plattformen.',
      'Die offizielle Website ist nun klar in Docs, Dev Blog, About und Support gegliedert.'
    ]
  },
  'es-ES': {
    prefix: '/es',
    subtitle: ['Simulación de vuelo de alta fidelidad.', 'A tu alcance.'],
    about: '¿Qué es RedFlagSim?',
    promo: 'Video promocional',
    promoGallery: 'Galería de videos promocionales',
    gallery: 'Galería de capturas',
    screenshot: 'Captura de pantalla',
    closeGallery: 'Cerrar galería',
    previousScreenshot: 'Captura anterior',
    nextScreenshot: 'Captura siguiente',
    storesLabel: 'Obtén el juego',
    appStore: 'Abrir App Store',
    googlePlay: 'Abrir Google Play',
    comingSoon: 'Próximamente',
    vrDetail: 'Una edición inmersiva para dispositivos Meta VR.',
    steamDetail: 'La edición de escritorio para PC y Mac.',
    blogLabel: 'Novedades de desarrollo',
    blogTitle: 'Lo último del Dev Blog',
    allPosts: 'Ver todos los artículos',
    dates: ['11 de agosto de 2026', '10 de agosto de 2026'],
    postTitles: ['Hoja de ruta de plataformas y multijugador', 'Actualización de la estructura del sitio'],
    postExcerpts: [
      'El orden de expansión de Red Flag Sim desde móvil a VR, PC, Mac y consolas, con multijugador compartido entre plataformas compatibles.',
      'El sitio oficial ahora se organiza en Docs, Dev Blog, About y Support para ofrecer accesos claros.'
    ]
  },
  'fr-FR': {
    prefix: '/fr',
    subtitle: ['Simulation de vol haute fidélité.', 'À votre portée.'],
    about: "Qu'est-ce que RedFlagSim ?",
    promo: 'Vidéo promotionnelle',
    promoGallery: 'Galerie de vidéos promotionnelles',
    gallery: "Galerie de captures d'écran",
    screenshot: "Capture d'écran",
    closeGallery: 'Fermer la galerie',
    previousScreenshot: 'Capture précédente',
    nextScreenshot: 'Capture suivante',
    storesLabel: 'Obtenir le jeu',
    appStore: "Ouvrir l'App Store",
    googlePlay: 'Ouvrir Google Play',
    comingSoon: 'Bientôt disponible',
    vrDetail: 'Une édition immersive pour les appareils Meta VR.',
    steamDetail: 'La version ordinateur pour PC et Mac.',
    blogLabel: 'Actualités du développement',
    blogTitle: 'Derniers articles du Dev Blog',
    allPosts: 'Voir tous les articles',
    dates: ['11 août 2026', '10 août 2026'],
    postTitles: ['Feuille de route plateformes et multijoueur', 'Évolution de la structure du site'],
    postExcerpts: [
      "L'ordre d'arrivée de Red Flag Sim sur mobile, VR, PC, Mac et consoles, avec un multijoueur commun aux plateformes compatibles.",
      'Le site officiel est désormais organisé autour de Docs, Dev Blog, About et Support pour clarifier chaque type de contenu.'
    ]
  },
  'ko-KR': {
    prefix: '/ko',
    subtitle: ['고정밀 비행 시뮬레이션.', '이제 더 가까이.'],
    about: 'RedFlagSim이란?',
    promo: '홍보 영상',
    promoGallery: '홍보 영상 갤러리',
    gallery: '스크린샷 갤러리',
    screenshot: '스크린샷',
    closeGallery: '갤러리 닫기',
    previousScreenshot: '이전 스크린샷',
    nextScreenshot: '다음 스크린샷',
    storesLabel: '게임 받기',
    appStore: 'App Store 열기',
    googlePlay: 'Google Play 열기',
    comingSoon: '출시 예정',
    vrDetail: 'Meta VR 기기를 위한 몰입형 버전입니다.',
    steamDetail: 'PC 및 Mac용 데스크톱 버전입니다.',
    blogLabel: '개발 소식',
    blogTitle: 'Dev Blog 최신 글',
    allPosts: '전체 글 보기',
    dates: ['2026년 8월 11일', '2026년 8월 10일'],
    postTitles: ['플랫폼 및 멀티플레이 로드맵', '웹사이트 구조 개편 안내'],
    postExcerpts: [
      '모바일에서 VR, PC, Mac, 콘솔로 확장하는 순서와 지원 플랫폼 간 통합 멀티플레이 목표를 소개합니다.',
      '공식 웹사이트를 Docs, Dev Blog, About, Support 중심으로 재구성해 각 콘텐츠의 진입점을 명확히 했습니다.'
    ]
  }
}

const screenshotModules = import.meta.glob<string>(
  '../../../assets/home/screenshots/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}',
  { eager: true, query: '?url', import: 'default' }
)
const thumbnailModules = import.meta.glob<string>(
  '../../../assets/home/screenshots/thumbnails/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}',
  { eager: true, query: '?url', import: 'default' }
)

function imageStem(path: string) {
  return path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? path
}

const thumbnailsByStem = new Map(
  Object.entries(thumbnailModules).map(([path, url]) => [imageStem(path), url])
)
const galleryImages = Object.entries(screenshotModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, full]) => ({
    full,
    thumbnail: thumbnailsByStem.get(imageStem(path)) ?? full
  }))

const promoVideoItems = promoVideos.map((video) => ({
  ...video,
  embedUrl: `https://www.youtube-nocookie.com/embed/${video.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${video.youtubeId}/mqdefault.jpg`
}))
const activePromoVideoIndex = ref(0)
const activePromoVideo = computed(() => promoVideoItems[activePromoVideoIndex.value] ?? null)

const activeScreenshotIndex = ref<number | null>(null)
const lightbox = ref<HTMLElement | null>(null)
const activeScreenshot = computed(() => activeScreenshotIndex.value === null
  ? null
  : galleryImages[activeScreenshotIndex.value])

async function openScreenshot(index: number) {
  activeScreenshotIndex.value = index
  await nextTick()
  lightbox.value?.focus()
}

function closeScreenshot() {
  activeScreenshotIndex.value = null
}

function showPreviousScreenshot() {
  if (activeScreenshotIndex.value === null) return
  activeScreenshotIndex.value = (activeScreenshotIndex.value - 1 + galleryImages.length) % galleryImages.length
}

function showNextScreenshot() {
  if (activeScreenshotIndex.value === null) return
  activeScreenshotIndex.value = (activeScreenshotIndex.value + 1) % galleryImages.length
}

watch(activeScreenshotIndex, (index) => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('rfs-lightbox-open', index !== null)
  }
})

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('rfs-lightbox-open')
  }
})

const copy = computed(() => copies[lang.value] ?? copies['en-US'])
const content = computed(() => ({
  ...copy.value,
  storeCards: [
    {
      mark: 'iOS',
      icon: '/assets/app-icon-1.png',
      title: 'iOS / iPadOS',
      detail: '',
      action: copy.value.appStore,
      href: 'https://apps.apple.com/us/app/carrier-landing-hd/id1176797391'
    },
    {
      mark: 'A',
      icon: '/assets/app-icon-1.png',
      title: 'Android',
      detail: '',
      action: copy.value.googlePlay,
      href: 'https://play.google.com/store/apps/details?id=com.BluedotSim.CarrierLandingHD'
    },
    {
      mark: 'VR',
      icon: '',
      title: 'Meta VR',
      detail: copy.value.vrDetail,
      action: copy.value.comingSoon,
      href: ''
    },
    {
      mark: 'PC',
      icon: '',
      title: 'Steam',
      detail: copy.value.steamDetail,
      action: copy.value.comingSoon,
      href: ''
    }
  ],
  posts: [
    {
      date: copy.value.dates[0],
      title: copy.value.postTitles[0],
      excerpt: copy.value.postExcerpts[0],
      href: `${copy.value.prefix}/blog/2026-08-11-platform-roadmap`
    },
    {
      date: copy.value.dates[1],
      title: copy.value.postTitles[1],
      excerpt: copy.value.postExcerpts[1],
      href: `${copy.value.prefix}/blog/2026-08-10-website-structure`
    }
  ]
}))

const heroImage = withBase('/assets/home/redflagsim-hero.jpg')
const aboutLink = computed(() => withBase(`${copy.value.prefix}/about`))
const blogLink = computed(() => withBase(`${copy.value.prefix}/blog/`))
</script>

<template>
  <main class="rfs-home">
    <section class="rfs-home__hero">
      <img class="rfs-home__hero-image" :src="heroImage" alt="" fetchpriority="high">
      <div class="rfs-home__hero-shade" aria-hidden="true"></div>
      <div class="rfs-home__hero-container">
        <div class="rfs-home__hero-main">
          <h1 class="rfs-home__title">
            <span class="rfs-home__name">RedFlagSim</span>
            <span v-for="line in content.subtitle" :key="line" class="rfs-home__title-line">{{ line }}</span>
          </h1>
          <div class="rfs-home__actions">
            <a class="rfs-home__about-button" :href="aboutLink">{{ content.about }}</a>
            <a
              class="rfs-home__about-button"
              href="#promo-video"
            >
              {{ content.promo }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="rfs-home__platforms" :aria-label="content.storesLabel">
      <div class="rfs-home__platform-grid">
        <component
          :is="card.href ? 'a' : 'article'"
          v-for="card in content.storeCards"
          :key="card.title"
          class="rfs-platform-card"
          :class="{ 'is-coming-soon': !card.href }"
          :href="card.href || undefined"
          :target="card.href ? '_blank' : undefined"
          :rel="card.href ? 'noreferrer' : undefined"
        >
          <img
            v-if="card.icon"
            class="rfs-platform-card__icon"
            :src="withBase(card.icon)"
            alt="RedFlagSim"
          >
          <span v-else class="rfs-platform-card__mark" aria-hidden="true">{{ card.mark }}</span>
          <h2>{{ card.title }}</h2>
          <p v-if="card.detail">{{ card.detail }}</p>
          <span class="rfs-platform-card__action">
            {{ card.action }}<span v-if="card.href" aria-hidden="true"> →</span>
          </span>
        </component>
      </div>
    </section>

    <section id="promo-video" class="rfs-home__promo" :aria-labelledby="'promo-video-title'">
      <div class="rfs-home__promo-container">
        <h2 id="promo-video-title">{{ content.promoGallery }}</h2>
        <div class="rfs-home__video-gallery">
          <div v-if="activePromoVideo" class="rfs-home__video-frame">
            <iframe
              :key="activePromoVideo.youtubeId"
              :src="activePromoVideo.embedUrl"
              :title="activePromoVideo.title"
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="rfs-home__video-list" :aria-label="content.promoGallery">
            <button
              v-for="(video, index) in promoVideoItems"
              :key="video.youtubeId"
              class="rfs-home__video-item"
              :class="{ 'is-active': index === activePromoVideoIndex }"
              type="button"
              :aria-pressed="index === activePromoVideoIndex"
              @click="activePromoVideoIndex = index"
            >
              <img :src="video.thumbnailUrl" alt="" loading="lazy" decoding="async">
              <span class="rfs-home__video-item-copy">
                <strong>{{ video.title }}</strong>
                <small>{{ index + 1 }} / {{ promoVideoItems.length }}</small>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="rfs-home__gallery" aria-labelledby="screenshot-gallery-title">
      <div class="rfs-home__gallery-container">
        <h2 id="screenshot-gallery-title">{{ content.gallery }}</h2>
        <div class="rfs-home__gallery-track">
          <button
            v-for="(image, index) in galleryImages"
            :key="image.full"
            class="rfs-home__gallery-item"
            type="button"
            :aria-label="`${content.screenshot} ${index + 1}`"
            @click="openScreenshot(index)"
          >
            <img
              :src="image.thumbnail"
              :alt="`${content.screenshot} ${index + 1}`"
              loading="lazy"
              decoding="async"
            >
          </button>
        </div>
      </div>
    </section>

    <section class="rfs-home__blog">
      <div class="rfs-home__section-heading">
        <div>
          <p>{{ content.blogLabel }}</p>
          <h2>{{ content.blogTitle }}</h2>
        </div>
        <a :href="blogLink">{{ content.allPosts }} →</a>
      </div>
      <div class="rfs-home__post-grid">
        <a
          v-for="post in content.posts"
          :key="post.href"
          class="rfs-post-card"
          :href="withBase(post.href)"
        >
          <time>{{ post.date }}</time>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>

    <Teleport to="body">
      <div
        v-if="activeScreenshot"
        ref="lightbox"
        class="rfs-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="content.gallery"
        tabindex="-1"
        @click.self="closeScreenshot"
        @keydown.esc.prevent="closeScreenshot"
        @keydown.left.prevent="showPreviousScreenshot"
        @keydown.right.prevent="showNextScreenshot"
      >
        <button
          class="rfs-lightbox__button rfs-lightbox__close"
          type="button"
          :aria-label="content.closeGallery"
          :title="content.closeGallery"
          @click="closeScreenshot"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <button
          class="rfs-lightbox__button rfs-lightbox__previous"
          type="button"
          :aria-label="content.previousScreenshot"
          :title="content.previousScreenshot"
          @click="showPreviousScreenshot"
        >
          <span aria-hidden="true">&#8249;</span>
        </button>
        <img
          class="rfs-lightbox__image"
          :src="activeScreenshot.full"
          :alt="`${content.screenshot} ${(activeScreenshotIndex ?? 0) + 1}`"
        >
        <button
          class="rfs-lightbox__button rfs-lightbox__next"
          type="button"
          :aria-label="content.nextScreenshot"
          :title="content.nextScreenshot"
          @click="showNextScreenshot"
        >
          <span aria-hidden="true">&#8250;</span>
        </button>
        <span class="rfs-lightbox__counter">
          {{ (activeScreenshotIndex ?? 0) + 1 }} / {{ galleryImages.length }}
        </span>
      </div>
    </Teleport>
  </main>
</template>
