# Frontend Development Frameworks — Lab Experiments 1–8

Based on the experiment list in the KLU 25CS2101 Front End Development Frameworks workbook.

## Contents
1. Git repository operations — `experiments/01-git-operations/README.md`
2. Branching and merging — `experiments/02-branches-merge/README.md`
3. Deploy static site with GitHub Pages — `experiments/03-github-pages/README.md`
4. E-commerce homepage using Flexbox, Grid, and animation — `experiments/04-ecommerce/`
5. Responsive student admission form — `experiments/05-admission-form/`
6. Student result management system — `experiments/06-result-management/`
7. Weather dashboard using Fetch API — `experiments/07-weather-dashboard/`
8. React login, dashboard, and profile modules — `experiments/08-react-login-dashboard/`

## Run the HTML/CSS/JS experiments
Open each experiment's `index.html` in a browser, or use VS Code Live Server.

## Run Experiment 8 (React)
Install Node.js, open a terminal in `experiments/08-react-login-dashboard`, then run:
```bash
npm install
npm run dev
```
The React demo uses client-side demo credentials only; do not use a real password.

## Push this project to your GitHub
Create an empty repository on GitHub (for example, `frontend-workbook-experiments`), then open a terminal in this folder and run:
```bash
git init
git add .
git commit -m "Add frontend workbook experiments 1-8"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
Replace the remote URL with your own repository URL. If your local folder is already a Git repository, skip `git init`.
