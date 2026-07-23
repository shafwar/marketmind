<template>
  <!-- Six-stage decision journey rail. current: 1..5 (process stages); stage 0 (Intake) is always complete. Visual only. -->
  <div class="journey-rail" role="progressbar" :aria-valuenow="current" aria-valuemin="1" aria-valuemax="5" :aria-label="stages[current]">
    <ol class="rail-track">
      <li
        v-for="(label, i) in stages"
        :key="i"
        class="rail-node"
        :class="{ done: i < current, active: i === current, upcoming: i > current }"
      >
        <span class="node-dot" aria-hidden="true"></span>
        <span class="node-label">{{ label }}</span>
      </li>
    </ol>
    <span class="rail-current">{{ stages[current] }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  current: { type: Number, default: 1 } // 1=Konteks, 2=Persiapan, 3=Simulasi, 4=Keputusan, 5=Dossier
})

const { tm } = useI18n()
// journey.stages holds 6 labels: [Intake, Konteks, Persiapan, Simulasi, Keputusan, Dossier]
const stages = computed(() => tm('journey.stages'))
// keep current referenced so linters/readers see it drive aria + class
void props
</script>

<style scoped>
.journey-rail {
  display: flex;
  align-items: center;
  gap: 14px;
}

.rail-track {
  display: flex;
  align-items: center;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.rail-node {
  display: flex;
  align-items: center;
  gap: 6px;
}

.node-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid var(--mm-border-strong);
  background: transparent;
  transition: all 0.25s ease;
}

.rail-node.done .node-dot {
  background: var(--mm-text-muted);
  border-color: var(--mm-text-muted);
}

.rail-node.active .node-dot {
  background: var(--mm-accent);
  border-color: var(--mm-accent);
  box-shadow: 0 0 0 3px var(--mm-accent-soft);
}

/* labels are visually hidden on the compact rail; the current label shows separately */
.node-label {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.rail-current {
  font-family: var(--mm-font-ui, 'Hanken Grotesk', sans-serif);
  font-weight: 700;
  font-size: 14px;
  color: var(--mm-nav-text);
  white-space: nowrap;
}
</style>
