#!/usr/bin/env bash
# korean-accuracy-audit.sh - the documented entry point (AGENTS.md references this path).
#
# The parsing lives in scripts/korean_accuracy_audit.py: extracting Korean segments needs real parsing,
# and the previous line-based shell version reported every Japanese and Chinese sibling on a shared
# line as Korean drift. This wrapper stays so the command people already have in their notes works.
#
#   bash scripts/korean-accuracy-audit.sh              # whole app/
#   bash scripts/korean-accuracy-audit.sh app/tourist   # scoped after an edit
set -uo pipefail
exec python3 "$(dirname "$0")/korean_accuracy_audit.py" "$@"
