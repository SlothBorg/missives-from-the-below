#!/usr/bin/env bash

dir="./src/content/blog/drafts"
cd "$dir"

files=( *.md )
if [[ ! -e "${files[0]}" ]]; then
    echo "No .md files found in $PWD"
    exit 1
fi

echo "Publish:"
select f in "${files[@]}"; do
    [[ -n "$f" ]] && break
    echo "Invalid choice, try again."
done

# set draft to false
sed -i 's/^draft: true$/draft: false/' "$f"

# set updatedDate to today
today=$(date +%F)
sed -i "s/^updatedDate: .*$/updatedDate: $today/" "$f"

# Fix file paths
sed -i 's|](\.\./\.\./\.\./assets/blog/|](../../assets/blog/|g' "$f"

mv "$f" ../
echo "Published: $f -> $(cd .. && pwd)/$f"
