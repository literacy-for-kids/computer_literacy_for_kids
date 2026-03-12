// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curriculumSidebar: [
    'intro',
    'license',
    {
      type: 'category',
      label: 'Digital Foundations',
      description: 'Weeks 1–4: Internet basics, computer skills, files, and keyboard training',
      collapsed: false,
      items: [
        'week01-week-1-internet-playground',
        'week02-week-2-computer-control-room',
        'week03-week-3-digital-treasure-chest',
        'week04-week-4-keyboard-ninja-training',
      ],
    },
    {
      type: 'category',
      label: 'Creative Tools',
      description: 'Weeks 5–6: Writing and digital art',
      items: [
        'week05-week-5-the-power-of-words',
        'week06-week-6-the-digital-art-studio',
      ],
    },
    {
      type: 'category',
      label: 'Research & Ideas',
      description: 'Weeks 7–8: Internet research and brainstorming',
      items: [
        'week07-week-7-the-internet-detective-lab',
        'week08-week-8-the-idea-workshop',
      ],
    },
    {
      type: 'category',
      label: 'Coding & Logic',
      description: 'Weeks 9–11: Algorithms, programming, and debugging',
      items: [
        'week09-week-9-teach-the-computer',
        'week10-week-10-build-your-first-program',
        'week11-week-11-the-debugging-lab',
      ],
    },
    {
      type: 'category',
      label: 'Technology & AI',
      description: 'Weeks 12–14: How technology works and AI exploration',
      items: [
        'week12-week-12-how-things-are-built',
        'week13-week-13-AI-discovery-lab',
        'week14-week-14-AI-creative-partner',
      ],
    },
    {
      type: 'category',
      label: 'Final Project',
      description: 'Weeks 15–18: Invent, build, refine, and showcase your creation',
      items: [
        'week15-week-15-invent-something-cool',
        'week16-week-16-build-and-improve',
        'week17-week-17-final-touches',
        'week18-week-18-creator-showcase',
      ],
    },
    {
      type: 'category',
      label: 'Optional: 3D Design',
      description: 'Bonus weeks: Introduction to 3D modeling and printing',
      items: [
        'week-CAD-1-shape-builders',
        'week-CAD-2-from-screen-to-real-objects',
      ],
    },
    'curriculum-master',
  ],
};

export default sidebars;