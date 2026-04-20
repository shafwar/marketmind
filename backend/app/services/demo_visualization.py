"""
Data statis untuk pratinjau UI graf tanpa LLM atau Zep.
"""
import json
import os
from copy import deepcopy
from typing import Any, Dict, Optional

DEMO_GRAPH_ID = "__demo_visualization_local__"

_bundle: Optional[Dict[str, Any]] = None


def _bundle_path() -> str:
    return os.path.join(os.path.dirname(__file__), "..", "data", "demo_visualization.json")


def load_demo_visualization_bundle() -> Dict[str, Any]:
    global _bundle
    if _bundle is None:
        with open(_bundle_path(), "r", encoding="utf-8") as f:
            _bundle = json.load(f)
        gid = _bundle.get("graph", {}).get("graph_id")
        if gid != DEMO_GRAPH_ID:
            raise ValueError(
                f"demo_visualization.json graph_id must be {DEMO_GRAPH_ID!r}, got {gid!r}"
            )
    return _bundle


def get_demo_graph_response() -> Dict[str, Any]:
    """Salinan payload sama seperti GraphBuilderService.get_graph_data."""
    return deepcopy(load_demo_visualization_bundle()["graph"])
