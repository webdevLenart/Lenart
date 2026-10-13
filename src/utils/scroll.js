/**
 * Scrolls to a section and moves keyboard focus to it, so screen reader and
 * keyboard users continue from the right place.
 */
export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });

  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });

  if (window.location.hash !== `#${id}`) {
    window.history.pushState(null, '', `#${id}`);
  }
}
