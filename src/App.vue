<template>
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="header-inner">
        <div class="header-title-group">
          <span class="header-logo">⚡</span>
          <div>
            <h1 class="header-title">{{ t.title }}</h1>
            <p class="header-sub">{{ t.subtitle }}</p>
          </div>
        </div>
        <button class="lang-toggle" @click="toggle" :title="lang === 'fr' ? 'Switch to English' : 'Passer en français'">
          <span class="lang-flag">{{ lang === 'fr' ? '🇫🇷' : '🇬🇧' }}</span>
          <span class="lang-text">{{ lang === 'fr' ? 'FR' : 'EN' }}</span>
        </button>
      </div>
    </header>

    <!-- Tabs -->
    <nav class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="[`tab--${tab.id}`, { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
        <span class="tab-count">{{ getCount(tab.id) }}</span>
      </button>
    </nav>

    <!-- Content -->
    <main class="content">
      <Transition name="fade" mode="out-in">
        <div :key="activeTab + lang" class="sections">
          <div
            v-for="section in currentSections"
            :key="section.section"
            class="section"
          >
            <h2 class="section-title">{{ section.section }}</h2>
            <TopicCard
              v-for="topic in section.items"
              :key="topic.id"
              :topic="topic"
              :tip-label="t.tip"
            />
          </div>
        </div>
      </Transition>
    </main>

    <footer class="footer">
      <span>{{ lang === 'fr' ? 'Bonne chance pour tes entretiens 🚀' : 'Good luck with your interviews 🚀' }}</span>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { topics } from './data/topics.js'
import { useLang } from './composables/useLang.js'
import TopicCard from './components/TopicCard.vue'

const { lang, toggle, t } = useLang()

const activeTab = ref('css')

const tabs = computed(() => [
  { id: 'css', label: t.value.css },
  { id: 'js',  label: t.value.js  },
  { id: 'vue', label: t.value.vue },
])

const currentSections = computed(() => {
  return topics[activeTab.value][lang.value] || []
})

function getCount(tabId) {
  const sections = topics[tabId][lang.value] || []
  return sections.reduce((sum, s) => sum + s.items.length, 0)
}
</script>

<style>
/* ===== Design Tokens ===== */
:root {
  --bg: #0b0b10;
  --surface: #111118;
  --card-bg: #14141d;
  --hover-bg: #1a1a26;
  --border: #1f1f2e;
  --accent-dim: #3a2f5a;

  --text-primary: #e8e8f2;
  --text-secondary: #9494b8;
  --text-dim: #44445a;

  --accent: #8b5cf6;
  --accent-soft: #c4b5fd;

  --tab-css: #38bdf8;
  --tab-js: #facc15;
  --tab-vue: #4ade80;

  --code-bg: #0d0d16;
  --code-inline-bg: #1e1e2e;
  --tip-bg: #16140a;
  --tip-border: #facc15;
  --tip-text: #fde68a;

  --font-sans: 'DM Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  background: var(--bg);
  color: var(--text-primary);
  font-family: var(--font-sans);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* Scrollbar */
::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
</style>

<style scoped>
/* === App Layout === */
.app {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 16px 60px;
  min-height: 100vh;
}

/* === Header === */
.header {
  padding: 28px 0 20px;
  position: sticky;
  top: 0;
  background: var(--bg);
  z-index: 10;
  border-bottom: 1px solid var(--border);
  margin-bottom: 20px;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.header-title-group {
  display: flex;
  align-items: center;
  gap: 12px;
}
.header-logo {
  font-size: 1.6rem;
  line-height: 1;
}
.header-title {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text-primary);
}
.header-sub {
  font-size: 0.75rem;
  color: var(--text-dim);
  margin-top: 2px;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 600;
  font-family: var(--font-sans);
  transition: all 0.15s;
  flex-shrink: 0;
}
.lang-toggle:hover {
  border-color: var(--accent);
  color: var(--accent-soft);
}
.lang-flag { font-size: 1rem; }

/* === Tabs === */
.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.tab {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1.5px solid transparent;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 700;
  font-family: var(--font-sans);
  background: var(--card-bg);
  color: var(--text-dim);
  transition: all 0.2s;
  letter-spacing: 0.01em;
}
.tab:hover { color: var(--text-secondary); }

.tab-count {
  font-size: 0.68rem;
  padding: 1px 5px;
  border-radius: 10px;
  background: var(--hover-bg);
  color: var(--text-dim);
  font-weight: 600;
}

/* Tab colors */
.tab--css.active { border-color: var(--tab-css); color: var(--tab-css); background: rgba(56, 189, 248, 0.08); }
.tab--css.active .tab-count { background: rgba(56, 189, 248, 0.15); color: var(--tab-css); }

.tab--js.active { border-color: var(--tab-js); color: var(--tab-js); background: rgba(250, 204, 21, 0.08); }
.tab--js.active .tab-count { background: rgba(250, 204, 21, 0.15); color: var(--tab-js); }

.tab--vue.active { border-color: var(--tab-vue); color: var(--tab-vue); background: rgba(74, 222, 128, 0.08); }
.tab--vue.active .tab-count { background: rgba(74, 222, 128, 0.15); color: var(--tab-vue); }

/* === Sections === */
.section { margin-bottom: 22px; }

.section-title {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-dim);
  font-weight: 700;
  margin-bottom: 8px;
  padding-left: 2px;
}

/* === Footer === */
.footer {
  text-align: center;
  padding: 24px 0;
  font-size: 0.78rem;
  color: var(--text-dim);
}

/* === Transitions === */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
