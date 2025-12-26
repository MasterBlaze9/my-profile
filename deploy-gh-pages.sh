#!/bin/bash
# Deploy Next.js static export to GitHub Pages (gh-pages branch)

set -e

echo "Building static site..."
npm run build

# Ensure we are not on gh-pages branch in the main worktree
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" = "gh-pages" ]; then
  echo "You are currently on the gh-pages branch. Switching to main."
  git switch main
fi

# Prune any stale worktrees
if git worktree list | grep -q gh-pages; then
  echo "Pruning existing gh-pages worktree."
  git worktree prune
fi

# Use a temporary directory for gh-pages deployment
TEMP_DIR=$(mktemp -d)
GH_WORKTREE=$(mktemp -d)

# Add or create gh-pages worktree
if git show-ref --verify --quiet refs/heads/gh-pages; then
  git worktree add "$GH_WORKTREE" gh-pages
else
  git worktree add -b gh-pages "$GH_WORKTREE" origin/gh-pages || git worktree add -b gh-pages "$GH_WORKTREE"
fi

# Copy only the contents of out/ to the worktree (not the worktree itself)
cp -R out/. "$GH_WORKTREE"/
cd "$GH_WORKTREE"
git add --all
git commit -m 'Deploy to gh-pages' || echo "No changes to commit."
git push origin gh-pages --force
cd -
git worktree remove "$GH_WORKTREE"
rm -rf "$TEMP_DIR" "$GH_WORKTREE"

echo "Deployment complete! Configure GitHub Pages to use the gh-pages branch."
