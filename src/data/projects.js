/**
 * Portfolio projects.
 *
 * To add a project, add an object to this array. Projects appear in the order
 * listed. Preview images live in public/projects/<slug>/ and can be generated
 * from the live website with the "Capture project previews" GitHub Action
 * (see scripts/capture-previews.mjs and the README).
 */
export const projects = [
  {
    slug: 'twomindsdev',
    name: 'TwoMindsDev',
    url: 'https://twomindsdev.com/',
    displayUrl: 'twomindsdev.com',
    category: 'Web development brand',
    description:
      'TwoMindsDev is a web development brand focused on creating professional websites that help businesses strengthen their online presence and grow digitally.',
    details: [],
    tags: ['Web Development', 'Responsive Design'],
    preview: {
      alt: 'The TwoMindsDev website',
      desktop: {
        src: 'projects/twomindsdev/desktop',
        widths: [960, 1600],
        width: 1600,
        height: 1000,
        viewport: { width: 1440, height: 900 },
      },
      mobile: {
        src: 'projects/twomindsdev/mobile',
        widths: [390, 780],
        width: 780,
        height: 1688,
        viewport: { width: 390, height: 844 },
      },
    },
  },
];
