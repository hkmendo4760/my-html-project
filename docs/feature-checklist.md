# 🧪 Feature Workflow Checklist: Styled `<span>` Element

## Branch Setup
- [ ] Create a feature branch: `git checkout -b feature/<feature-name>`

## Code Changes
- [ ] Modify `index.html`
- [ ] Add `<span>` element and embedded CSS

## Local Preview (WSL)
- [ ] Preview in browser: `explorer.exe index.html`
- [ ] Or run local server: `python3 -m http.server 8000`

## Git Commit
- [ ] Stage changes: `git add index.html`
- [ ] Commit: `git commit -m "Add styled span element to paragraph"`

## Push & PR
- [ ] Push branch: `git push origin feature/<feature-name>`
- [ ] Create pull request on GitHub
- [ ] Review diff under “Files changed”
- [ ] Submit pull request

## Merge & Cleanup
- [ ] Merge PR into `main`
- [ ] Delete local branch: `git branch -D feature/<feature-name>`
- [ ] Delete remote branch: `git push origin --delete feature/<feature-name>`
