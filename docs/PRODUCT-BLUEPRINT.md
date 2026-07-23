# MarketMind — Product Blueprint

**AI-Powered Financial Policy Decision Intelligence Platform**
Single source of truth for the frontend redesign. No backend, API, workflow, simulation engine, or graph visualization changes. This document defines *experience, narrative, copy, and brand* only.

> Scope lock: The MiroFish backend, endpoints, pipeline, state machine, and the D3 graph rendering **stay exactly as they are**. Everything the user reads, feels, and navigates around them is redesigned here.

---

## 0. How to read this document

The product today is a 5-step engineering wizard cloned from MiroFish. This blueprint reframes the same six screens into an **executive decision journey** without touching a single API contract.

| Current screen (keep the plumbing) | Becomes | Route (unchanged) |
|---|---|---|
| `Home.vue` (upload) | **Page 0 — Landing / Scenario Intake** | `/` |
| `Step1GraphBuild` | **Page 1 — Market Context Intelligence** | `/process/:id` |
| `Step2EnvSetup` | **Page 2 — Market Preparation** | `/process/:id` |
| `Step3Simulation` | **Page 3 — Market Simulation** | `/simulation/:id/start` |
| `Step4Report` | **Page 4 — Decision Intelligence** | `/report/:id` |
| `Step5Interaction` | **Page 5 — Decision Dossier** | `/interaction/:id` |

The redesign is a **reskin + reframe + re-copy**, not a rebuild. Data shapes are untouched; only their *presentation and meaning* change.

---

## 1. Product Narrative

**One sentence:** MarketMind lets a regulator see how the market will most likely react to a policy — *before* the policy is real.

**The story we tell:**
> Every financial policy is eventually tested by the market. Today that test happens *after* release, in public, with real money and real people. By then it is too late to change anything. MarketMind moves that test *before* release. It builds a synthetic-but-calibrated model of Indonesia's retail investors, releases your draft policy into that model, and shows you — as evidence, not opinion — where adoption spreads, where panic ignites, and what a defensible decision looks like. You walk into the boardroom already knowing what tomorrow's market will say.

**The product is the recommendation.** The graph, the population, the simulation, the consensus statistics — these are *evidence*. The deliverable is a decision a director can sign under.

**Positioning line (hero):**
> **Uji kebijakan sebelum pasar mengujinya.**
> *Test your policy before the market does.*

---

## 2. Product Philosophy

Five principles that govern every screen. When a design decision is ambiguous, these break the tie.

1. **Recommendation is the product; everything else is evidence.** No screen may end without pointing at what it contributes to the final decision.
2. **Never show a process without its purpose.** Every screen answers four questions, always in this order:
   1. *What is happening?*
   2. *Why does it matter?*
   3. *What is the AI doing right now?*
   4. *What will I have when this finishes?*
3. **Honesty is a feature.** We say "directional, calibrated estimate," never "accurate prediction." A visible "where this is reliable / where a human decides" treatment is a trust-builder, not a weakness. This is a competitive moat with sophisticated evaluators.
4. **Calm authority over spectacle.** The audience runs a central bank. The product should feel like a precision instrument, not a crypto dashboard. Drama is earned only at the one moment it means something (panic spreading through the network).
5. **Speak the user's language, not the engine's.** A director reads "Investor Network," never "Watts-Strogatz graph." Engineering vocabulary is bugs in the copy layer.

---

## 3. User Journey (end to end)

```
        ENTER                    UNDERSTAND                 DECIDE
   ┌──────────────┐        ┌───────────────────┐      ┌──────────────────┐
   │  Page 0      │        │  Page 1  Context  │      │  Page 4  Decision│
   │  Landing /   │──────▶ │  Page 2  Prepare  │────▶ │        Intel     │────┐
   │  Intake      │        │  Page 3  Simulate │      │  Page 5  Dossier │    │
   └──────────────┘        └───────────────────┘      └──────────────────┘    │
        curiosity              understanding                 confidence        │
                                                                  ▼            │
                                                            export / present ──┘
```

**Narrative spine:** *"Here is your policy → here is the world it enters → here is how that world reacts → here is what you should do → here is the document you take to the board."* Each page is a sentence in that paragraph; none stands alone.

---

## 4. Emotional Journey

Every screen is engineered to move the user one step along this arc. If a screen does not advance the emotion, its design is wrong.

| Stage | Page | Target emotion | The line the user thinks | Design lever that produces it |
|---|---|---|---|---|
| Beginning | 0 Landing | **Curiosity** | "This could answer a question I actually have." | Concrete problem hook + one crisp promise, minimal chrome |
| Orientation | 1 Context | **Understanding** | "It actually understands my policy and my market." | Named entities from *their* document; plain-language map |
| Grounding | 2 Preparation | **Confidence** | "This isn't random — it's built on real data." | KSEI/OJK provenance badges, named human archetypes |
| Tension | 3 Simulation | **Insight** | "I'm watching something true emerge." | Live spread on the graph; "no one told them to panic" |
| Resolution | 4 Decision Intel | **Decision** | "I know what to do, and why." | One verdict, confidence, drivers, risks, actions |
| Closure | 5 Dossier | **Trust** | "I can defend this in the boardroom." | Board-ready document, honest limits, export |

**Signature emotional beat:** the transition from Page 3 to Page 4 — chaos of the live market resolving into a single calm verdict. That contrast *is* the demo's climax.

---

## 5. Information Architecture

Three layers, consistent on every page:

```
┌────────────────────────────────────────────────────────────────┐
│  CONTEXT BAR   brand · scenario name · journey progress (6)      │  ← always visible
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  STAGE          the primary content of this step                 │  ← the "what"
│                 (graph / population / simulation / verdict)       │
│                                                                  │
├────────────────────────────────────────────────────────────────┤
│  MEANING RAIL   why this matters · what the AI is doing ·        │  ← the "why"
│                 what you'll get next                              │
├────────────────────────────────────────────────────────────────┤
│  ADVANCE BAR    primary CTA (forward)   ·   secondary (back/skip) │  ← the "next"
└────────────────────────────────────────────────────────────────┘
```

- **Context bar** answers *"where am I in the decision?"* — a 6-step progress rail (Intake → Context → Preparation → Simulation → Decision → Dossier), never "Step 1/5 GraphBuild."
- **Stage** is the evidence for this step.
- **Meaning rail** is the non-negotiable narration that answers the four questions. This is the single biggest fix versus MiroFish, which shows process with zero purpose.
- **Advance bar** always has exactly one primary CTA (see `primary-action`).

**Progressive disclosure rule:** technical depth (raw logs, parameters, entity tables) is never removed — it is *collapsed* behind a neutral "Lihat detail teknis" affordance. Executives see the story; analysts can open the machine.

---

## 6. Navigation Structure

- **Linear spine, not free navigation.** A decision is a sequence; the product enforces it. The progress rail shows all six stages but only completed + current are active. No top nav menu, no sidebar of features — that would signal "tool," not "instrument."
- **Backward is always allowed and safe** (`back-behavior`, `escape-routes`). State is preserved on return (the workflow already persists per project).
- **One primary CTA per screen**, forward-moving, labeled as an outcome ("Bangun Konteks Pasar", "Jalankan Simulasi", "Lihat Rekomendasi").
- **Deep-linkable** — every stage already has a URL; keep it so a dossier link can be shared (`deep-linking`).
- **Persistent exits:** brand mark returns home (with confirm if work in progress); a quiet "Riwayat Analisis" (History) affordance for prior runs.
- **No modals for primary flow** (`modal-vs-navigation`). Modals only for a single archetype's detail or a confirm dialog.

---

## 7. Story Flow (screen-to-screen continuity)

Each page ends by *promising* the next, and each page opens by *paying off* that promise. The user must feel MarketMind is thinking *with* them.

| From → To | Closing promise (end of page) | Opening payoff (start of next) |
|---|---|---|
| 0 → 1 | "We read your policy. Now let's map the market it enters." | "Here is the financial ecosystem your policy touches." |
| 1 → 2 | "This is the terrain. Now we populate it with realistic investors." | "1,000 synthetic Indonesians, calibrated to KSEI, are ready." |
| 2 → 3 | "The market is set. Let's release your policy into it." | "Watch how opinion and panic move, minute by minute." |
| 3 → 4 | "The market has spoken 100 times. Here is the consensus." | "Your decision, with the evidence behind it." |
| 4 → 5 | "Take this into the room." | "Your board-ready dossier." |

---

## 8. Page-by-Page Redesign Specification

Each page follows the same spec template. Copy is Bahasa Indonesia (primary), English in parentheses for this document only.

---

### PAGE 0 — Landing / Scenario Intake

*Replaces `Home.vue`. Today it is a bare upload box with the tagline "Concise & Universal Swarm Intelligence Engine" — pure engine-speak. It must first sell the idea, then ask for a document.*

| Field | Spec |
|---|---|
| **Page purpose** | Convert a curious visitor into someone who submits a policy scenario, after understanding what they'll get. |
| **Business goal** | Establish category ("Decision Intelligence"), credibility (institutions, data sources), and start a run. |
| **User goal** | "Understand what this is and whether it can answer my question — then start." |
| **Expected emotion** | Curiosity → intent. |
| **Core message** | "Test your policy before the market does." |
| **Primary CTA** | **Ekstrak Skenario dari Dokumen** (Extract Scenario from Document) — the dropzone's action. |
| **Secondary CTA** | **Atau pilih skenario contoh** (Or choose a sample scenario) — 2 presets: *Peluncuran Produk Keuangan Baru*, *Kejutan Suku Bunga*. Plus a quiet "Preview tanpa AI" (the existing demo-viz path). |

**Information hierarchy (top → bottom):**
1. **Hero** — headline "Uji kebijakan sebelum pasar mengujinya", one-line subhead naming the audience ("Intelijen keputusan untuk regulator & institusi keuangan"), primary CTA.
2. **The problem** — 3 lines: policy is tested *after* release, surveys cost Rp500jt+ and take months, no one models collective retail behavior.
3. **What MarketMind does** — "How it works" in 4 plain steps (Context → Population → Simulation → Recommendation), each a sentence, each mapped to an icon.
4. **What you get** — a mock of the output: a verdict card (PROCEED / CAUTION / DO NOT) with confidence, 3 risks, 3 actions. Show the destination up front.
5. **Why MarketMind** — 3 pillars: *Calibrated to real data* (KSEI Apr 2026 · OJK SNLIK), *Emergent, not scripted* (FOMO & panic arise on their own), *Honest by design* (directional, with stated limits).
6. **Supported scenarios** — product launch, policy/rate change, scam-spread stress test.
7. **Built for** — logos/wordmarks: Bank Indonesia, OJK, KSEI, Kemenkeu, IDX (as "designed for," not "endorsed by" — honesty).
8. **The intake** — dropzone (PDF/MD/TXT) + paste area + optional "Jelaskan kebutuhan simulasi Anda" field. *This is where the current Home box lives — now it is the finale, not the whole page.*

**Visual hierarchy:** near-black canvas, one orange accent reserved for the primary CTA and the live verdict mock. Generous whitespace up top (curiosity needs air), density only in "how it works."

**Components:** Hero, ProblemStrip, HowItWorks (4 steps), OutputPreview (verdict card mock), PillarCards ×3, ScenarioChips, InstitutionRow, IntakePanel (dropzone + textarea + preset cards).

**Copywriting (samples):**
- H1: `Uji kebijakan sebelum pasar mengujinya.`
- Sub: `MarketMind mensimulasikan reaksi kolektif investor ritel Indonesia terhadap kebijakan Anda — sebelum kebijakan itu dirilis.`
- Problem: `Hari ini, setiap kebijakan diuji oleh pasar setelah dirilis — saat sudah terlambat diubah.`
- Pillar (honesty): `Estimasi directional yang terkalibrasi — bukan ramalan. Kami tunjukkan di mana sistem andal dan di mana keputusan tetap milik Anda.`

**Business explanation:** This page reframes the product from "simulation engine" to "decision instrument for institutions" in the first five seconds — the difference between a judge understanding the business and a judge seeing a tech demo.
**Why this page exists:** to make the upload *meaningful* before it happens.
**What users learn:** what problem this solves, for whom, with what evidence, producing what output.
**What users remember:** "It tests policy before the market does."

---

### PAGE 1 — Market Context Intelligence

*Replaces `Step1GraphBuild`. The D3 graph stays byte-for-byte. Everything around it is rewritten. Today's copy: "GraphRAG Build", "Entity Nodes", "Relation Edges", "Schema Types", "Ontology Generation" — delete all of it from the user's view.*

| Field | Spec |
|---|---|
| **Page purpose** | Show that MarketMind *understood* the policy and mapped the real financial ecosystem it touches. |
| **Business goal** | Prove comprehension and grounding — the AI read *your* document, not a template. |
| **User goal** | "Confirm it understood my policy and see the landscape it's reasoning about." |
| **Expected emotion** | Understanding — "it gets my domain." |
| **Core message** | "This is the financial ecosystem your policy enters." |
| **Primary CTA** | **Siapkan Populasi Pasar** (Prepare the Market Population). |
| **Secondary CTA** | **Kembali ke Skenario** · collapsible **Lihat detail teknis**. |

**The graph is reframed as "Peta Ekosistem Pasar" (Market Ecosystem Map) — evidence of comprehension.** The nodes are "aktor & konsep pasar," edges are "hubungan," not "relation edges."

**Surrounding redesign:**
- **Title / subtitle:** `Konteks Pasar` / `MarketMind memetakan aktor, produk, dan hubungan yang tersentuh oleh kebijakan Anda.`
- **Narrative (meaning rail):**
  - *What's happening:* "Kami membaca dokumen Anda dan menyusun peta ekosistem keuangan yang relevan."
  - *Why it matters:* "Simulasi hanya sebaik pemahamannya. Peta ini adalah fondasi bukti."
  - *What the AI is doing:* "Mengekstraksi entitas kunci dan menghubungkannya menjadi konteks pasar." (replaces "GraphRAG construction via Zep")
  - *What you'll get:* "Setelah peta siap, kami mengisi pasar dengan populasi investor nyata."
- **Metrics (relabeled):** `Entity Nodes → Aktor & Konsep Pasar`; `Relation Edges → Hubungan Teridentifikasi`; `Schema Types → Kategori Konteks`. Tabular figures (`number-tabular`).
- **Legend:** business categories (Produk, Regulator, Segmen Investor, Sentimen), not schema type codes.
- **Insight strip (new):** 2–3 auto-surfaced sentences — "Kebijakan ini terhubung ke 3 segmen investor dan 2 produk existing." Turns a static graph into a *finding*.
- **Side panel:** node detail already exists — rewrite labels from "Node Details / Relationship" to "Detail Aktor / Hubungan," with a plain-language summary line on top of the raw fields.
- **Status messages:** replace "Building graph in Zep / Waiting for ontology generation" with "Menyusun peta konteks pasar…" and a purposeful skeleton (`progressive-loading`).

**Layout:** graph dominant (left/center, unchanged), meaning rail right, insight strip below the graph, advance bar fixed bottom.

**Business explanation:** The graph was MiroFish's *feature*; here it is MarketMind's *evidence of understanding*. Same pixels, opposite message.
**What users learn:** the AI genuinely parsed their policy and the market around it.
**What users remember:** "It understood my domain before it simulated anything."

---

### PAGE 2 — Market Preparation

*Replaces `Step2EnvSetup`. Today: "Simulation Instance Initialization", "Generate Agent Personas", "MBTI", "Dual-Platform Config", "Echo Chamber Strength", "Viral Threshold" — engine internals exposed raw. This page must build **trust in the simulation** by showing it is grounded in real people and real data.*

| Field | Spec |
|---|---|
| **Page purpose** | Make the user trust that the coming simulation rests on a realistic, calibrated population — not random agents. |
| **Business goal** | Convert "AI made up some agents" into "this mirrors Indonesia's actual investors." |
| **User goal** | "See who is in this market and why I should believe them." |
| **Expected emotion** | Confidence. |
| **Core message** | "A realistic, calibrated population — ready to react to your policy." |
| **Primary CTA** | **Jalankan Simulasi Pasar** (Run the Market Simulation). |
| **Secondary CTA** | **Sesuaikan Asumsi** (Adjust Assumptions) · **Kembali ke Konteks**. |

**Reframed sub-sections (each = a trust argument):**
1. **Populasi Sintetis (Synthetic Population)** — "1.000 investor sintetis, komposisi usia/penghasilan/wilayah dikalibrasi ke **KSEI April 2026**." Show segment weights as bars **with provenance badges**: `KSEI` / `OJK SNLIK` / `default`. This is the single most credibility-defining element on the page — surface it loudly.
2. **Inisialisasi Perilaku (Behavior Initialization)** — how each investor gets literacy, risk tolerance, and personality. Frame OCEAN as "profil kepribadian berbasis literatur behavioral finance," and be honest: personality is an *educated approximation*, flagged, because no public Big-Five-per-segment dataset exists.
3. **Konteks Pasar & Asumsi Kebijakan (Market Context & Policy Assumptions)** — the extracted parameters as an **editable table with provenance** ("dari dokumen" vs "default"). Human-in-the-loop, visible.
4. **Saluran Komunikasi (Communication Channels)** — reframe the network/"dual-platform" as "bagaimana informasi menyebar antar investor" — plain language, no "recommendation algorithm weights" unless expanded.
5. **The Cast — Tokoh Pasar (Market Archetypes)** — a grid of 8–15 named archetype cards (initials avatar, name, role, segment, stance badge pro/kontra/netral, one-line bio). *This is where the abstract population becomes human.* Make it feel alive; this is the emotional turn of the page.

**Meaning rail:**
- *Why it matters:* "Prediksi hanya dapat dipercaya jika populasinya realistis. Di sinilah kami buktikan."
- *What the AI is doing:* "Menghasilkan investor sintetis dan menetapkan perilaku dari data resmi." (replaces "pulling world parameter templates")
- *What you'll get:* "Pasar yang siap bereaksi — lalu kita lepaskan kebijakan Anda ke dalamnya."

**Progressive disclosure:** sliders, round counts, echo-chamber/viral params, LLM config reasoning → all collapsed under "Parameter lanjutan (opsional)." Default view is the trust story, not the control panel.

**Business explanation:** Trust is earned here or nowhere. Provenance badges + named humans are what separate "believable" from "made up."
**What users learn:** the population is calibrated to KSEI/OJK, and they can edit assumptions.
**What users remember:** "These are real Indonesian investors, tied to real data — and there's Budi, the warung owner."

---

### PAGE 3 — Market Simulation

*Replaces `Step3Simulation`. Today: a status log of "agent actions," "rounds," "dual-platform parallel sim." Transform into a **cinematic, living "AI thinking" experience** — the wow moment of the demo. The graph rendering stays; the framing around it becomes a story.*

| Field | Spec |
|---|---|
| **Page purpose** | Let the user *watch* collective behavior emerge — feel that something true is happening. |
| **Business goal** | Deliver the memorable "wow" that judges screenshot and remember. |
| **User goal** | "See how the market reacts, live." |
| **Expected emotion** | Insight, tension. |
| **Core message** | "No one told them to panic. It emerges on its own." |
| **Primary CTA** | **Lihat Rekomendasi** (See the Recommendation) — appears on completion. |
| **Secondary CTA** | **Jeda / Putar Ulang** (Pause / Replay) · speed control. |

**The experience (built around the unchanged graph):**
- **Stage:** the investor network, nodes changing state over the timeline (hold=grey, adopt=green, reject=yellow, panic=red; ~10 larger influencer nodes). Playback scrubber, speed control. *This is the hero visualization; it does not change — the storytelling around it does.*
- **Live narration panel (replaces the raw log):** a running, human-readable commentary tied to simulation events —
  - *What investors are doing:* "Segmen muda urban mulai mengadopsi lebih dulu."
  - *What is changing:* live stat badges — Adopsi 12% → 23%, Panik 4%.
  - *What the AI is observing:* "Gelombang adopsi menyebar melalui jalur influencer."
  - *Emerging patterns:* "Herding terdeteksi di segmen menengah."
- **Debat Publik (Public Debate) feed:** named archetypes posting opinions timed to events, with stance badges and replies — *the characters from Page 2 come alive here.* This panel is the star; it makes the numbers feel human.
- **Signature line, on screen at the climax:** `Tidak ada satu baris kode pun yang menyuruh mereka panik. FOMO dan panic selling muncul sendiri.`

**Cinematic direction:** dark stage, the orange accent used *only* for the spreading panic/adoption front so the eye follows the wave. Motion respects `prefers-reduced-motion`; playback is deterministic (seeded) so it can be re-recorded identically for the demo video. Do **not** replace the network with abstract 3D — the whole story is "watch it spread through a social graph."

**Meaning rail (condensed, because the stage carries the load):**
- *Why it matters:* "Ini bukan animasi dekoratif — setiap perubahan warna adalah keputusan seorang investor sintetis."
- *What you'll get:* "Setelah pasar bereaksi 100 kali, kami rangkum menjadi satu rekomendasi."

**Business explanation:** Emergence is the intellectual proof that this isn't scripted AI theater. Showing it — and *saying* it — is the differentiator.
**What users learn:** collective phenomena (FOMO, panic) arise from individual behavior, unscripted.
**What users remember:** the panic wave spreading, and "no one told them to panic."

---

### PAGE 4 — Decision Intelligence

*Replaces `Step4Report`. Today's keys already lean this way (`outcomeTitle: Decision summary`, `primaryRecommendation`, `confidenceScore`, `riskAnalysis`) — good foundation. This becomes the **heart of the product**: not results, a decision.*

| Field | Spec |
|---|---|
| **Page purpose** | Deliver a single, defensible, executive-grade recommendation with its evidence. |
| **Business goal** | Be the product. This screen justifies the whole platform. |
| **User goal** | "Tell me what to do, how sure you are, and why." |
| **Expected emotion** | Decision, clarity, confidence. |
| **Core message** | The verdict — PROCEED / PROCEED WITH CAUTION / DO NOT PROCEED. |
| **Primary CTA** | **Susun Dossier Keputusan** (Compile Decision Dossier). |
| **Secondary CTA** | **Tanya MarketMind** (Ask MarketMind — the interaction tools) · **Ekspor**. |

**Structure (executive order — verdict first, evidence beneath):**
1. **Verdict header** — the decision word, large; confidence % with a calibrated framing; eyebrow `Estimasi Directional Terkalibrasi`. Color = semantic (green/amber/red).
2. **Executive Summary** — 3–4 sentences a director could read aloud.
3. **Key Findings** — 3–5 bullets, each a claim + its number.
4. **Top Drivers** — what most moved the outcome (segment adoption, influencer effect, literacy).
5. **Affected Stakeholders** — which investor segments react how (ties back to KSEI segments).
6. **Market Dynamics** — the adoption/panic curve, herding notes.
7. **Confidence & Consensus** — mean, 95% CI, agreement %, threshold tick, outlier count, run histogram. Framed as "seberapa kompak 100 simulasi sepakat" — Monte Carlo in plain words.
8. **Evidence** — links back to the graph, the population, the debate. "Bukti" is a first-class section.
9. **Risk Analysis** — top risks with severity.
10. **Alternative Outcomes** — what the CAUTION/negative branches looked like.
11. **Decision Support** — 3–5 concrete action steps.
12. **Honest limits** — a tasteful "Di mana estimasi ini andal, dan di mana keputusan tetap milik manusia."

**Information hierarchy:** verdict → summary → drivers/risks → deep evidence (collapsible). An executive can stop after screen one; an analyst can scroll into the statistics.

**Visual hierarchy:** the verdict is the single loudest element on the page. Confidence and CI use tabular figures. The consensus panel is the "instrument" flourish — precise, quiet, Bloomberg-like.

**Components:** VerdictHeader, ExecSummary, FindingsList, DriversChart, StakeholderBreakdown, DynamicsChart, ConsensusPanel (CI bar + histogram + agreement gauge), EvidenceLinks, RiskList, AlternativesStrip, ActionSteps, LimitsCard.

**Copywriting (samples):**
- Eyebrow: `ESTIMASI DIRECTIONAL TERKALIBRASI`
- Verdict: `LANJUTKAN DENGAN HATI-HATI` · `Keyakinan 71%`
- Limits: `Andal untuk: uji konsep, reaksi segmen, arah kebijakan. Butuh keputusan manusia untuk: taruhan besar & keputusan regulasi final.`

**Business explanation:** This is where "decision intelligence" is literally delivered. Verdict-first structure is what makes it executive rather than analytical.
**What users learn:** what to do, how confident, driven by what, at what risk.
**What users remember:** the single verdict word and its confidence.

---

### PAGE 5 — Decision Dossier

*Replaces `Step5Interaction`. Today: "InsightForge / PanoramaSearch / QuickSearch / InterviewSubAgent" chat tools — pure engineering names. Reframe into a **board-ready report + a Q&A-with-your-analysis experience**. Imagine this printed and passed around a board table.*

| Field | Spec |
|---|---|
| **Page purpose** | Turn the analysis into a document a director carries into a meeting — and lets them interrogate it. |
| **Business goal** | Make the output portable, shareable, presentable — the artifact that outlives the session. |
| **User goal** | "Give me something I can present and defend, and let me ask follow-ups." |
| **Expected emotion** | Trust, ownership. |
| **Core message** | "Your decision, documented and defensible." |
| **Primary CTA** | **Ekspor Dossier** (Export — PDF). |
| **Secondary CTA** | **Bagikan Tautan** (Share Link) · **Mode Presentasi** (Presentation Mode). |

**Two modes on one page:**

**A. The Dossier (document view)** — a clean, printable, light-on-white report (the one place we leave the dark theme, because it will be printed; see Branding §12). Sections, in board order:
1. Executive Summary
2. Policy Recommendation (the verdict) + **Why** (drivers)
3. Evidence (graph snapshot, population provenance, debate highlights)
4. Confidence & Consensus (Monte Carlo, CI, agreement)
5. Affected Stakeholders
6. Expected Timeline (how the reaction unfolds over the simulated period)
7. Scenario Comparison (this vs alternative parameters/presets, side by side)
8. Suggested Action
9. Honest limitations & methodology note

**B. Ask MarketMind (Q&A)** — the existing interaction/interview tools, renamed to business language:
- `InsightForge → Telusuri Alasan` (Explore the Reasoning)
- `PanoramaSearch → Lacak Penyebaran` (Trace the Spread)
- `QuickSearch → Cari Fakta` (Find a Fact)
- `InterviewSubAgent → Wawancarai Investor` (Interview an Investor) — talk to a synthetic investor to understand *why* they reacted.
- `Chat with Report Agent → Tanya Analis` (Ask the Analyst)

**Export / Share / Present experience:**
- **Export:** one-click PDF of the dossier, branded, with methodology footnote. (`export-option`)
- **Share:** deep link to the read-only dossier (URL already exists).
- **Presentation mode:** full-screen, one section per slide, for screen-sharing in a meeting — turns the dossier into a deck without leaving the app.

**Business explanation:** The dossier is the deliverable that justifies a purchase — it is what a regulator actually walks away with. The Q&A makes the analysis interrogable, which is how trust survives scrutiny.
**What users learn:** they own a defensible artifact and can drill into any claim.
**What users remember:** "I can put this in front of my board tomorrow."

---

## 9. UX Recommendations

- **The four-question rail is mandatory on pages 1–4.** No process without purpose.
- **Progress rail** with named stages; current highlighted (`nav-state-active`), completed clickable, future disabled.
- **Progressive disclosure everywhere** technical depth exists (`progressive-disclosure`) — story by default, machine on demand.
- **Skeletons, not spinners**, for any wait >300ms (`progressive-loading`); every wait is narrated ("Menyusun peta konteks…"), never a bare "Loading...".
- **One primary CTA per screen** (`primary-action`), always an outcome verb.
- **Preserve state on back-navigation** (`state-preservation`).
- **Determinism preserved** for Page 3 playback (seeded) so the demo is re-recordable.
- **Accessibility:** 4.5:1 contrast on the dark theme (verify secondary text ≥3:1), visible focus rings, `prefers-reduced-motion` honored on the panic animation, charts get text summaries and never rely on color alone (`color-not-only`, `screen-reader-summary`), verdict never encoded by color alone — always word + color.
- **Tabular figures** for every metric, %, CI, confidence (`number-tabular`) to stop layout jitter.
- **Empty/error states** are narrated with a recovery path (`error-recovery`), not raw API strings — the current `api.*` error keys must never reach a director's screen.

---

## 10. UI Recommendations

- **Base:** refined dark "control room" (already `#09090b` canvas, `#101014` surfaces) — Bloomberg/Palantir gravity. Keep it; polish elevation into a consistent scale (`elevation-consistent`).
- **One signal color:** orange `#ff6b35` reserved for the single primary action and the live spread front. Scarcity = authority. Do not spray it.
- **Cards:** thin-bordered (`--mm-border`), low-contrast dividers, generous internal padding; 8px spacing rhythm.
- **Verdict semantics:** green `#4ade80` (PROCEED), amber `#fbbf24` (CAUTION), red `#f87171` (DO NOT) — already in tokens; map explicitly to verdict language.
- **Charts:** quiet gridlines (gray, low contrast), tabular labels, legends near the chart, accessible palettes, entrance animation optional under reduced-motion (see §10 rules). CI bar + agreement gauge + run histogram are the "instrument" set.
- **Motion:** 150–300ms micro-interactions, ease-out enter / faster exit, spring on cards; the only large motion is the panic wave (earned). Never animate width/height — transform/opacity only.
- **The Dossier (Page 5) is the deliberate light-mode exception** — white, print-safe.

---

## 11. Copywriting Recommendations

- **Voice:** a senior analyst briefing a director — precise, calm, never hyped.
- **Every label is an outcome or a plain noun**, never an engine verb. "Bangun Konteks Pasar," not "Build Graph."
- **Numbers always carry meaning** — "Keyakinan 71%," never a bare "71%."
- **Honesty phrases are reusable assets:** "estimasi directional & terkalibrasi," "di mana sistem andal / di mana manusia memutuskan." Never "akurat," "pasti," "prediksi absolut."
- **Narrate every wait** in the user's terms.
- **Bahasa Indonesia primary**, realistic institutional register — no lorem, no translationese.

---

## 12. Branding Recommendations

**Brand personality:** A precision research instrument for people who make consequential decisions. Authoritative, calm, quietly futuristic. *Not* playful, *not* crypto, *not* generic-SaaS.

**Reference blend (never copy):** Palantir's gravity · Bloomberg Terminal's data authority · Linear's crispness · Stripe's clarity · Notion's calm. The synthesis is *"an intelligence terminal a central banker trusts."*

**Tone of voice:** confident, evidence-led, honest about limits. Short declarative sentences. The smartest person in the room who has nothing to prove.

**Communication style:** show the evidence, state the conclusion, name the uncertainty. Never oversell.

**Typography** (distinctive, non-generic — avoid Inter/Roboto/Space Grotesk):
- **UI / headings:** *Hanken Grotesk* — precise, warm, institutional.
- **Data / labels / eyebrows:** *IBM Plex Mono* — the "terminal" signal for IDs, %, SEED, CI. (The current theme already leans on mono for technical labels; formalize it.)
- **Dossier long-form (Page 5 print):** *Newsreader* — editorial serif; the report reads like a published document.

**Color philosophy:** near-black canvas, a single orange signal used with discipline, semantic green/amber/red for verdicts only. Color always means something; nothing is decorative.

**Illustration philosophy:** no stock illustration. The graph *is* the hero visual. Supporting visuals are data (curves, gauges, provenance badges) — evidence, not decoration.

**Icon philosophy:** one line-icon set (e.g. Lucide), consistent stroke, 24px grid, never emoji (`no-emoji-icons`). Icons label, never decorate.

**Feelings to engineer:**
- *Executive:* whitespace, restraint, verdict-first hierarchy.
- *Hackathon wow:* the panic wave + the light→dark→verdict emotional arc.
- *Innovation:* live emergence, "no one told them to panic."
- *Premium SaaS:* consistency, tabular precision, polished empty/loading states.

**Assets to replace:** the MiroFish logo (`MiroFish_logo_*.jpeg`) and `meta.title: "MiroFish - Predict Everything"` / `home.tagline: "Concise & Universal Swarm Intelligence Engine"` — all still MiroFish. New wordmark: **MarketMind**, mono-inflected, orange dot/accent.

---

## 13. Product Terminology Guide

The single highest-leverage fix. Every left-column term currently appears in the UI (`locales/*.json`) and must be replaced. Engineering vocabulary is a bug at the trust boundary.

| Forbidden (MiroFish / engine) | Use instead (business) |
|---|---|
| GraphRAG / Graph Build / Build Graph | Peta Konteks Pasar (Market Context Map) |
| Ontology / Ontology Generation | Kategori Konteks (Context Categories) |
| Entity / Entity Nodes | Aktor & Konsep Pasar (Market Actors & Concepts) |
| Edge / Relation Edges / Relationship | Hubungan (Relationships) |
| Schema Types | Kategori Konteks |
| Zep / knowledge graph / GraphRAG memory | *(never shown — internal)* |
| Reality Seed | Skenario / Dokumen Kebijakan (Scenario / Policy Document) |
| Env Setup / Simulation Instance Init | Persiapan Pasar (Market Preparation) |
| Agent / Agent Personas / MBTI | Investor Sintetis / Tokoh Pasar (Synthetic Investors / Market Archetypes) |
| Dual-Platform / Platform 1 / Platform 2 | Saluran Komunikasi (Communication Channels) |
| Echo Chamber Strength / Viral Threshold / Recommendation Algorithm | *(collapsed under "Parameter lanjutan")* |
| Run Simulation / rounds / dual-world parallel sim | Simulasi Pasar (Market Simulation) |
| ReportAgent / Report Generation | Analis / Intelijen Keputusan (Analyst / Decision Intelligence) |
| InsightForge | Telusuri Alasan (Explore the Reasoning) |
| PanoramaSearch | Lacak Penyebaran (Trace the Spread) |
| QuickSearch | Cari Fakta (Find a Fact) |
| InterviewSubAgent | Wawancarai Investor (Interview an Investor) |
| Deep Interaction | Dossier Keputusan / Tanya MarketMind |
| Swarm Intelligence Engine / Predict Everything | Intelijen Keputusan Kebijakan Keuangan |
| Node / POST / endpoint / pipeline / execution | *(never user-facing)* |

**New canonical vocabulary:** Konteks Pasar · Ekosistem Keuangan · Populasi Sintetis · Tokoh Pasar · Sinyal Pasar · Bukti · Dinamika Pasar · Dampak Stakeholder · Konsensus · Keyakinan Keputusan · Rekomendasi Kebijakan · Dossier Keputusan.

---

## 14. Product Voice & Tone Guide

| Situation | Do | Don't |
|---|---|---|
| Headline | "Uji kebijakan sebelum pasar mengujinya." | "Universal Swarm Intelligence Engine." |
| Loading | "Menyusun peta konteks pasar…" | "Building graph in Zep…" |
| Metric | "Keyakinan 71%" | "confidence: 0.71" |
| Verdict | "Lanjutkan dengan hati-hati" + amber + reason | color alone |
| Limits | "Di mana sistem andal, dan di mana keputusan tetap milik Anda." | "99% accurate prediction" |
| Error | "Kami tidak dapat membaca dokumen ini. Coba format PDF/MD/TXT." | raw `api.noDocProcessed` |

**Register:** senior analyst → director. Confident, concise, honest. Uncertainty stated, never hidden.

---

## 15. Product Consistency Guideline

- **The four-question rail** appears on every process page, same position, same order.
- **The progress rail** (6 named stages) is identical across pages.
- **One primary CTA** per screen, orange, outcome-verb.
- **Mono for all data**, grotesk for UI, serif only in the printed dossier.
- **Verdict colors** never repurposed for anything but verdicts.
- **Orange never decorative** — action + live-spread only.
- **Every number carries a unit/meaning.**
- **Honesty language** reused verbatim, not paraphrased, so it reads as principle.
- **No engine word ever reaches the user** — enforce via the terminology guide as a copy lint.

---

## 16. Hackathon Demo Flow (5–10 min, judge-optimized)

Assume a judge gives you 5 minutes and remembers one thing. Optimize for clarity → wow → trust.

| Time | Screen | What the judge sees | What they should feel |
|---|---|---|---|
| 0:00–0:30 | Page 0 | Problem hook + "test policy before the market does" | "I understand the business in 30s." |
| 0:30–1:00 | Page 0→1 | Upload a real policy → market context map appears | "It understood the actual document." |
| 1:00–1:40 | Page 2 | Population calibrated to KSEI + the named cast (Budi, Bu Lastri) | "This is grounded in real Indonesians." |
| 1:40–2:40 | Page 3 | **Live panic spreading through the network + debate feed** | *the wow* — "no one told them to panic." |
| 2:40–3:20 | Page 4 | Chaos resolves into ONE verdict + confidence + risks | "It gives me a decision, honestly." |
| 3:20–3:50 | Page 5 | Dossier + export | "I could take this to a board." |
| 3:50–4:00 | — | Honest-limits line | "They know their own limits — credible." |

**Rules:** use a golden/deterministic run so playback is identical every take; start the graph playback from round 0 (the spread is the point, not the settled end state); pre-render LLM content so nothing hangs live.

---

## 17. Executive Presentation Flow (the board-meeting version)

The same product, narrated for a director rather than a judge. Maps to Page 5 Presentation Mode:

1. **The question** — "Should we release this policy?"
2. **The recommendation** — verdict + confidence (lead with the answer).
3. **Why** — top 3 drivers.
4. **The evidence** — one graph snapshot, one debate quote, the consensus bar.
5. **The risks** — top 3, with severity.
6. **The alternatives** — what a safer parameterization looked like.
7. **The limits** — where human judgment still owns the call.
8. **The ask** — the suggested action.

Verdict-first, evidence-second, honesty-last — the structure that earns a signature.

---

## 18. Future Scalability Recommendation

*(Roadmap only — nothing here changes the current build.)*

- **Multi-scenario workspace:** save, compare, and version dossiers per policy (the History view is the seed).
- **Backtest & calibration surface:** when historical validation exists, add a "track record" panel — the strongest possible trust asset for regulators.
- **Segment deep-dives:** per-KSEI-segment reports, since error concentrates in subgroups.
- **Collaboration:** shared dossiers, comments, board-review mode.
- **Light institutional theme** as a first-class option (not just the print dossier) for procurement/accessibility contexts.
- **White-label** per institution (BI vs OJK vs IDX) once the core narrative is proven.
- **Live-data ingestion** (KSEI monthly, OJK SNLIK) to keep calibration current — framed to users as "kalibrasi diperbarui," never as a pipeline.

Everything above sits *on top of* the frozen backend and the unchanged graph. The blueprint's job is to make the existing engine *legible, trustworthy, and executive-grade* — nothing more, and nothing less.

---

*End of Product Blueprint. This document governs the frontend redesign. Implementation follows separately; no code is produced here.*
