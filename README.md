# 🖥️ Computer Literacy for Kids

An 18-week, hands-on computer literacy curriculum for young learners (~age 7) working alongside a parent, guardian, or teacher.

[![Live Site](https://img.shields.io/badge/View%20Curriculum-zcohen--nerd.github.io-4a90d9?style=for-the-badge)](https://zcohen-nerd.github.io/computer_literacy_for_kids/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

---

## 📋 Quick Start

The fastest way to use this curriculum — no setup required:

| Format | Link |
|--------|------|
| 🌐 **Browse online** | [computer_literacy_for_kids](https://zcohen-nerd.github.io/computer_literacy_for_kids/) |
| 📄 **Download PDF** | [18-Week Curriculum (PDF)](./18-Week%20Computer%20Literacy%20Curriculum%20for%20Young%20Learners.pdf) |
| 📝 **Download DOCX** | [18-Week Curriculum (DOCX)](./18-Week%20Computer%20Literacy%20Curriculum%20for%20Young%20Learners.docx) |

Share any of the above with other educators or families.

---

## 🗓️ Curriculum Overview

Each week includes **two guided 30-minute sessions** and **one 20-minute independent session**, following a consistent structure with preparation checklists, step-by-step activities, and reflection questions.

| Unit | Weeks | What Students Learn |
|------|:-----:|---------------------|
| **Digital Foundations** | 1–4 | Internet safety & digital citizenship, Windows desktop & file management, digital art with Paint 3D, web searching with kid-safe tools |
| **Programming & Creativity** | 5–7 | Block-based coding with Scratch, keyboard & typing skills, composing email safely |
| **3D Design & Making** | 8–10 | TinkerCAD modeling & design, precision tools, 3D printing workflow |
| **AI & Digital Citizenship** | 11–12 | Supervised AI chatbot exploration, online kindness, strong passwords & phishing awareness |
| **Multimedia & Data** | 13–15 | Slideshow presentations, video editing with Clipchamp, spreadsheets & charts |
| **Final Project** | 16–18 | Plan, build, and present a "Digital Creation Story" combining learned skills |

Two supplementary pages cover **independent session setup tips** and a **materials checklist**.

---

## 🧰 Tools & Services Used

All tools are free or included with Windows:

- [Scratch](https://scratch.mit.edu/) — block-based coding
- [TinkerCAD](https://www.tinkercad.com/) — 3D design
- [Google Interland](https://beinternetawesome.withgoogle.com/) — internet safety games
- [Kiddle](https://www.kiddle.co/) — kid-safe search engine
- [TypingClub](https://www.typingclub.com/) / [BBC Dance Mat Typing](https://www.bbc.co.uk/bitesize/topics/zf2f9j6/articles/z3c6tfr) — typing practice
- **Paint 3D**, **Notepad**, **File Explorer**, **Clipchamp** — built-in Windows apps
- **PowerPoint** / [Google Slides](https://docs.google.com/presentation/) / [Canva](https://www.canva.com/) — presentations
- **Excel** / [Google Sheets](https://docs.google.com/spreadsheets/) — spreadsheets
- [ChatGPT](https://chat.openai.com/) — supervised AI exploration

---

## 📁 Repository Structure

```
├── README.md
├── LICENSE
├── 18-Week Computer Literacy Curriculum for Young Learners.docx
├── 18-Week Computer Literacy Curriculum for Young Learners.pdf
├── docs/                    # Markdown source for each lesson
│   ├── _master.md           # Full curriculum in a single file
│   ├── week01-...md         # Individual weekly lesson plans
│   └── ...
└── website/                 # Docusaurus site (powers the live site)
    ├── docs/                # Website copy of lesson content
    ├── src/                 # Homepage components & custom CSS
    ├── docusaurus.config.js
    ├── sidebars.js
    └── package.json
```

- **`docs/`** — The canonical Markdown source files. Edit here if you want to update lesson content.
- **`website/`** — The Docusaurus project that builds the live site. Pushes to `main` auto-deploy via GitHub Actions.

---

## 🖥️ Local Development

Only needed if you want to run the website locally or contribute changes to the site:

```bash
cd website
npm install
npm start
```

The site will open at `http://localhost:3000/computer_literacy_for_kids/`.

To build a production version:

```bash
npm run build
```

**Requirements:** Node.js 18+

---

## 🤝 Contributing

Found a typo, have an activity idea, or want to improve a lesson? Contributions are welcome!

1. **Open an issue** to discuss your idea
2. **Fork & submit a pull request** with your changes
3. Keep the downloadable DOCX/PDF files and site structure intact

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).

---

Built with [Docusaurus](https://docusaurus.io/) · Created by [Zachary Cohen](https://github.com/zcohen-nerd)
