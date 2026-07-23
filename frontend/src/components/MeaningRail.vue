<template>
  <!-- Four-question meaning rail. Full-width strip below the header (layout-safe: flex-shrink:0 sibling of content). -->
  <div class="meaning-rail" :class="{ open }">
    <button class="rail-summary" @click="open = !open" :aria-expanded="open">
      <span class="rail-eyebrow">{{ $t('meaning.eyebrow') }}</span>
      <span class="rail-what">{{ copy.what }}</span>
      <span class="rail-toggle" aria-hidden="true">{{ open ? '▲' : '▼' }}</span>
    </button>

    <div v-if="open" class="rail-detail">
      <div class="q">
        <span class="q-label">{{ $t('meaning.qWhy') }}</span>
        <p>{{ copy.why }}</p>
      </div>
      <div class="q">
        <span class="q-label">{{ $t('meaning.qAi') }}</span>
        <p>{{ copy.ai }}</p>
      </div>
      <div class="q">
        <span class="q-label">{{ $t('meaning.qNext') }}</span>
        <p>{{ copy.next }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  // one of: konteks | persiapan | simulasi | keputusan
  page: { type: String, required: true }
})

const { tm } = useI18n()
const open = ref(false)
// meaning.pages.<page> = { what, why, ai, next }
const copy = computed(() => tm('meaning.pages')[props.page] || { what: '', why: '', ai: '', next: '' })
</script>

<style scoped>
.meaning-rail {
  flex-shrink: 0;
  border-bottom: 1px solid var(--mm-border);
  background: var(--mm-bg-surface);
  font-family: var(--mm-font-ui, 'Hanken Grotesk', sans-serif);
}

.rail-summary {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  color: var(--mm-text-primary);
}

.rail-eyebrow {
  font-family: var(--mm-font-mono, 'JetBrains Mono', monospace);
  font-size: 10px;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: var(--mm-accent);
  white-space: nowrap;
}

.rail-what {
  font-size: 13px;
  font-weight: 600;
  color: var(--mm-text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.rail-toggle {
  font-size: 9px;
  color: var(--mm-text-muted);
}

.rail-detail {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 4px 24px 14px;
}

.q-label {
  display: block;
  font-family: var(--mm-font-mono, 'JetBrains Mono', monospace);
  font-size: 10px;
  letter-spacing: 0.06em;
  font-weight: 700;
  color: var(--mm-text-muted);
  margin-bottom: 4px;
}

.q p {
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--mm-text-secondary);
  margin: 0;
}

@media (max-width: 860px) {
  .rail-detail { grid-template-columns: 1fr; gap: 10px; }
}
</style>
