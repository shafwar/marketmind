/**
 * Merges locales/en.json with locales/id-overrides.json and writes locales/id.json.
 * Applies light string polish to api/progress/log/report/console for consistency.
 */
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const enPath = path.join(root, 'locales', 'en.json')
const ovPath = path.join(root, 'locales', 'id-overrides.json')
const outPath = path.join(root, 'locales', 'id.json')

function deepMerge(a, b) {
  if (!b) return a
  if (Array.isArray(a)) {
    return Array.isArray(b) ? b : a
  }
  const out = { ...a }
  for (const k of Object.keys(b)) {
    const bv = b[k]
    const av = a[k]
    if (
      bv !== null &&
      typeof bv === 'object' &&
      !Array.isArray(bv) &&
      av !== null &&
      typeof av === 'object' &&
      !Array.isArray(av)
    ) {
      out[k] = deepMerge(av, bv)
    } else {
      out[k] = bv
    }
  }
  return out
}

function polishTechnical(str) {
  if (typeof str !== 'string') return str
  return str
    .replace(/\bMiroFish\b/g, 'MarketMind')
    .replace(/\bReport Agent\b/g, 'Agen Ringkasan')
    .replace(/\bReportAgent\b/g, 'AgenRingkasan')
    .replace(/\bAgents\b/g, 'Investor')
    .replace(/\bAgent\b/g, 'Investor')
    .replace(/\bagents\b/g, 'investor')
    .replace(/\bSimulation\b/g, 'Simulasi pasar')
    .replace(/\bsimulation\b/g, 'simulasi pasar')
    .replace(/\bSimulations\b/g, 'Simulasi pasar')
    .replace(/\bGraph build\b/gi, 'Pembangunan graf')
    .replace(/\bGraph Build\b/g, 'Pembangunan graf')
    .replace(/\bGraph\b(?=RAG)/g, 'Graph')
}

function walkPolish(obj) {
  if (Array.isArray(obj)) return obj.map(walkPolish)
  if (obj && typeof obj === 'object') {
    const o = {}
    for (const k of Object.keys(obj)) o[k] = walkPolish(obj[k])
    return o
  }
  return polishTechnical(obj)
}

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'))
const ov = JSON.parse(fs.readFileSync(ovPath, 'utf8'))
let id = deepMerge(JSON.parse(JSON.stringify(en)), ov)
for (const ns of ['api', 'progress', 'log', 'report', 'console']) {
  if (id[ns]) id[ns] = walkPolish(id[ns])
}
fs.writeFileSync(outPath, JSON.stringify(id, null, 2) + '\n', 'utf8')
console.log('Wrote', outPath)
