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
    details: [
      {
        title: 'Purpose',
        text: 'Give the brand a professional home online: a site that introduces TwoMindsDev, presents its services, walks visitors through the process from first message to launch, and makes getting in touch effortless.',
      },
      {
        title: 'Design approach',
        text: 'A confident serif headline, a deep petrol palette with honey and berry accents, and a two-circle motif taken from the logo. The layout is mobile-first and the site is available in three languages, with light and dark themes.',
      },
    ],
    highlights: ['Mobile-first layout', 'English · Macedonian · Albanian', 'Light and dark themes'],
    tags: ['Web Development', 'Responsive Design', 'Multilingual'],
    preview: {
      desktop: {
        src: 'projects/twomindsdev/desktop',
        alt: 'The TwoMindsDev home page on desktop, with the headline “Websites that feel like your business.” on a deep petrol background and buttons to message on Instagram or get a free consultation.',
        widths: [960, 1600],
        width: 1600,
        height: 1000,
        viewport: { width: 1440, height: 900 },
      },
      mobile: {
        src: 'projects/twomindsdev/mobile',
        alt: 'The TwoMindsDev home page on a phone, with the navigation collapsed into a menu button.',
        widths: [390, 780],
        width: 780,
        height: 1688,
        viewport: { width: 390, height: 844 },
      },
    },
  },
];
