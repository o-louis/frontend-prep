import { ref, computed } from 'vue'

export const LANG_FR = 'fr'
export const LANG_EN = 'en'

const lang = ref(localStorage.getItem('lang') || LANG_EN)

export function useLang() {
  const isEn = computed(() => lang.value === LANG_EN)

  function setLang(l) {
    lang.value = l
    localStorage.setItem('lang', l)
  }

  function toggle() {
    setLang(lang.value === LANG_FR ? LANG_EN : LANG_FR)
  }

  const t = computed(() => ({
    title: lang.value === LANG_FR ? 'Préparation Entretien Frontend' : 'Frontend Interview Prep',
    hot: lang.value === LANG_FR ? '🔥 fréquent' : '🔥 frequent',
    tip: lang.value === LANG_FR ? '💡 Tip entretien' : '💡 Interview tip',
    css: 'CSS',
    js: 'JavaScript',
    vue: 'Vue',
  }))

  return { lang, isEn, setLang, toggle, t }
}
