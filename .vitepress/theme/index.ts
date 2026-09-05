import DefaultTheme from 'vitepress/theme'
import { h, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import SiteFooter from './components/SiteFooter.vue'
import WebsiteHome from './components/WebsiteHome.vue'
import TacInspectorPanel from './components/TacInspectorPanel.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(SiteFooter)
    })
  },
  enhanceApp({ app }) {
    app.component('WebsiteHome', WebsiteHome)
    app.component('TacInspectorPanel', TacInspectorPanel)
  },
  setup() {
    const router = useRouter()
    
    onMounted(() => {
      // 仅在客户端运行
      if (typeof window === 'undefined') return

      const userLang = navigator.language.toLowerCase()
      const path = window.location.pathname
      const base = '/Docs/'
      
      // 检查是否在根目录（英文版首页）
      // 并且本次会话中尚未进行过自动跳转（允许用户手动切回英文）
      const hasRedirected = sessionStorage.getItem('auto-redirected')
      
      const isRoot = path === base || path === base + 'index.html' || path === base + 'index'
      
      if (isRoot && !hasRedirected) {
        let target = ''
        
        if (userLang.startsWith('zh-tw') || userLang.startsWith('zh-hk') || userLang.startsWith('zh-mo')) {
          target = base + 'zh-tw/'
        } else if (userLang.startsWith('zh')) {
          target = base + 'zh/'
        } else if (userLang.startsWith('ja')) {
          target = base + 'ja/'
        } else if (userLang.startsWith('ko')) {
          target = base + 'ko/'
        } else if (userLang.startsWith('ru')) {
          target = base + 'ru/'
        } else if (userLang.startsWith('de')) {
          target = base + 'de/'
        } else if (userLang.startsWith('es')) {
          target = base + 'es/'
        } else if (userLang.startsWith('fr')) {
          target = base + 'fr/'
        }

        // 如果匹配到语言且不是当前路径，则跳转
        if (target && target !== path && target !== path + '/' && target !== path + 'index.html') {
          sessionStorage.setItem('auto-redirected', 'true')
          router.go(target)
        }
      }
    })
  }
}
