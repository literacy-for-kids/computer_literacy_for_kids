# Contributing to Computer Literacy for Kids

Thank you for your interest in contributing. This is part of the [Literacy for Kids](https://www.literacy-for-kids.com/) open-source curriculum ecosystem.

---

## About This Curriculum

**Computer Literacy for Kids** is a free, open-source curriculum for children ages 8–12.  
Live site: https://computer.literacy-for-kids.com/  
GitHub: https://github.com/literacy-for-kids/computer_literacy_for_kids

Lesson content lives in `website/docs/`. The site is built with [Docusaurus v3](https://docusaurus.io/).

---

## How to Contribute

### Curriculum content (typos, clarity, examples, activities)

1. Fork this repository
2. Clone it: `git clone https://github.com/literacy-for-kids/computer_literacy_for_kids.git`
3. Create a branch: `git checkout -b fix/my-improvement`
4. Edit files in `website/docs/`
5. Test locally: `cd website && npm install && npm start`
6. Open a pull request against `main`

### Infrastructure or tooling

1. Fork and branch as above
2. Make changes and test: `cd website && npm run build && npm run validate:build`
3. Open a pull request with a clear description

---

## Content Standards

- Write for **ages 8–12** in clear, concrete language
- Prefer **guided discussion** over lecture
- **Define terms** when first introduced
- **Avoid fear, shame, or manipulation** as motivational devices
- **Do not collect student data** or add tracking
- Keep lessons **10–20 minutes** and low-prep
- Stay **politically neutral** on contested topics

See the full [Content Style Guide](https://www.literacy-for-kids.com/docs/content-style-guide) for details.

---

## Technical Standards

- Keep the site compatible with static hosting on GitHub Pages
- Do not add user accounts, login, analytics, or server-side code
- Test the build: `npm run build`
- Preserve `baseUrl` and `trailingSlash: true` in `docusaurus.config.js`

See the full [Technical Style Guide](https://www.literacy-for-kids.com/docs/technical-style-guide) for details.

---

## Code of Conduct

This project follows the [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful and constructive.

---

## Questions?

Open an issue in this repository. Maintainers are glad to help.
