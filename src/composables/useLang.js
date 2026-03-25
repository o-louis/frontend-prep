import { ref, computed } from 'vue'

const lang = ref(localStorage.getItem('lang') || 'fr')

export function useLang() {
  const isEn = computed(() => lang.value === 'en')

  function setLang(l) {
    lang.value = l
    localStorage.setItem('lang', l)
  }

  function toggle() {
    setLang(lang.value === 'fr' ? 'en' : 'fr')
  }

  const t = computed(() => ({
    title: lang.value === 'fr' ? 'Préparation Entretien Frontend' : 'Frontend Interview Prep',
    subtitle: lang.value === 'fr' ? 'Clique sur un sujet pour l\'approfondir' : 'Click a topic to expand it',
    hot: lang.value === 'fr' ? '🔥 fréquent' : '🔥 frequent',
    tip: lang.value === 'fr' ? '💡 Tip entretien' : '💡 Interview tip',
    css: 'CSS',
    js: 'JavaScript',
    vue: 'Vue',
  }))

  return { lang, isEn, setLang, toggle, t }
}
