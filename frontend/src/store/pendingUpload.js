/**
 * Menyimpan sementara berkas, teks benih data, dan deskripsi skenario
 * sebelum navigasi ke halaman proses / pembangunan graf.
 */
import { reactive } from 'vue'

const state = reactive({
  files: [],
  seedText: '',
  simulationRequirement: '',
  isPending: false
})

/**
 * Gabungkan berkas unggahan + teks benih menjadi daftar File untuk /ontology/generate.
 * Teks non-kosong dikirim sebagai benih_teks.txt agar backend tidak perlu diubah.
 */
export function buildFilesForOntology(pending) {
  const list = [...(pending.files || [])]
  const text = (pending.seedText || '').trim()
  if (text) {
    list.push(new File([text], 'benih_teks.txt', { type: 'text/plain;charset=utf-8' }))
  }
  return list
}

/** true jika ada setidaknya satu sumber: berkas atau teks benih */
export function hasSeedSource(pending) {
  return (pending.files && pending.files.length > 0) || !!(pending.seedText && pending.seedText.trim())
}

export function setPendingUpload(files, requirement, seedText = '') {
  state.files = files
  state.seedText = seedText
  state.simulationRequirement = requirement
  state.isPending = true
}

export function getPendingUpload() {
  return {
    files: state.files,
    seedText: state.seedText,
    simulationRequirement: state.simulationRequirement,
    isPending: state.isPending
  }
}

export function clearPendingUpload() {
  state.files = []
  state.seedText = ''
  state.simulationRequirement = ''
  state.isPending = false
}

export default state
