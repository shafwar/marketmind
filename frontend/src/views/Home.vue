<template>
  <div class="home-container">
    <!-- 顶部导航栏 -->
    <nav class="navbar">
      <div class="nav-brand">{{ $t('brand.name') }}</div>
      <div class="nav-links">
        <LanguageSwitcher />
        <a href="https://github.com/shafwar/marketmind" target="_blank" class="github-link">
          {{ $t('nav.visitGithub') }} <span class="arrow">↗</span>
        </a>
      </div>
    </nav>

    <div class="main-content">
      <!-- 上半部分：Hero 区域 -->
      <section class="hero-section">
        <div class="hero-left">
          <div class="tag-row">
            <span class="orange-tag">{{ $t('home.tagline') }}</span>
            <span class="version-text">{{ $t('home.version') }}</span>
          </div>
          
          <h1 class="main-title">
            {{ $t('home.heroTitle1') }}<br>
            <span class="gradient-text">{{ $t('home.heroTitle2') }}</span>
          </h1>
          
          <div class="hero-desc">
            <p>
              <i18n-t keypath="home.heroDesc" tag="span">
                <template #brand><span class="highlight-bold">{{ $t('home.heroDescBrand') }}</span></template>
                <template #agentScale><span class="highlight-orange">{{ $t('home.heroDescAgentScale') }}</span></template>
                <template #optimalSolution><span class="highlight-code">{{ $t('home.heroDescOptimalSolution') }}</span></template>
              </i18n-t>
            </p>
            <p class="slogan-text">
              {{ $t('home.slogan') }}<span class="blinking-cursor">_</span>
            </p>
          </div>
           
          <div class="decoration-square"></div>
        </div>
        
        <div class="hero-right">
          <!-- Logo 区域 -->
          <div class="logo-container">
            <div class="hero-logo" role="img" aria-label="MarketMind">Market<span class="wordmark-accent">Mind</span></div>
          </div>
          
          <button class="scroll-down-btn" @click="scrollToBottom">
            ↓
          </button>
        </div>
      </section>

      <!-- Narrative band: problem → output preview → why → institutions -->
      <section class="narrative-band">
        <div class="problem-strip">
          <span class="band-eyebrow">{{ $t('home.problemEyebrow') }}</span>
          <ul class="problem-list">
            <li>{{ $t('home.problem1') }}</li>
            <li>{{ $t('home.problem2') }}</li>
            <li>{{ $t('home.problem3') }}</li>
          </ul>
        </div>

        <div class="narrative-grid">
          <!-- Output preview: show the destination -->
          <div class="output-preview mm-card">
            <span class="band-eyebrow accent">{{ $t('home.outputEyebrow') }}</span>
            <div class="op-title">{{ $t('home.outputTitle') }}</div>
            <div class="op-verdict-row">
              <span class="op-verdict mm-verdict--caution">{{ $t('home.outputVerdict') }}</span>
              <span class="op-confidence">{{ $t('home.outputConfidence') }}</span>
            </div>
            <div class="op-columns">
              <div class="op-block">
                <h4>{{ $t('home.outputRisksTitle') }}</h4>
                <ul>
                  <li>{{ $t('home.outputRisk1') }}</li>
                  <li>{{ $t('home.outputRisk2') }}</li>
                </ul>
              </div>
              <div class="op-block">
                <h4>{{ $t('home.outputActionsTitle') }}</h4>
                <ul>
                  <li>{{ $t('home.outputAction1') }}</li>
                  <li>{{ $t('home.outputAction2') }}</li>
                </ul>
              </div>
            </div>
            <p class="op-disclaimer">{{ $t('home.outputDisclaimer') }}</p>
          </div>

          <!-- Why MarketMind: three pillars -->
          <div class="pillars">
            <span class="band-eyebrow">{{ $t('home.whyEyebrow') }}</span>
            <div class="pillar">
              <div class="pillar-title">{{ $t('home.pillar1Title') }}</div>
              <div class="pillar-desc">{{ $t('home.pillar1Desc') }}</div>
            </div>
            <div class="pillar">
              <div class="pillar-title">{{ $t('home.pillar2Title') }}</div>
              <div class="pillar-desc">{{ $t('home.pillar2Desc') }}</div>
            </div>
            <div class="pillar">
              <div class="pillar-title">{{ $t('home.pillar3Title') }}</div>
              <div class="pillar-desc">{{ $t('home.pillar3Desc') }}</div>
            </div>
          </div>
        </div>

        <!-- Designed for -->
        <div class="institutions">
          <span class="inst-label">{{ $t('home.institutionsLabel') }}</span>
          <div class="inst-names">
            <span>Bank Indonesia</span>
            <span>OJK</span>
            <span>KSEI</span>
            <span>Kementerian Keuangan</span>
            <span>IDX</span>
          </div>
        </div>
      </section>

      <!-- 下半部分：双栏布局 -->
      <section class="dashboard-section">
        <!-- 左栏：状态与步骤 -->
        <div class="left-panel">
          <div class="panel-header">
            <span class="status-dot">■</span> {{ $t('home.systemStatus') }}
          </div>
          
          <h2 class="section-title">{{ $t('home.systemReady') }}</h2>
          <p class="section-desc">
            {{ $t('home.systemReadyDesc') }}
          </p>
          
          <!-- 数据指标卡片 -->
          <div class="metrics-row">
            <div class="metric-card">
              <div class="metric-value">{{ $t('home.metricLowCost') }}</div>
              <div class="metric-label">{{ $t('home.metricLowCostDesc') }}</div>
            </div>
            <div class="metric-card">
              <div class="metric-value">{{ $t('home.metricHighAvail') }}</div>
              <div class="metric-label">{{ $t('home.metricHighAvailDesc') }}</div>
            </div>
          </div>

          <!-- 项目模拟步骤介绍 (新增区域) -->
          <div class="steps-container">
            <div class="steps-header">
               <span class="diamond-icon">◇</span> {{ $t('home.workflowSequence') }}
            </div>
            <div class="workflow-list">
              <div class="workflow-item">
                <span class="step-num">01</span>
                <div class="step-info">
                  <div class="step-title">{{ $t('home.step01Title') }}</div>
                  <div class="step-desc">{{ $t('home.step01Desc') }}</div>
                </div>
              </div>
              <div class="workflow-item">
                <span class="step-num">02</span>
                <div class="step-info">
                  <div class="step-title">{{ $t('home.step02Title') }}</div>
                  <div class="step-desc">{{ $t('home.step02Desc') }}</div>
                </div>
              </div>
              <div class="workflow-item">
                <span class="step-num">03</span>
                <div class="step-info">
                  <div class="step-title">{{ $t('home.step03Title') }}</div>
                  <div class="step-desc">{{ $t('home.step03Desc') }}</div>
                </div>
              </div>
              <div class="workflow-item">
                <span class="step-num">04</span>
                <div class="step-info">
                  <div class="step-title">{{ $t('home.step04Title') }}</div>
                  <div class="step-desc">{{ $t('home.step04Desc') }}</div>
                </div>
              </div>
              <div class="workflow-item">
                <span class="step-num">05</span>
                <div class="step-info">
                  <div class="step-title">{{ $t('home.step05Title') }}</div>
                  <div class="step-desc">{{ $t('home.step05Desc') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右栏：交互控制台 -->
        <div class="right-panel">
          <div class="console-box">
            <!-- 上传区域 -->
            <div class="console-section">
              <div class="console-header">
                <span class="console-label">{{ $t('home.realitySeed') }}</span>
                <span class="console-meta">{{ $t('home.supportedFormats') }}</span>
              </div>

              <div class="seed-block">
                <div class="seed-label">{{ $t('home.seedHeading') }}</div>
                <textarea
                  v-model="seedText"
                  class="seed-textarea"
                  :placeholder="$t('home.seedTextPlaceholder')"
                  rows="5"
                  :disabled="loading"
                />
                <div class="seed-divider">{{ $t('home.seedDivider') }}</div>
              </div>
              
              <div 
                class="upload-zone"
                :class="{ 'drag-over': isDragOver, 'has-files': files.length > 0 }"
                @dragover.prevent="handleDragOver"
                @dragleave.prevent="handleDragLeave"
                @drop.prevent="handleDrop"
                @click="triggerFileInput"
              >
                <input
                  ref="fileInput"
                  type="file"
                  multiple
                  accept=".pdf,.md,.txt"
                  @change="handleFileSelect"
                  style="display: none"
                  :disabled="loading"
                />
                
                <div v-if="files.length === 0" class="upload-placeholder">
                  <div class="upload-icon">↑</div>
                  <div class="upload-title">{{ $t('home.dragToUpload') }}</div>
                  <div class="upload-hint">{{ $t('home.orBrowse') }}</div>
                </div>
                
                <div v-else class="file-list">
                  <div v-for="(file, index) in files" :key="index" class="file-item">
                    <span class="file-icon" aria-hidden="true">▤</span>
                    <span class="file-name">{{ file.name }}</span>
                    <button @click.stop="removeFile(index)" class="remove-btn">×</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- 分割线 -->
            <div class="console-divider">
              <span>{{ $t('home.inputParams') }}</span>
            </div>

            <!-- 输入区域 -->
            <div class="console-section">
              <div class="console-header">
                <span class="console-label">{{ $t('home.simulationPrompt') }}</span>
              </div>
              <div class="input-wrapper">
                <textarea
                  v-model="formData.simulationRequirement"
                  class="code-input"
                  :placeholder="$t('home.promptPlaceholder')"
                  rows="6"
                  :disabled="loading"
                ></textarea>
                <div class="model-badge">{{ $t('home.engineBadge') }}</div>
              </div>
            </div>

            <!-- 启动按钮 -->
            <div class="console-section btn-section">
              <button 
                class="start-engine-btn"
                @click="startSimulation"
                :disabled="!canSubmit || loading || demoVizLoading"
              >
                <span v-if="!loading">{{ $t('home.startEngine') }}</span>
                <span v-else>{{ $t('home.initializing') }}</span>
                <span class="btn-arrow">→</span>
              </button>
              <p class="demo-viz-hint">{{ $t('home.demoVizHint') }}</p>
              <button
                type="button"
                class="demo-viz-btn"
                @click="startDemoVisualization"
                :disabled="loading || demoVizLoading"
              >
                <span v-if="!demoVizLoading">{{ $t('home.demoVizBtn') }}</span>
                <span v-else>{{ $t('home.demoVizLoading') }}</span>
                <span class="btn-arrow">↗</span>
              </button>
              <p v-if="error" class="home-inline-error" role="alert">{{ error }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 历史项目数据库 -->
      <HistoryDatabase />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import HistoryDatabase from '../components/HistoryDatabase.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import { bootstrapDemoVisualization } from '../api/graph'

const router = useRouter()

// 表单数据
const formData = ref({
  simulationRequirement: ''
})

// 文件列表
const files = ref([])
// Sumber data teks (opsional; digabung ke benih_teks.txt saat kirim)
const seedText = ref('')

// 状态
const loading = ref(false)
const demoVizLoading = ref(false)
const error = ref('')
const isDragOver = ref(false)

// 文件输入引用
const fileInput = ref(null)

// 计算属性:是否可以提交
const canSubmit = computed(() => {
  const hasSource = files.value.length > 0 || seedText.value.trim() !== ''
  return formData.value.simulationRequirement.trim() !== '' && hasSource
})

// 触发文件选择
const triggerFileInput = () => {
  if (!loading.value) {
    fileInput.value?.click()
  }
}

// 处理文件选择
const handleFileSelect = (event) => {
  const selectedFiles = Array.from(event.target.files)
  addFiles(selectedFiles)
}

// 处理拖拽相关
const handleDragOver = (e) => {
  if (!loading.value) {
    isDragOver.value = true
  }
}

const handleDragLeave = (e) => {
  isDragOver.value = false
}

const handleDrop = (e) => {
  isDragOver.value = false
  if (loading.value) return
  
  const droppedFiles = Array.from(e.dataTransfer.files)
  addFiles(droppedFiles)
}

// 添加文件
const addFiles = (newFiles) => {
  const validFiles = newFiles.filter(file => {
    const ext = file.name.split('.').pop().toLowerCase()
    return ['pdf', 'md', 'txt'].includes(ext)
  })
  files.value.push(...validFiles)
}

// 移除文件
const removeFile = (index) => {
  files.value.splice(index, 1)
}

// 滚动到底部
const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
}

// 开始模拟 - 立即跳转，API调用在Process页面进行
const startSimulation = () => {
  if (!canSubmit.value || loading.value) return
  
  // 存储待上传的数据
  import('../store/pendingUpload.js').then(({ setPendingUpload }) => {
    setPendingUpload(files.value, formData.value.simulationRequirement, seedText.value)
    
    // 立即跳转到Process页面（使用特殊标识表示新建项目）
    router.push({
      name: 'Process',
      params: { projectId: 'new' }
    })
  })
}

/** Pratinjau graf + workbench tanpa LLM/Zep */
const startDemoVisualization = async () => {
  if (demoVizLoading.value || loading.value) return
  demoVizLoading.value = true
  error.value = ''
  try {
    const scenario =
      formData.value.simulationRequirement.trim() ||
      '(demo) Pratinjau visualisasi — tanpa LLM'
    const res = await bootstrapDemoVisualization({
      simulation_requirement: scenario,
      name: 'Demo visualisasi (tanpa LLM)'
    })
    if (res.success && res.data?.project_id) {
      router.push({
        name: 'Process',
        params: { projectId: res.data.project_id }
      })
    }
  } catch (e) {
    error.value = e?.message || String(e)
    console.error(e)
  } finally {
    demoVizLoading.value = false
  }
}
</script>

<style scoped>
.home-container {
  --font-mono: 'JetBrains Mono', monospace;
  --font-sans: 'Hanken Grotesk', 'Noto Sans SC', system-ui, sans-serif;
  --font-cn: 'Noto Sans SC', system-ui, sans-serif;
  --orange: var(--mm-accent);
  min-height: 100vh;
  background: var(--mm-page-bg);
  font-family: var(--font-sans);
  color: var(--mm-text-primary);
}

/* 顶部导航 */
.navbar {
  height: 60px;
  background: var(--mm-nav-bg);
  color: var(--mm-nav-text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-bottom: 1px solid var(--mm-border);
}

.nav-brand {
  font-family: var(--font-mono);
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 1.2rem;
  color: var(--mm-nav-text);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 16px;
}

.github-link {
  color: var(--mm-nav-text);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.2s;
}

.github-link:hover {
  opacity: 0.8;
}

.arrow {
  font-family: sans-serif;
}

/* 主要内容区 */
.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 40px;
}

/* Hero 区域 */
.hero-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  position: relative;
}

.hero-left {
  flex: 1;
  padding-right: 60px;
}

.tag-row {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.orange-tag {
  background: var(--mm-accent);
  color: #0a0a0c;
  padding: 4px 10px;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 0.75rem;
}

.version-text {
  color: var(--mm-text-muted);
  font-weight: 500;
  letter-spacing: 0.5px;
}

.main-title {
  font-size: 4.5rem;
  line-height: 1.2;
  font-weight: 500;
  margin: 0 0 40px 0;
  letter-spacing: -2px;
  color: var(--mm-text-primary);
}

.gradient-text {
  background: linear-gradient(90deg, #fafafa 0%, #71717a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.hero-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--mm-text-secondary);
  max-width: 640px;
  margin-bottom: 50px;
  font-weight: 400;
  text-align: justify;
}

.hero-desc p {
  margin-bottom: 1.5rem;
}

.highlight-bold {
  color: var(--mm-text-primary);
  font-weight: 700;
}

.highlight-orange {
  color: var(--orange);
  font-weight: 700;
  font-family: var(--font-mono);
}

.highlight-code {
  background: rgba(255, 255, 255, 0.06);
  padding: 2px 6px;
  border-radius: 2px;
  font-family: var(--font-mono);
  font-size: 0.9em;
  color: var(--mm-text-primary);
  font-weight: 600;
}

.slogan-text {
  font-size: 1.2rem;
  font-weight: 520;
  color: var(--mm-text-primary);
  letter-spacing: 1px;
  border-left: 3px solid var(--orange);
  padding-left: 15px;
  margin-top: 20px;
}

.blinking-cursor {
  color: var(--orange);
  animation: blink 1s step-end infinite;
  font-weight: 700;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.decoration-square {
  width: 16px;
  height: 16px;
  background: var(--orange);
}

.hero-right {
  flex: 0.8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.logo-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
}

.hero-logo {
  font-family: var(--mm-font-ui, 'Hanken Grotesk', sans-serif);
  font-weight: 800;
  font-size: clamp(48px, 6vw, 92px);
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--mm-text-primary);
  user-select: none;
}

.hero-logo .wordmark-accent {
  color: var(--mm-accent);
}

.scroll-down-btn {
  width: 40px;
  height: 40px;
  border: 1px solid var(--mm-border);
  background: var(--mm-bg-elevated);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--orange);
  font-size: 1.2rem;
  transition: all 0.2s;
}

.scroll-down-btn:hover {
  border-color: var(--orange);
}

/* Dashboard 双栏布局 */
.dashboard-section {
  display: flex;
  gap: 60px;
  border-top: 1px solid var(--mm-border);
  padding-top: 60px;
  align-items: flex-start;
}

.dashboard-section .left-panel,
.dashboard-section .right-panel {
  display: flex;
  flex-direction: column;
}

/* 左侧面板 */
.left-panel {
  flex: 0.8;
}

.panel-header {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--mm-text-muted);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.status-dot {
  color: var(--orange);
  font-size: 0.8rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 520;
  margin: 0 0 15px 0;
}

.section-desc {
  color: var(--mm-text-secondary);
  margin-bottom: 25px;
  line-height: 1.6;
}

.metrics-row {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

.metric-card {
  border: 1px solid var(--mm-border);
  background: var(--mm-bg-elevated);
  padding: 20px 30px;
  min-width: 150px;
}

.metric-value {
  font-family: var(--font-mono);
  font-size: 1.8rem;
  font-weight: 520;
  margin-bottom: 5px;
}

.metric-label {
  font-size: 0.85rem;
  color: var(--mm-text-muted);
}

/* 项目模拟步骤介绍 */
.steps-container {
  border: 1px solid var(--mm-border);
  background: var(--mm-bg-elevated);
  padding: 30px;
  position: relative;
}

.steps-header {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--mm-text-muted);
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.diamond-icon {
  font-size: 1.2rem;
  line-height: 1;
}

.workflow-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.workflow-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.step-num {
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--mm-text-muted);
  opacity: 0.9;
}

.step-info {
  flex: 1;
}

.step-title {
  font-weight: 520;
  font-size: 1rem;
  margin-bottom: 4px;
}

.step-desc {
  font-size: 0.85rem;
  color: var(--mm-text-secondary);
}

/* 右侧交互控制台 */
.right-panel {
  flex: 1.2;
}

.console-box {
  border: 1px solid var(--mm-border-subtle);
  background: var(--mm-bg-elevated);
  padding: 8px;
}

.console-section {
  padding: 20px;
}

.console-section.btn-section {
  padding-top: 0;
}

.console-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--mm-text-secondary);
}

.seed-block {
  margin-bottom: 12px;
}

.seed-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--mm-text-secondary);
  margin-bottom: 8px;
}

.seed-textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--mm-border);
  background: var(--mm-bg-input);
  color: var(--mm-text-primary);
  padding: 14px 16px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.55;
  resize: vertical;
  outline: none;
  min-height: 100px;
}

.seed-textarea:focus {
  border-color: var(--mm-accent);
  background: var(--mm-bg-muted);
}

.seed-textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.seed-divider {
  text-align: center;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--mm-text-muted);
  margin: 10px 0 12px;
  letter-spacing: 0.5px;
}

.upload-zone {
  border: 1px dashed var(--mm-border-subtle);
  height: 200px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  background: var(--mm-bg-input);
}

.upload-zone.has-files {
  align-items: flex-start;
}

.upload-zone:hover {
  background: var(--mm-bg-muted);
  border-color: var(--mm-text-muted);
}

.upload-placeholder {
  text-align: center;
}

.upload-icon {
  width: 40px;
  height: 40px;
  border: 1px solid var(--mm-border);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  color: var(--mm-text-muted);
}

.upload-title {
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: var(--mm-text-primary);
}

.upload-hint {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--mm-text-muted);
}

.file-list {
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.file-item {
  display: flex;
  align-items: center;
  background: var(--mm-bg-muted);
  padding: 8px 12px;
  border: 1px solid var(--mm-border);
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.file-name {
  flex: 1;
  margin: 0 10px;
}

.remove-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--mm-text-muted);
}

.console-divider {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.console-divider::before,
.console-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--mm-border);
}

.console-divider span {
  padding: 0 15px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--mm-text-muted);
  letter-spacing: 1px;
}

.input-wrapper {
  position: relative;
  border: 1px solid var(--mm-border);
  background: var(--mm-bg-input);
}

.code-input {
  width: 100%;
  border: none;
  background: transparent;
  color: var(--mm-text-primary);
  padding: 20px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
  resize: vertical;
  outline: none;
  min-height: 150px;
}

.model-badge {
  position: absolute;
  bottom: 10px;
  right: 15px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--mm-text-muted);
}

.start-engine-btn {
  width: 100%;
  background: var(--mm-accent);
  color: #0a0a0c;
  border: none;
  padding: 20px;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

/* 可点击状态（非禁用） */
.start-engine-btn:not(:disabled) {
  background: var(--mm-accent);
  border: 1px solid var(--mm-accent);
  animation: pulse-border 2s infinite;
}

.start-engine-btn:hover:not(:disabled) {
  background: var(--mm-accent-hover);
  border-color: var(--mm-accent-hover);
  transform: translateY(-2px);
}

.start-engine-btn:active:not(:disabled) {
  transform: translateY(0);
}

.start-engine-btn:disabled {
  background: var(--mm-bg-muted);
  color: var(--mm-text-muted);
  cursor: not-allowed;
  transform: none;
  border: 1px solid var(--mm-border);
}

.demo-viz-hint {
  margin: 14px 0 8px;
  font-size: 0.78rem;
  line-height: 1.45;
  color: var(--mm-text-secondary);
  font-family: var(--font-mono);
}

.demo-viz-btn {
  width: 100%;
  margin-top: 4px;
  background: transparent;
  color: var(--mm-text-primary);
  border: 1px solid var(--mm-border-strong);
  padding: 14px 18px;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: background 0.2s, color 0.2s;
}

.demo-viz-btn:hover:not(:disabled) {
  background: var(--mm-bg-muted);
  border-color: var(--mm-accent);
  color: var(--mm-accent-hover);
}

.demo-viz-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.home-inline-error {
  margin-top: 12px;
  font-size: 0.8rem;
  color: var(--mm-error);
  font-family: var(--font-mono);
}

/* Narrative band */
.narrative-band {
  border-top: 1px solid var(--mm-border);
  padding-top: 60px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.band-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: var(--mm-text-muted);
}

.band-eyebrow.accent {
  color: var(--mm-accent);
}

.problem-strip {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.problem-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.problem-list li {
  position: relative;
  padding-left: 20px;
  font-size: 1.02rem;
  line-height: 1.55;
  color: var(--mm-text-secondary);
}

.problem-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 8px;
  height: 8px;
  background: var(--mm-accent);
}

.narrative-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 40px;
  align-items: start;
}

.output-preview {
  padding: 28px 32px;
}

.op-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 12px 0 20px;
  color: var(--mm-text-primary);
}

.op-verdict-row {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 24px;
}

.op-verdict {
  font-family: var(--font-mono);
  font-weight: 800;
  font-size: 1.35rem;
  letter-spacing: 0.02em;
}

.op-confidence {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--mm-text-secondary);
}

.op-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 20px;
}

.op-block h4 {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--mm-text-muted);
  margin: 0 0 8px;
  font-weight: 700;
}

.op-block ul {
  margin: 0;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.op-block li {
  font-size: 0.88rem;
  line-height: 1.45;
  color: var(--mm-text-secondary);
}

.op-disclaimer {
  border-top: 1px solid var(--mm-border);
  padding-top: 14px;
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--mm-text-muted);
}

.pillars {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.pillar {
  border-left: 2px solid var(--mm-accent);
  padding-left: 16px;
}

.pillar-title {
  font-weight: 600;
  font-size: 1.02rem;
  margin-bottom: 4px;
  color: var(--mm-text-primary);
}

.pillar-desc {
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--mm-text-secondary);
}

.institutions {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  border-top: 1px solid var(--mm-border);
  padding-top: 28px;
}

.inst-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--mm-text-muted);
  text-transform: uppercase;
}

.inst-names {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
}

.inst-names span {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--mm-text-secondary);
  letter-spacing: 0.02em;
}

@media (max-width: 1024px) {
  .problem-list,
  .narrative-grid,
  .op-columns {
    grid-template-columns: 1fr;
  }
}

/* 引导动画：微妙的边框脉冲 */
@keyframes pulse-border {
  0% { box-shadow: 0 0 0 0 var(--mm-accent-glow); }
  70% { box-shadow: 0 0 0 8px rgba(255, 107, 53, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 107, 53, 0); }
}

/* 响应式适配 */
@media (max-width: 1024px) {
  .dashboard-section {
    flex-direction: column;
  }
  
  .hero-section {
    flex-direction: column;
  }
  
  .hero-left {
    padding-right: 0;
    margin-bottom: 40px;
  }
  
  .hero-logo {
    font-size: clamp(40px, 12vw, 64px);
    margin-bottom: 20px;
  }
}
</style>

<style>
/* English locale adjustments (unscoped to target html[lang]) */
html[lang="en"] .main-title {
  font-size: 3.5rem;
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -1px;
}

html[lang="en"] .hero-desc {
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: 0;
}

html[lang="en"] .slogan-text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: 0;
}

html[lang="en"] .tag-row {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

html[lang="en"] .navbar .nav-links {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Left pane: system status + workflow */
html[lang="en"] .status-section {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

html[lang="en"] .status-section .status-ready {
  font-size: 1.6rem;
}

html[lang="en"] .status-section .metric-value {
  font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1.4rem;
}

html[lang="en"] .workflow-list .step-title {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

html[lang="en"] .workflow-list .step-desc {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  font-size: 0.72rem !important;
  line-height: 1.4 !important;
}

html[lang="en"] .workflow-list {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>
