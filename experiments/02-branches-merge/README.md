# Experiment 2 — Feature branches and merging

## Aim
Develop features in separate branches and merge them into `main`.

## Commands
```bash
git init
echo "# Branch Demo" > README.md
git add README.md
git commit -m "Initial commit"

git switch -c feature/header
echo "<header><h1>My Website</h1></header>" > header.html
git add header.html
git commit -m "Add header feature"

git switch main
git switch -c feature/footer
echo "<footer>Copyright 2026</footer>" > footer.html
git add footer.html
git commit -m "Add footer feature"

git switch main
git merge feature/header
git merge feature/footer
git branch
git log --oneline --graph --all
```

## Merge conflict practice
To practise resolving a conflict, edit the same line of a file in two different branches, commit both versions, and merge one branch into the other. Open the conflicted file, choose the correct content, remove `<<<<<<<`, `=======`, and `>>>>>>>`, then:
```bash
git add .
git commit -m "Resolve merge conflict"
```

## Expected result
Feature branches are created and merged into `main`; Git history shows the commits.
