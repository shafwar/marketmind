# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## MarketMind — AI Financial Market Intelligence System

---

## 1. OVERVIEW

### 1.1 Product Name

**MarketMind**

### 1.2 Vision

Membangun sistem intelijen pasar keuangan Indonesia berbasis multi-agent AI yang mampu memberikan **rekomendasi definitif (bukan sekadar insight)** dengan confidence score dan risk assessment.

### 1.3 Mission

Menggantikan metode riset pasar tradisional (survei/manual analysis) dengan simulasi perilaku investor berbasis AI yang:

* Lebih cepat (real-time / minutes)
* Lebih murah (hingga 90%)
* Lebih akurat dalam menangkap **collective behavior**

---

## 2. PROBLEM STATEMENT

### 2.1 Core Problem

Tidak adanya sistem yang mampu mensimulasikan **reaksi kolektif investor ritel Indonesia** sebelum:

* Peluncuran produk keuangan
* Kebijakan regulator
* Perubahan pasar (suku bunga, crypto, dll)

### 2.2 Key Gaps

* Survei tradisional:

  * Mahal (Rp500jt+)
  * Lambat (3–6 bulan)
  * Tidak menangkap:

    * Herd behavior
    * Panic selling
    * FOMO dynamics

### 2.3 Target Users

1. Regulator (BI, OJK)
2. Fintech & Sekuritas
3. Startup keuangan
4. (Future) Investor ritel

---

## 3. PRODUCT GOALS

### 3.1 Primary Goals

* Mensimulasikan 1000–5000 investor sintetis
* Menghasilkan:

  * 1 rekomendasi final
  * Confidence score
  * Risk analysis
* Mengurangi biaya riset hingga 90%

### 3.2 Success Metrics (MVP)

* Simulation runtime < 60 detik
* Confidence output tersedia
* 1-click scenario → 1 output recommendation
* 3 use case berjalan:

  * Product validation
  * Policy simulation
  * Scam detection

---

## 4. PRODUCT SCOPE

### 4.1 Core Features

#### 1. Scenario Input (Natural Language)

User input:

* "Apakah produk ini akan berhasil?"
* "Apa dampak kebijakan X?"

#### 2. Intent Router

Auto-detect:

* Market simulation
* Product testing
* Fraud detection

#### 3. Persona Factory

Generate:

* 1000+ agents
* Berdasarkan:

  * Data BPS
  * Big Five Personality (OCEAN)
  * Financial literacy level

#### 4. Multi-Agent Simulation Engine (ADAPTASI MIROFISH)

Struktur:

* **Tier 1: Architect Agent**

  * LLM-based (deep reasoning)
  * Domain knowledge: OJK, investasi

* **Tier 2: Leader Agent**

  * Lightweight LLM
  * Influence decision

* **Tier 3: Crowd Agent**

  * Probabilistic model
  * Behavior simulation

#### 5. Social Graph Engine

* Model: Watts-Strogatz
* Fungsi:

  * Simulasi penyebaran informasi
  * Viral effect (scam / FOMO)

#### 6. Consensus Engine (KEY DIFFERENTIATOR)

* Multi-run simulation
* Output:

  * Confidence score
  * Confidence interval
  * Outlier filtering

#### 7. Final Recommendation Engine

Output:

* Decision: YES / NO / MODIFY
* Confidence (%)
* Risk flags
* Action steps

---

## 5. USER FLOW

### 5.1 Main Flow

1. User input scenario
2. Intent Router classify
3. Persona Factory generate agents
4. Simulation run (multi-round)
5. Consensus Engine validate
6. Output recommendation

---

## 6. SYSTEM ARCHITECTURE

### 6.1 High-Level Architecture

Frontend:

* Next.js

Backend:

* FastAPI

Core Engine:

* Multi-agent system (MiroFish adaptation)

Database:

* PostgreSQL

Streaming:

* SSE / WebSocket

---

### 6.2 Architecture Mapping (FROM MIROFISH → MARKETMIND)

| MiroFish Component  | MarketMind Adaptation       |
| ------------------- | --------------------------- |
| Agent swarm         | Investor personas           |
| Behavior simulation | Market behavior             |
| Interaction loop    | Trading decision simulation |
| Swarm intelligence  | Market consensus            |

---

## 7. DATA DESIGN

### 7.1 Data Sources

* BPS (demografi)
* OJK (regulasi)
* KSEI (investor data)
* Social media trend (optional)

### 7.2 Persona Attributes

* Age
* Income
* Location
* Risk tolerance
* Financial literacy
* Personality (OCEAN)

---

## 8. ALGORITHMIC DESIGN

### 8.1 Persona Generation

* Sampling distribution:

  * Income → LogNormal
  * Personality → Multivariate Normal

### 8.2 Simulation Loop

Per round:

1. Agent observe
2. Agent decide
3. Influence propagate
4. Update state

### 8.3 Consensus Engine

* Run N simulations
* Calculate:

  * Mean outcome
  * Confidence interval
  * Variance
* Remove outliers

---

## 9. UX / UI REQUIREMENTS

### 9.1 Dashboard

#### Sections:

* Scenario Input
* Simulation Status (real-time)
* Graph visualization
* Final result panel

### 9.2 Visualization

* Network graph (D3.js)
* Sentiment trend
* Adoption curve

---

## 10. NON-FUNCTIONAL REQUIREMENTS

### 10.1 Performance

* < 60s simulation
* Support 5000 agents

### 10.2 Scalability

* Horizontal scaling (agent parallelization)

### 10.3 Security

* No real personal data
* Encrypted API keys

---

## 11. MVP DEFINITION

### MVP Scope:

* 1 scenario input
* 1000 agents
* Basic simulation
* Simple consensus output

### NOT included:

* Real-time market data
* Advanced UI
* Multi-user system

---

## 12. DEVELOPMENT PLAN

### Phase 1 (Week 1–2)

* Setup project
* Clone & adapt MiroFish
* Build Persona Factory

### Phase 2 (Week 3–4)

* Simulation engine
* Agent interaction

### Phase 3 (Week 5–6)

* Consensus Engine
* Recommendation output

### Phase 4 (Week 7–8)

* UI Dashboard
* Visualization

---

## 13. RISKS

### Technical

* Simulation complexity
* LLM cost

### Product

* Trust in AI recommendation
* Validation accuracy

---

## 14. FUTURE ROADMAP

* Real-time data integration
* API untuk regulator
* Mobile dashboard
* AI explainability module

---

## 15. CORE DIFFERENTIATION

MarketMind bukan:

* Dashboard analytics
* Survey tool

MarketMind adalah:

> **Decision Engine berbasis simulasi AI dengan output tunggal dan tervalidasi**

---

## 16. NOTES FOR CURSOR IMPLEMENTATION

* Fokus awal: backend simulation (bukan UI dulu)
* Treat MiroFish sebagai:

  * Engine base
  * Bukan final architecture
* Modularisasi:

  * agent/
  * simulation/
  * consensus/
  * api/

---

END OF DOCUMENT
