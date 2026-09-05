#!/usr/bin/env bash
set -euo pipefail

POSTS_DIR="${POSTS_DIR:-src/content/blog}"

read -rp "File name (no extension): " filename
read -rp "Title: " title
read -rp "Description: " description

[ -n "$filename" ] || { echo "File name is required." >&2; exit 1; }

file="$POSTS_DIR/$filename.md"
[ -e "$file" ] && { echo "$file already exists." >&2; exit 1; }

mkdir -p "$POSTS_DIR"
today=$(date +%F)

cat > "$file" <<EOF
---
title: '${title//\'/\'\'}'
description: $description
pubDate: $today
updatedDate: $today
draft: true
tags:
- ''
---

EOF

echo "Created $file"
