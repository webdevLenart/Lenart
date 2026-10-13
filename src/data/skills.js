/**
 * Skills and technologies, grouped by area of focus.
 *
 * To add a technology, add an object to a group's `items` array.
 * `icon` is optional and refers to a key in
 * src/components/Skills/skillIcons.js (add a new Lucide icon there if needed).
 */
export const skillGroups = [
  {
    id: 'front-end',
    title: 'Front-End Development',
    icon: 'code',
    summary:
      'The core of my work: semantic markup, considered styling and interactive interfaces built from reusable components.',
    items: [
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
    ],
  },
  {
    id: 'ai',
    title: 'AI Development',
    icon: 'ai',
    summary:
      'A growing area of focus: bringing AI into digital products in ways that are genuinely useful.',
    items: [
      { name: 'AI-powered applications' },
      { name: 'AI integration' },
      { name: 'Exploring intelligent digital solutions' },
    ],
  },
];
