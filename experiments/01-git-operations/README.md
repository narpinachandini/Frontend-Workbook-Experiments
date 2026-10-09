# Experiment 1 — Git repository and basic operations

## Aim
Create a Git repository and practise push, fetch, merge, pull, reset, revert, clone, and fork.

## Commands
```bash
# Configure Git once
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Create and commit a local repository
mkdir git-practice
cd git-practice
git init
echo "# Git Practice" > README.md
git add README.md
git commit -m "Initial commit"

# Connect to a repository you created on GitHub
git remote add origin https://github.com/YOUR-USERNAME/git-practice.git
git branch -M main
git push -u origin main

# Fetch remote changes without integrating them
git fetch origin

# Pull and integrate remote changes
git pull origin main

# Clone a repository
git clone https://github.com/OWNER/REPOSITORY.git

# Merge a branch into main
git switch -c feature
echo "Feature practice" > feature.txt
git add feature.txt
git commit -m "Add feature practice"
git switch main
git merge feature

# Undo a commit safely by creating a new reversing commit
git revert HEAD

# Reset local branch to an earlier commit (use carefully)
git log --oneline
git reset --soft HEAD~1
# --soft keeps changes staged; --mixed keeps changes unstaged.
# Avoid git reset --hard unless you intentionally want to discard local changes.
```

## Fork
Open the source repository on GitHub and click **Fork**. A fork creates a copy under your account. Clone your fork with `git clone`.

## Expected result
A local repository is created, commits are recorded, and the local repository can be connected to a remote GitHub repository.

## Important
Replace example URLs and names with your own. Do not publish passwords, tokens, API keys, or private information.
