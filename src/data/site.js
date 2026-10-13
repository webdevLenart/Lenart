/**
 * Site-wide content and settings.
 *
 * This is the one place to update your name, roles, social links and the
 * public URL of the deployed site. Everything here is plain data, so it can
 * also be imported from Node scripts and from vite.config.js.
 */
export const site = {
  name: 'Lenart Ismaili',
  shortName: 'LI',
  roles: ['Web Developer', 'Front-End Developer', 'AI Developer'],

  /**
   * The hero headline ends with "Creating for …" and loops through these
   * words. With reduced motion, only the last one is shown.
   */
  heroAudiences: [
    'restaurants',
    'coffee shops',
    'agencies',
    'hotels',
    'boutiques',
    'salons',
    'startups',
    'your business',
  ],

  /** Public URL of the deployed site. Used for canonical and Open Graph tags. */
  url: 'https://webdevlenart.github.io/Lenart/',

  /**
   * Add a real address here (e.g. 'hello@example.com') to show an email
   * option in the Contact section. Leave it as null to hide it.
   */
  email: null,

  social: {
    github: {
      label: 'GitHub',
      handle: 'webdevLenart',
      url: 'https://github.com/webdevLenart',
    },
    instagram: {
      label: 'Instagram',
      handle: 'veqlenart',
      url: 'https://www.instagram.com/veqlenart/',
      /** Official Instagram short link that opens a Direct Message thread. */
      messageUrl: 'https://ig.me/m/veqlenart',
    },
  },
};
