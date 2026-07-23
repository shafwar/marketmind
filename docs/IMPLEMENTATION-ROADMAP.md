# MarketMind — Implementation Roadmap

Translates `PRODUCT-BLUEPRINT.md` into concrete, sequenced implementation tasks. Frontend-only. The MiroFish backend, API contracts, routing, simulation workflow, state management, and the `GraphPanel.vue` D3 rendering are **frozen**. Every task below changes presentation, copy, hierarchy, or styling — never data flow.

## Repository facts this roadmap is grounded in

**Views** (`frontend/src/views/`): `Home.vue` (1092) · `MainView.vue` (561, mounts Step1+Step2, uses GraphPanel) · `SimulationView.vue` (439, Step2 re-entry) · `SimulationRunView.vue` (452, Step3) · `ReportView.vue` (353, Step4) · `InteractionView.vue` (355, Step5) · `Process.vue` (2067, **orphan** — router maps `/process` to `MainView`, not this).

**Components** (`frontend/src/components/`): `Step1GraphBuild.vue` (619) · `Step2EnvSetup.vue` (2606) · `Step3Simulation.vue` (1266) · `Step4Report.vue` (5292) · `Step5Interaction.vue` (2584) · `GraphPanel.vue` (1437, **KEEP rendering**) · `HistoryDatabase.vue` (1344) · `LanguageSwitcher.vue` (123).

**Copy source:** `locales/{en,id,id-overrides,zh}.json` + `frontend/src/i18n/index.js`. **Tokens:** `frontend/src/styles/theme.css`. **Router:** `frontend/src/router/index.js` (6 routes — do not change paths).

**Page ↔ file map** (from blueprint §0):

| Page | Primary file(s) | Graph? |
|---|---|---|
| P0 Landing / Intake | `Home.vue` | no |
| P1 Market Context | `MainView.vue` + `Step1GraphBuild.vue` + `GraphPanel.vue` | yes (keep) |
| P2 Market Preparation | `MainView.vue`/`SimulationView.vue` + `Step2EnvSetup.vue` | yes (keep) |
| P3 Market Simulation | `SimulationRunView.vue` + `Step3Simulation.vue` + `GraphPanel.vue` | yes (keep) |
| P4 Decision Intelligence | `ReportView.vue` + `Step4Report.vue` | yes (keep) |
| P5 Decision Dossier | `InteractionView.vue` + `Step5Interaction.vue` | yes (keep) |

**Effort scale:** S ≈ ≤2h · M ≈ ½ day · L ≈ 1–2 days · XL ≈ 3+ days. **Risk:** Low (copy/style only) · Med (layout/DOM restructure) · High (touches data-binding or graph-adjacent logic).

---

## Milestone 1 — High-impact / Low-risk (copy, brand names, tokens)

Pure text and asset swaps. No DOM restructure, no logic. Ships the biggest perceived change per hour. Do this first; it de-MiroFishes the product and unblocks screenshots.

### M1-T1 — Terminology sweep in locales
- **Priority:** P0
- **Effort:** M
- **Files:** `locales/id.json`, `locales/en.json`, `locales/id-overrides.json` (leave `zh.json` untouched — out of scope)
- **Components:** none (i18n only; every component reads keys)
- **Dependencies:** blueprint §13 Terminology Guide
- **Risk:** Low
- **Acceptance:** No user-facing string contains GraphRAG, Ontology, Entity/Edge/Node, Zep, MBTI, Dual-Platform, Reality Seed, InsightForge, PanoramaSearch, QuickSearch, Swarm, "Predict Everything." Values replaced per §13 mapping. Keys unchanged (no code edits). App builds; `grep -riE "graphrag|ontology|\bzep\b|mbti|reality seed|insightforge|panoramasearch|swarm" locales/id.json locales/en.json` returns 0 in string *values*.

### M1-T2 — Brand identity strings & assets
- **Priority:** P0
- **Effort:** S
- **Files:** `locales/en.json` + `id.json` (`meta.title`, `meta.description`, `home.tagline`, `home.heroDescBrand`, `home.engineBadge`), `frontend/src/assets/logo/*`, `index.html` (title/favicon)
- **Components:** `LanguageSwitcher.vue` (brand mark area), any header
- **Dependencies:** M1-T1
- **Risk:** Low
- **Acceptance:** Title reads "MarketMind — Intelijen Keputusan Kebijakan Keuangan," not "MiroFish - Predict Everything." MiroFish logo asset replaced with MarketMind wordmark. No "MiroFish" string anywhere user-facing.

### M1-T3 — Design tokens: typography + refine palette
- **Priority:** P1
- **Effort:** M
- **Files:** `frontend/src/styles/theme.css`, `index.html` (font `<link>` / self-host), `frontend/src/main.js` if global CSS import needed
- **Components:** global
- **Dependencies:** blueprint §12
- **Risk:** Low
- **Acceptance:** Hanken Grotesk (UI), IBM Plex Mono (data/labels) loaded with `font-display: swap`; CSS vars `--mm-font-ui`, `--mm-font-mono` added and applied to `body` + mono labels. Existing color tokens kept; add semantic verdict aliases (`--mm-verdict-proceed/caution/stop`) mapping to existing green/amber/red. No layout regression.

### M1-T4 — Verdict & honesty copy constants
- **Priority:** P1
- **Effort:** S
- **Files:** `locales/id.json`, `locales/en.json` (extend `step4.*`)
- **Components:** consumed later by P4/P5
- **Dependencies:** M1-T1
- **Risk:** Low
- **Acceptance:** Reusable strings exist for the 3 verdicts, the eyebrow "ESTIMASI DIRECTIONAL TERKALIBRASI," and the limits sentence. Ready for M4 binding.

**Milestone 1 exit:** product no longer reads as MiroFish; a screenshot of any current screen shows business language + MarketMind brand.

---

## Milestone 2 — UX Reconstruction (hierarchy, rails, disclosure)

Introduce the blueprint's structural spine: the 6-stage progress rail, the four-question meaning rail, single primary CTA, and progressive disclosure of engine internals. Layout changes; data bindings untouched.

### M2-T1 — Global six-stage progress rail
- **Priority:** P0
- **Effort:** L
- **Files:** new `frontend/src/components/JourneyProgress.vue`; mount in `MainView.vue`, `SimulationView.vue`, `SimulationRunView.vue`, `ReportView.vue`, `InteractionView.vue`; `locales` stage names
- **Components:** new JourneyProgress; replaces the current `main.stepNames` "Step 1/5" treatment
- **Dependencies:** M1-T1; existing per-view `currentStep`/route
- **Risk:** Med (mounts into 5 views; derive stage from route/props, no new state)
- **Acceptance:** Every process view shows the same rail: Intake · Konteks · Persiapan · Simulasi · Keputusan · Dossier; current highlighted, completed navigable back, future disabled. Derived from existing route params — no new store.

### M2-T2 — Four-question meaning rail component
- **Priority:** P0
- **Effort:** L
- **Files:** new `frontend/src/components/MeaningRail.vue`; mount in P1–P4 views; `locales` per-page strings (4 lines × 4 pages)
- **Components:** new MeaningRail; consumes static per-page copy
- **Dependencies:** M1-T1
- **Risk:** Low (presentational, static copy)
- **Acceptance:** Pages 1–4 each render "Apa terjadi / Kenapa penting / AI ngapain / Dapat apa" in fixed position/order, copy per blueprint §8. No process screen lacks purpose text.

### M2-T3 — Primary/secondary CTA normalization
- **Priority:** P1
- **Effort:** M
- **Files:** all 6 views + Step components' action buttons; `locales`
- **Components:** existing buttons in each Step
- **Dependencies:** M1-T1
- **Risk:** Low
- **Acceptance:** Each page has exactly one orange primary CTA labeled as an outcome verb (§6 list); all others visually subordinate. No two primary CTAs on one screen.

### M2-T4 — Progressive disclosure of engine internals
- **Priority:** P1
- **Effort:** L
- **Files:** `Step2EnvSetup.vue` (sliders, echo-chamber/viral/recommendation params, LLM config reasoning), `Step3Simulation.vue` (console/raw log), `Step4Report.vue` (`consoleTitle`, `rawOutput`, params, process detail)
- **Components:** those Steps
- **Dependencies:** M2-T2
- **Risk:** Med (collapse existing panels; keep them mounted, just hidden by default)
- **Acceptance:** Advanced/technical panels are collapsed behind "Lihat detail teknis / Parameter lanjutan" and hidden by default; all data still reachable on expand; no binding removed.

### M2-T5 — Status-message humanization
- **Priority:** P1
- **Effort:** M
- **Files:** `locales` (`progress.*`, `main.status*`, `graph.*`, `api.*` surfaced strings), skeleton usage in Step1/Step3
- **Components:** loading/status regions in P1–P4
- **Dependencies:** M1-T1
- **Risk:** Low
- **Acceptance:** No raw engine status ("Building graph in Zep", "Waiting for ontology") is user-visible; each wait is narrated in business language; waits >300ms show a skeleton, not a bare spinner. Raw `api.*` errors never render directly — wrapped with a friendly message + recovery path.

**Milestone 2 exit:** every process page answers the four questions, shows the journey rail, and hides the machine by default — the "instrument" structure is in place.

---

## Milestone 3 — Branding (visual system application)

Apply the full visual language on top of the tokens from M1-T3. Styling only.

### M3-T1 — Card / surface / elevation system
- **Priority:** P1
- **Effort:** L
- **Files:** `theme.css` + component `<style>` blocks across Steps/views
- **Components:** all cards, panels, badges
- **Dependencies:** M1-T3
- **Risk:** Low
- **Acceptance:** Consistent thin-border cards, one elevation scale, 8px spacing rhythm, low-contrast dividers. Orange used only for primary CTA + live-spread front (audit: no decorative orange).

### M3-T2 — Iconography unification
- **Priority:** P2
- **Effort:** M
- **Files:** icon usages across components; add Lucide (SVG) if not present
- **Components:** all icon sites
- **Dependencies:** none
- **Risk:** Low
- **Acceptance:** One line-icon set, consistent 24px/stroke; zero emoji-as-icon; icons have `aria-label` where interactive.

### M3-T3 — Data typography (mono discipline)
- **Priority:** P2
- **Effort:** M
- **Files:** `theme.css`, metric/label components in Step2/3/4
- **Components:** metric cards, stat badges, IDs, %, CI
- **Dependencies:** M1-T3
- **Risk:** Low
- **Acceptance:** All numeric/technical labels use IBM Plex Mono with `font-variant-numeric: tabular-nums`; no layout jitter on updating numbers.

### M3-T4 — Verdict color semantics
- **Priority:** P1
- **Effort:** S
- **Files:** `theme.css`, P4/P5 verdict components
- **Components:** VerdictHeader (P4), dossier verdict (P5)
- **Dependencies:** M1-T3, M1-T4
- **Risk:** Low
- **Acceptance:** PROCEED/CAUTION/DO-NOT map to green/amber/red; verdict always word + color (never color alone).

### M3-T5 — Dossier light theme (print-safe)
- **Priority:** P2
- **Effort:** M
- **Files:** `InteractionView.vue`/`Step5Interaction.vue` dossier view, scoped light styles + `@media print`
- **Components:** dossier document view
- **Dependencies:** M4-T4 (dossier structure)
- **Risk:** Med (theme override scoped to one view)
- **Acceptance:** Dossier renders white/print-safe without affecting the dark app; `@media print` produces a clean PDF.

**Milestone 3 exit:** the app reads as one premium instrument — coherent cards, mono data, disciplined color, verdict semantics.

---

## Milestone 4 — Decision Intelligence Experience (the payoff pages)

The narrative and structural rebuilds that carry the demo. Highest product value. Layout restructure within existing data bindings.

### M4-T1 — Page 0 Landing rebuild
- **Priority:** P0
- **Effort:** XL
- **Files:** `Home.vue` (+ new presentational subcomponents if useful); `locales` (new `home.*` blocks)
- **Components:** Hero, ProblemStrip, HowItWorks, OutputPreview, PillarCards, ScenarioChips, InstitutionRow, IntakePanel — all new *presentational* wrappers; the existing upload/paste/preset logic in `Home.vue` is reused as the IntakePanel
- **Dependencies:** M1, M3
- **Risk:** Med (large view rewrite; intake logic must keep calling the same API/store `pendingUpload.js`)
- **Acceptance:** Landing sells problem→product→output→proof before the intake; existing upload, paste, preset, and demo-viz actions still function unchanged (same `api/` calls, same navigation). Verdict-mock is static.

### M4-T2 — Page 3 cinematic simulation reframe
- **Priority:** P0
- **Effort:** L
- **Files:** `SimulationRunView.vue`, `Step3Simulation.vue`; `locales` (narration + debate labels)
- **Components:** live narration panel, Debat Publik feed (reframe of existing action/log stream), signature-line overlay; `GraphPanel.vue` untouched
- **Dependencies:** M2, M3; existing simulation event stream
- **Risk:** Med (re-present the existing action/log data as narration + debate; no change to how data arrives)
- **Acceptance:** Raw action log is replaced (by default) with human narration + a debate feed bound to the same event data; live stat badges present; deterministic playback intact; graph rendering byte-identical.

### M4-T3 — Page 4 verdict-first Decision Intelligence
- **Priority:** P0
- **Effort:** XL
- **Files:** `ReportView.vue`, `Step4Report.vue` (5292 lines — restructure presentation, keep report data/section bindings)
- **Components:** VerdictHeader, ExecSummary, FindingsList, DriversChart, StakeholderBreakdown, DynamicsChart, ConsensusPanel, EvidenceLinks, RiskList, AlternativesStrip, ActionSteps, LimitsCard — reorder/rewrap existing report sections; the current keys (`outcomeTitle`, `primaryRecommendation`, `confidenceScore`, `riskAnalysis`) already map here
- **Dependencies:** M1-T4, M3-T4
- **Risk:** Med (large file; presentation reorder only, no report-generation change)
- **Acceptance:** Verdict + confidence render first and loudest; evidence/statistics are collapsible below; honest-limits card present; all existing report content still displayed (nothing dropped); no change to report API/section streaming.

### M4-T4 — Page 5 Dossier + export/present + renamed Q&A
- **Priority:** P1
- **Effort:** L
- **Files:** `InteractionView.vue`, `Step5Interaction.vue`; `locales` (tool renames)
- **Components:** Dossier document view, Export (PDF via `window.print()`/existing mechanism), Share (existing deep link), Presentation mode; the 4 interaction tools renamed per §13
- **Dependencies:** M3-T5
- **Risk:** Med (tool renames are copy; dossier view + print are new presentation over existing data)
- **Acceptance:** Dossier assembles existing report + evidence into board order; tools renamed to business language with identical backend calls; PDF export works; presentation mode is full-screen section-by-section; share link unchanged.

**Milestone 4 exit:** the four payoff pages tell the full decision story; the demo is presentable end-to-end.

---

## Milestone 5 — Polish (accessibility, states, cleanup)

### M5-T1 — Accessibility pass
- **Priority:** P1
- **Effort:** L
- **Files:** global
- **Components:** all
- **Dependencies:** M1–M4
- **Risk:** Low
- **Acceptance:** Contrast ≥4.5:1 (body) / ≥3:1 (secondary) on dark theme verified; visible focus rings; `prefers-reduced-motion` disables the panic animation; charts have text summaries; verdict/status never color-only; icon buttons labeled.

### M5-T2 — Empty / loading / error states
- **Priority:** P2
- **Effort:** M
- **Files:** all views + `locales`
- **Components:** all data panels
- **Dependencies:** M2-T5
- **Risk:** Low
- **Acceptance:** Every async region has a skeleton, an empty state with guidance, and an error state with a retry/recovery path — no raw `api.*` string surfaces.

### M5-T3 — Tabular figures & jitter audit
- **Priority:** P2
- **Effort:** S
- **Files:** metric components
- **Dependencies:** M3-T3
- **Risk:** Low
- **Acceptance:** No horizontal jitter on any updating number during simulation/report.

### M5-T4 — Deterministic playback & demo dry-run
- **Priority:** P1
- **Effort:** M
- **Files:** none (verification); `Step3Simulation.vue`/`GraphPanel.vue` behavior check only
- **Dependencies:** M4-T2
- **Risk:** Low
- **Acceptance:** A seeded/golden run replays identically across takes from round 0; the 5-min demo flow (blueprint §16) runs without hangs.

### M5-T5 — Orphan cleanup
- **Priority:** P3
- **Effort:** S
- **Files:** `Process.vue` (2067, orphan), unused `zh` paths if any
- **Dependencies:** confirm no route/import references
- **Risk:** Low
- **Acceptance:** `Process.vue` confirmed unreferenced (router uses `MainView`) and removed or clearly marked deprecated; build green.

**Milestone 5 exit:** accessible, robust, demo-hardened, clean.

---

## Dependency graph (execution order)

```
M1 (copy/brand/tokens) ──┬──▶ M2 (UX rails/disclosure) ──┬──▶ M4 (payoff pages)
                         └──▶ M3 (visual system) ────────┘        │
                                                                  ▼
                                                          M5 (polish)
```

M1 is a hard prerequisite for everything (terminology + tokens). M2 and M3 are parallelizable. M4 depends on both. M5 is last.

## Risk register

| Risk | Where | Mitigation |
|---|---|---|
| Restructuring `Step4Report.vue` (5292 lines) breaks section streaming | M4-T3 | Reorder presentation only; keep every existing binding; diff-verify all report sections still render |
| Reframing Page 3 log as narration drops events | M4-T2 | Bind narration/debate to the *same* event stream; keep raw log available under disclosure |
| Landing rewrite breaks intake/upload | M4-T1 | Reuse existing `Home.vue` upload logic + `store/pendingUpload.js` verbatim inside IntakePanel |
| Graph rendering accidentally touched | any graph page | `GraphPanel.vue` is read-only in this program; never edit it |
| Locale key drift (edit values, not keys) | M1, M2 | Only edit JSON *values*; run build after each locale change |

## Definition of done (program)

All three docs complete; M1–M5 acceptance criteria met; no user-facing MiroFish/engineering vocabulary; `GraphPanel.vue`, API, routes, backend, workflow unchanged; the 5-minute demo flow runs deterministically end-to-end.
