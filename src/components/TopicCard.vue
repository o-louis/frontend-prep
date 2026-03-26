<template>
  <div class="topic" :class="{ open: isOpen }">
    <button class="topic-header" @click="toggle">
      <div class="topic-left">
        <span class="topic-icon">{{ topic.icon }}</span>
        <span class="topic-name">{{ topic.name }}</span>
        <span v-if="topic.hot" class="badge">🔥</span>
      </div>
      <span class="chevron">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M4 2L8 6L4 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>

    <Transition name="expand">
      <div v-if="isOpen" class="topic-content">
        <div class="explanation" v-html="topic.explanation" />

        <pre v-if="topic.code" class="code-block"><code>{{ topic.code }}</code></pre>

        <div v-if="topic.tip" class="tip-box">
          <span class="tip-label">{{ tipLabel }}</span>
          {{ topic.tip }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  topic: { type: Object, required: true },
  tipLabel: { type: String, default: '💡 Tip' }
})

const isOpen = ref(false)
function toggle() { isOpen.value = !isOpen.value }
</script>

<style scoped>
.topic {
  background: var(--card-bg);
  border-radius: 10px;
  margin-bottom: 6px;
  border: 1px solid var(--border);
  overflow: hidden;
  transition: border-color 0.2s;
}
.topic.open {
  border-color: var(--accent-dim);
}

.topic-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 14px;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
}
.topic-header:hover { background: var(--hover-bg); }

.topic-left {
  display: flex;
  align-items: center;
  gap: 9px;
}
.topic-icon { font-size: 1rem; }
.topic-name { font-weight: 600; font-size: 0.875rem; }
.badge {
  font-size: 0.65rem;
  padding: 2px 6px;
  border-radius: 8px;
  background: rgba(239, 68, 68, 0.15);
  color: #fca5a5;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.chevron {
  color: var(--text-dim);
  transition: transform 0.25s ease;
  flex-shrink: 0;
}
.open .chevron { transform: rotate(90deg); }

.topic-content {
  padding: 4px 14px 14px;
  border-top: 1px solid var(--border);
  text-align: left;
}

.explanation {
  margin-top: 10px;
  font-size: 0.82rem;
  line-height: 1.7;
  color: var(--text-secondary);
}
.explanation :deep(code) {
  background: var(--code-inline-bg);
  padding: 1px 5px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.79rem;
  color: var(--accent-soft);
}
.explanation :deep(strong) { color: var(--text-primary); }
.explanation :deep(em) {
  font-style: normal;
  font-weight: 600;
  color: var(--accent);
}

.code-block {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 14px;
  margin-top: 10px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: 1.65;
  overflow-x: auto;
  white-space: pre;
  color: var(--accent-soft);
  text-align: left;
}
.code-block code { font-family: inherit; }

.tip-box {
  margin-top: 10px;
  background: var(--tip-bg);
  border-left: 3px solid var(--tip-border);
  border-radius: 0 6px 6px 0;
  padding: 8px 12px;
  font-size: 0.79rem;
  color: var(--tip-text);
  line-height: 1.55;
}
.tip-label {
  font-weight: 700;
  margin-right: 4px;
}

/* Transition */
.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: top;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: scaleY(0.95);
}
</style>
