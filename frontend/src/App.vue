<template>
  <router-view />
</template>

<script setup>
// 使用 Vue Router 来管理页面
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'JetBrains Mono', 'Hanken Grotesk', 'Noto Sans SC', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--mm-text-primary);
  background-color: var(--mm-page-bg);
  min-height: 100vh;
  font-variant-numeric: tabular-nums; /* stop jitter on updating figures app-wide */
}

/* --- Reusable brand primitives (opt-in; adopted per-page during M4) --- */
.mm-card {
  background: var(--mm-bg-elevated);
  border: 1px solid var(--mm-border);
  border-radius: var(--mm-radius-md, 10px);
  box-shadow: var(--mm-elev-1);
}

.mm-metric {
  font-family: var(--mm-font-mono, 'JetBrains Mono', monospace);
  font-variant-numeric: tabular-nums;
}

.mm-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mm-font-mono, 'JetBrains Mono', monospace);
  font-size: 11px;
  letter-spacing: 0.04em;
  padding: 3px 8px;
  border-radius: 999px;
  border: 1px solid var(--mm-border);
}

.mm-verdict--proceed { color: var(--mm-verdict-proceed); }
.mm-verdict--caution { color: var(--mm-verdict-caution); }
.mm-verdict--stop { color: var(--mm-verdict-stop); }

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--mm-bg-muted);
}

::-webkit-scrollbar-thumb {
  background: var(--mm-border-strong);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--mm-text-muted);
}

/* 全局按钮样式 */
button {
  font-family: inherit;
}
</style>
