# MarketMind — UI Inventory & Redesign Checklist

Exhaustive list of every page, view, component, modal, panel, widget, copy block, CTA, progress indicator, metric card, navigation element, and status message that requires redesign. This is the implementation checklist for `IMPLEMENTATION-ROADMAP.md`. Every row is grounded in an actual file/i18n key in the repo.

**Legend** — Action: `RESKIN` (style/copy only) · `REFRAME` (relabel + re-narrate) · `RESTRUCTURE` (reorder DOM, same data) · `NEW` (new presentational wrapper over existing data/logic) · `KEEP` (do not touch). Milestone = M1–M5.

> Frozen (KEEP, never edit): `GraphPanel.vue` rendering, `frontend/src/api/*`, `frontend/src/router/index.js` paths, `frontend/src/store/pendingUpload.js` logic, backend, workflow.

---

## A. Global / cross-page elements

| # | Element | Type | Current state | Action | File(s) | Milestone |
|---|---|---|---|---|---|---|
| G1 | Brand wordmark | brand | "MARKETMIND" text + MiroFish logo image | RESKIN | `assets/logo/*`, `LanguageSwitcher.vue`, `index.html`, `brand.*` | M1 |
| G2 | Page `<title>` / meta | copy | "MiroFish - Predict Everything" | REFRAME | `locales.meta.*`, `index.html` | M1 |
| G3 | Tagline | copy | "Concise & Universal Swarm Intelligence Engine" | REFRAME | `locales.home.tagline` | M1 |
| G4 | Six-stage journey progress rail | progress | "Step 1/5 GraphBuild" style (`main.stepNames`) | NEW | `JourneyProgress.vue` (new), 5 views | M2 |
| G5 | Four-question meaning rail | panel | absent | NEW | `MeaningRail.vue` (new), P1–P4 views | M2 |
| G6 | Primary CTA pattern | CTA | inconsistent per step | RESTRUCTURE | all views/Steps | M2 |
| G7 | Language switcher | nav | functional | KEEP (RESKIN only) | `LanguageSwitcher.vue` | M3 |
| G8 | Typography system | brand | system fonts | RESKIN | `theme.css`, `index.html` | M1 |
| G9 | Color tokens + verdict aliases | brand | dark + orange present | RESKIN | `theme.css` | M1/M3 |
| G10 | Icon set | brand | mixed | RESKIN | all components | M3 |
| G11 | Card/elevation system | UI | ad-hoc | RESKIN | `theme.css`, all `<style>` | M3 |
| G12 | Loading skeletons (global) | status | spinners/text | RESKIN | P1–P4 | M2/M5 |
| G13 | Error wrapper (hide raw `api.*`) | status | raw strings surface | REFRAME | `locales.api.*`, views | M2/M5 |
| G14 | History browser | nav | `HistoryDatabase.vue` | REFRAME (copy) | `HistoryDatabase.vue`, `locales.history.*` | M2 |
| G15 | Orphan view | cleanup | `Process.vue` (2067, unreferenced) | REMOVE/deprecate | `Process.vue` | M5 |

---

## B. Page 0 — Landing / Scenario Intake (`Home.vue`)

**Sections (NEW presentational, reuse existing intake logic):**

| # | Element | Type | Current | Action | Milestone |
|---|---|---|---|---|---|
| P0-1 | Hero (H1 + subhead + CTA) | section | "Upload Reports, Predict the Future" | REFRAME/NEW | M4 |
| P0-2 | Problem strip (3 lines) | section | absent | NEW | M4 |
| P0-3 | How-it-works (4 steps) | widget | `home.step01–05*` engine desc | REFRAME | M4 |
| P0-4 | Output preview (verdict mock) | widget | absent | NEW | M4 |
| P0-5 | Why-MarketMind pillars ×3 | widget | absent | NEW | M4 |
| P0-6 | Supported scenarios chips | widget | absent | NEW | M4 |
| P0-7 | Built-for institution row | widget | absent | NEW | M4 |
| P0-8 | Intake panel (dropzone) | form | `home.realitySeed`, `dragToUpload`, `orBrowse` | REFRAME + KEEP logic | M4 |
| P0-9 | Paste-text area | form | `home.seedHeading/seedTextPlaceholder` | REFRAME | M4 |
| P0-10 | Simulation-need field | form | `home.simulationPrompt/promptPlaceholder` | REFRAME | M4 |
| P0-11 | Preset scenario cards ×2 | CTA | present | REFRAME | M4 |
| P0-12 | "Start Engine" button | CTA | `home.startEngine` | REFRAME → "Ekstrak Skenario dari Dokumen" | M4 |
| P0-13 | Demo-viz (no-LLM) button | CTA | `home.demoVizBtn/Hint` | REFRAME → "Preview tanpa AI" (KEEP logic) | M4 |
| P0-14 | System-status widget | status | `home.systemStatus/systemReady*` | REFRAME/remove | M4 |
| P0-15 | Metric cards (cost/scale) | metric | `home.metricLowCost*`, `metricHighAvail*` "Avg $5/sim / Millions of Agents" | REFRAME (honest, KSEI-framed) | M4 |
| P0-16 | Version badge | copy | `home.version /v0.1-Preview` | RESKIN | M1 |

---

## C. Page 1 — Market Context Intelligence (`MainView.vue` + `Step1GraphBuild.vue`)

| # | Element | Type | Current | Action | Milestone |
|---|---|---|---|---|---|
| P1-1 | The graph | viz | `GraphPanel.vue` | **KEEP** | — |
| P1-2 | Title / subtitle | copy | "Ontology Generation / GraphRAG Build" | REFRAME → "Konteks Pasar" | M2 |
| P1-3 | Meaning rail (4Q) | panel | absent | NEW | M2 |
| P1-4 | Metric: Entity Nodes | metric | `step1.entityNodes` | REFRAME → "Aktor & Konsep Pasar" | M1 |
| P1-5 | Metric: Relation Edges | metric | `step1.relationEdges` | REFRAME → "Hubungan Teridentifikasi" | M1 |
| P1-6 | Metric: Schema Types | metric | `step1.schemaTypes` | REFRAME → "Kategori Konteks" | M1 |
| P1-7 | Graph legend | widget | schema-type codes | REFRAME → business categories | M2 |
| P1-8 | Insight strip | widget | absent | NEW | M2 |
| P1-9 | Node detail side panel | panel | `graph.nodeDetails/relationship` | REFRAME → "Detail Aktor / Hubungan" | M2 |
| P1-10 | Status: building graph | status | `step1.analyzingDocs`, `graph.waitingOntology`, `progress.creatingZepGraph` etc. | REFRAME → "Menyusun peta konteks pasar…" | M2 |
| P1-11 | Build-complete banner | status | `step1.buildComplete/Desc` | REFRAME | M2 |
| P1-12 | Primary CTA | CTA | `step1.enterEnvSetup` "Enter Environment Setup" | REFRAME → "Siapkan Populasi Pasar" | M2 |
| P1-13 | System ID label | copy | `step1.systemIdLabel` "Project ID" | REFRAME → "ID Analisis" | M1 |

---

## D. Page 2 — Market Preparation (`MainView.vue`/`SimulationView.vue` + `Step2EnvSetup.vue`)

| # | Element | Type | Current | Action | Milestone |
|---|---|---|---|---|---|
| P2-1 | Section: instance init | section | `step2.simInstanceInit/Desc` | REFRAME → "Persiapan Pasar" | M2 |
| P2-2 | Section: Synthetic Population | section | `step2.generateAgentPersona*` | REFRAME → "Populasi Sintetis" | M2 |
| P2-3 | Provenance badges (KSEI/OJK/default) | widget | absent | NEW | M2/M4 |
| P2-4 | Segment weight bars | metric | present | REFRAME + provenance | M2 |
| P2-5 | Metric: Current/Expected Agents | metric | `step2.currentAgentCount/expectedAgentTotal` | REFRAME → "Investor Sintetis" | M1 |
| P2-6 | Archetype card grid (the Cast) | widget | `step2.generatedAgentPersonas` | REFRAME → "Tokoh Pasar" | M2 |
| P2-7 | Archetype stance badge | widget | absent/implicit | NEW (pro/kontra/netral) | M2 |
| P2-8 | Persona detail modal | modal | `step2.profileModal*` (MBTI, age, gender, bio) | REFRAME → drop MBTI, business bio | M2 |
| P2-9 | Persona dimension tabs | widget | `step2.personaDim*` (experience/behavior/memory/social) | REFRAME | M2 |
| P2-10 | Behavior init explanation | copy | absent (raw config) | NEW (OCEAN honest framing) | M2 |
| P2-11 | Policy assumptions table | widget | params, no provenance | RESTRUCTURE + provenance | M2/M4 |
| P2-12 | Communication channels | section | `step2.dualPlatformConfig*`, `platform1/2Name` | REFRAME → "Saluran Komunikasi" | M1/M2 |
| P2-13 | Advanced params (sliders) | widget | `step2.recencyWeight`, `viralThreshold`, `echoChamberStrength`, `activityLevel`, `influenceWeight` | RESTRUCTURE → collapse "Parameter lanjutan" | M2 |
| P2-14 | LLM config reasoning | panel | `step2.llmConfigReasoning` | RESTRUCTURE → collapse | M2 |
| P2-15 | Rounds config | widget | `step2.roundsConfig*`, `customToggle`, `estimatedDuration` | REFRAME (honest note) | M2 |
| P2-16 | Initial activation orchestration | section | `step2.initialActivation*`, `narrativeDirection`, `initialHotTopics` | REFRAME | M2 |
| P2-17 | Setup-complete banner | status | `step2.setupComplete/Desc` | REFRAME | M2 |
| P2-18 | Back CTA | CTA | `step2.backToGraphBuild` | REFRAME → "Kembali ke Konteks" | M2 |
| P2-19 | Primary CTA | CTA | `step2.startDualWorldSim` "Start Dual-World Parallel Simulation" | REFRAME → "Jalankan Simulasi Pasar" | M2 |
| P2-20 | Status messages | status | `progress.readingGraphEntities`, `generatingProfiles`, `generatingSimConfig` | REFRAME | M2 |

---

## E. Page 3 — Market Simulation (`SimulationRunView.vue` + `Step3Simulation.vue`)

| # | Element | Type | Current | Action | Milestone |
|---|---|---|---|---|---|
| P3-1 | The graph (live playback) | viz | `GraphPanel.vue` | **KEEP** | — |
| P3-2 | Title / subtitle | copy | "Run Simulation / dual-platform" | REFRAME → "Simulasi Pasar" | M2 |
| P3-3 | Live narration panel | panel | raw action log (`step3.waitingForActions`, `roundLabel`, `actsLabel`) | NEW (over same event data) | M4 |
| P3-4 | Debat Publik feed | panel | action stream / platform posts | NEW (reframe of event stream) | M4 |
| P3-5 | Live stat badges (adopt/reject/panic %) | metric | round/time labels | NEW/REFRAME | M4 |
| P3-6 | Signature line overlay | copy | absent | NEW ("Tidak ada yang menyuruh mereka panik…") | M4 |
| P3-7 | Playback / speed controls | widget | present | RESKIN | M3 |
| P3-8 | Timeline / round indicator | progress | `step3.timelineTotalEvents`, `roundLabel` | REFRAME | M2 |
| P3-9 | Platform labels | copy | `step3.platformFeed/platformCommunity` | REFRAME → "Saluran…" | M1 |
| P3-10 | Start/stop/status logs | status | `step3.startingDualSim`, `engineStarted`, `simCompleted` etc. | REFRAME (collapse raw) | M2 |
| P3-11 | Meaning rail (condensed) | panel | absent | NEW | M2 |
| P3-12 | Primary CTA (on complete) | CTA | `step3.startGenerateReport` "Generate Report" | REFRAME → "Lihat Rekomendasi" | M2 |
| P3-13 | Tooltip: available actions | widget | `step3.tooltipActionsTitle` | REFRAME | M2 |

---

## F. Page 4 — Decision Intelligence (`ReportView.vue` + `Step4Report.vue`, 5292 lines)

| # | Element | Type | Current | Action | Milestone |
|---|---|---|---|---|---|
| P4-1 | Verdict header | widget | `step4.outcomeTitle` "Decision summary" | RESTRUCTURE → verdict-first, loud | M4 |
| P4-2 | Confidence score | metric | `step4.confidenceScore` | REFRAME → "Keyakinan 71%" | M4 |
| P4-3 | Eyebrow (directional) | copy | absent | NEW | M1/M4 |
| P4-4 | Executive summary | section | `step4.outcomePlaceholder` | RESTRUCTURE | M4 |
| P4-5 | Primary recommendation | section | `step4.primaryRecommendation` | RESTRUCTURE | M4 |
| P4-6 | Key findings | section | report sections | RESTRUCTURE | M4 |
| P4-7 | Top drivers | widget | in report | NEW/RESTRUCTURE | M4 |
| P4-8 | Affected stakeholders | widget | in report | RESTRUCTURE | M4 |
| P4-9 | Market dynamics chart | chart | in report | RESKIN | M4 |
| P4-10 | Consensus panel (CI/agreement/histogram/outliers) | metric | `step4.reportBadge`, run stats | RESTRUCTURE → "instrument" panel | M4 |
| P4-11 | Evidence links | widget | absent | NEW (link to graph/pop/debate) | M4 |
| P4-12 | Risk analysis | section | `step4.riskAnalysis` | RESTRUCTURE | M4 |
| P4-13 | Alternative outcomes | widget | absent | NEW | M4 |
| P4-14 | Action steps | widget | `step4.additionalInsights` | REFRAME → "Langkah Aksi" | M4 |
| P4-15 | Honest-limits card | widget | absent | NEW | M4 |
| P4-16 | Metric strip (sections/elapsed/tools) | metric | `step4.metricSections/Elapsed/Tools` | RESTRUCTURE → collapse technical | M2 |
| P4-17 | Console log (technical) | panel | `step4.consoleTitle`, `rawOutput`, `showParams` | RESTRUCTURE → collapse "detail teknis" | M2 |
| P4-18 | Report evidence tabs | widget | `step4.tabKeyFacts/CoreEntities/RelationChains/SubQueries` | REFRAME (business labels) | M1/M2 |
| P4-19 | World 1 / World 2 labels | copy | `step4.world1/world2` | REFRAME | M1 |
| P4-20 | Section-generating status | status | `step4.generatingSection`, `wf*`, `logAction.*` | REFRAME | M2 |
| P4-21 | Primary CTA | CTA | `step4.goToInteraction` "Enter Deep Interaction" | REFRAME → "Susun Dossier Keputusan" | M2 |

---

## G. Page 5 — Decision Dossier (`InteractionView.vue` + `Step5Interaction.vue`)

| # | Element | Type | Current | Action | Milestone |
|---|---|---|---|---|---|
| P5-1 | Dossier document view | section | absent (chat-only) | NEW (board-order report) | M4 |
| P5-2 | Dossier light/print theme | brand | dark only | NEW (`@media print`) | M3 |
| P5-3 | Export PDF | CTA | absent | NEW | M4 |
| P5-4 | Share link | CTA | deep link exists | REFRAME | M4 |
| P5-5 | Presentation mode | widget | absent | NEW | M4 |
| P5-6 | Scenario comparison | widget | absent | NEW | M4 |
| P5-7 | Expected timeline | widget | absent | NEW | M4 |
| P5-8 | Tool: InsightForge | CTA | `step5.toolInsightForge*` | REFRAME → "Telusuri Alasan" | M1 |
| P5-9 | Tool: PanoramaSearch | CTA | `step5.toolPanoramaSearch*` | REFRAME → "Lacak Penyebaran" | M1 |
| P5-10 | Tool: QuickSearch | CTA | `step5.toolQuickSearch*` | REFRAME → "Cari Fakta" | M1 |
| P5-11 | Tool: InterviewSubAgent | CTA | `step5.toolInterviewSubAgent*` | REFRAME → "Wawancarai Investor" | M1 |
| P5-12 | Chat with Report Agent | widget | `step5.chatWithReportAgent`, `reportAgentDesc` | REFRAME → "Tanya Analis" | M1 |
| P5-13 | Chat with individual | widget | `step5.chatWithAgent` | REFRAME | M1 |
| P5-14 | Survey to the world | widget | `step5.sendSurvey`, `surveyQuestions`, `surveyResults` | REFRAME | M1 |
| P5-15 | Agents-available counter | metric | `step5.agentsAvailable` | REFRAME → "Investor" | M1 |
| P5-16 | Chat empty/placeholder | status | `step5.chatEmpty*`, `chatInputPlaceholder` | REFRAME | M2 |
| P5-17 | Error strings | status | `step5.errorOccurred`, `requestFailed` | REFRAME (friendly) | M2/M5 |

---

## H. Modals & overlays

| # | Element | File | Action | Milestone |
|---|---|---|---|---|
| MOD-1 | Persona/archetype detail modal | `Step2EnvSetup.vue` | REFRAME (drop MBTI) | M2 |
| MOD-2 | Graph node detail overlay | `GraphPanel.vue` labels only (not render) — surface via view copy | REFRAME copy | M2 |
| MOD-3 | Confirm dialogs (destructive/back) | views | RESKIN + confirm-before-leave | M2/M5 |
| MOD-4 | Graph maximize/restore | `graph.toggleMaximize` | KEEP + RESKIN | M3 |

---

## I. Status-message catalogue (humanize — no raw engine text)

All of these currently surface engine language and must be reframed to business narration (M2/M5). Source keys:

- `progress.*` — build/prepare/report progress (Zep, chunks, episodes, ontology) → market-context / population / decision narration.
- `main.status*` — "Building graph / Generating ontology" → "Menyusun konteks / Menyiapkan populasi."
- `api.*` — raw error strings (never render directly; wrap with friendly message + recovery).
- `log.*`, `console.*`, `report.*` — technical logs → keep only under "detail teknis" disclosure; never in the default executive view.
- `graph.graphMemoryRealtime`, `realtimeUpdating` → "Konteks diperbarui secara langsung."

---

## J. Completion checklist (roll-up)

- [ ] **M1** G1–G3, G8–G9, P0-16, all `REFRAME`-M1 copy keys, terminology sweep (§ Terminology Guide) — 0 engine words in `id.json`/`en.json` values.
- [ ] **M2** G4–G6, G12–G14, all meaning rails, progress rail, CTA normalization, disclosure collapses, status humanization.
- [ ] **M3** G7, G10–G11, card/icon/mono/verdict systems, dossier print theme.
- [ ] **M4** Pages 0/3/4/5 structural builds (P0-1..15, P3-3..6, P4-1..15, P5-1..7).
- [ ] **M5** G15, accessibility, empty/error states, tabular audit, deterministic demo dry-run.

Every checked row must leave `GraphPanel.vue`, `api/*`, router paths, backend, and workflow untouched.

---

*End of UI Inventory. Use alongside `PRODUCT-BLUEPRINT.md` (the why) and `IMPLEMENTATION-ROADMAP.md` (the when).*
