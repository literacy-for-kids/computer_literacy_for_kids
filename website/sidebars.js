// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curriculumSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Digital Foundations',
      description: 'Weeks 1–4: Internet safety, file management, digital tools, and search skills',
      collapsed: false,
      items: [
        'week01-week-1-internet-ready-safety-first',
        'week02-week-2-window-wonders-folder-forts',
        'week03-week-3-digital-scribes-canvas-creations',
        'week04-week-4-internet-island-search-skills',
      ],
    },
    {
      type: 'category',
      label: 'Programming & Creativity',
      description: 'Weeks 5–7: Scratch coding, keyboard skills, and digital communication',
      items: [
        'week05-week-5-code-sparks-hello-scratch',
        'week06-week-6-scratch-stories-loopy-logic',
        'week07-week-7-keyboard-quests-digital-post',
      ],
    },
    {
      type: 'category',
      label: '3D Design & Making',
      description: 'Weeks 8–10: TinkerCAD, 3D modeling, and 3D printing',
      items: [
        'week08-week-8-entering-the-3d-zone-tinkercad-time',
        'week09-week-9-designing-dimensions-cad-creations',
        'week10-week-10-from-digital-to-reality-3d-print-prep',
      ],
    },
    {
      type: 'category',
      label: 'AI & Digital Citizenship',
      description: 'Weeks 11–12: AI exploration and cyber safety',
      items: [
        'week11-week-11-ai-adventures-smart-sparks',
        'week12-week-12-awesome-internet-citizens-cyber-smarts',
      ],
    },
    {
      type: 'category',
      label: 'Multimedia & Data',
      description: 'Weeks 13–15: Presentations, video, and spreadsheets',
      items: [
        'week13-week-13-multimedia-magic-slideshow-stories',
        'week14-week-14-movie-maker-moments-video-ventures',
        'week15-week-15-spreadsheet-secrets-chart-champions',
      ],
    },
    {
      type: 'category',
      label: 'Final Project',
      description: 'Weeks 16–18: Plan, develop, and showcase your creation',
      items: [
        'week16-week-16-cosmic-creation-project-planning',
        'week17-week-17-final-frontier-project-development',
        'week18-week-18-mission-complete-project-showcase',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'week19-independent-session-setup-tips',
        'week20-materials-for-independent-sessions',
      ],
    },
  ],
};

export default sidebars;