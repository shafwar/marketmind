#!/usr/bin/env bash
# Membuat proyek demo (graf statis, tanpa LLM/Zep) dan membuka UI proses di browser.
set -euo pipefail
API_BASE="${DEMO_VIZ_API:-http://127.0.0.1:5001}"
URL="${API_BASE%/}/api/graph/demo/visualization/bootstrap"
FRONT="${DEMO_VIZ_FRONT:-http://localhost:3000}"

echo "POST $URL"
RESP="$(curl -sS -X POST "$URL" \
  -H "Content-Type: application/json" \
  -H "Accept-Language: id" \
  -d "{\"name\":\"$(hostname -s 2>/dev/null || echo demo) viz\",\"simulation_requirement\":\"Pratinjau UI (skrip demo)\"}")"

echo "$RESP"
PROJECT_ID="$(python3 -c "import sys, json; d=json.load(sys.stdin); print((d.get('data') or {}).get('project_id') or '')" <<<"$RESP")"

if [[ -z "$PROJECT_ID" ]]; then
  echo "Tidak mendapat project_id. Jalankan backend (npm run backend / npm run dev) lalu coba lagi." >&2
  exit 1
fi

LINK="${FRONT%/}/process/${PROJECT_ID}"
echo "Buka: $LINK"
if command -v open >/dev/null 2>&1; then open "$LINK"; fi
