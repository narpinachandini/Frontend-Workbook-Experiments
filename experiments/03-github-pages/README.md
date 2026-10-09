# Experiment 3 — Deploy a static web application with GitHub Pages

## Aim
Publish a static HTML/CSS/JavaScript website using GitHub Pages.

## Steps
1. Create a GitHub repository and push your static website files.
2. Ensure the entry file is named `index.html` and is in the repository root (or the selected publishing folder).
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for the deployment workflow to finish. The Pages URL will be shown in Settings → Pages.
7. Open the URL and verify that links, CSS, images, and JavaScript work.

## Example
For a repository named `frontend-workbook-experiments`, the URL is usually:
`https://YOUR-USERNAME.github.io/frontend-workbook-experiments/`

## Troubleshooting
- Check the Actions tab for deployment errors.
- Paths are case-sensitive on GitHub Pages.
- Use relative paths such as `./style.css`.
- GitHub Pages serves static files; it does not run a Node/Express backend.
