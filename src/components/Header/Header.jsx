import { useCallback, useEffect, useRef, useState } from 'react';
import { navigation } from '../../data/navigation.js';
import { site } from '../../data/site.js';
import { useActiveSection } from '../../hooks/useActiveSection.js';
import { useScrolled } from '../../hooks/useScrolled.js';
import { scrollToSection } from '../../utils/scroll.js';
import Button from '../ui/Button.jsx';
import Monogram from '../ui/Monogram.jsx';
import SocialLinks from '../ui/SocialLinks.jsx';
import './Header.css';

const sectionIds = navigation.map((item) => item.id);
const DESKTOP_QUERY = '(min-width: 960px)';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const activeId = useActiveSection(sectionIds);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  const closeMenu = useCallback(({ restoreFocus = false } = {}) => {
    setMenuOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('is-menu-open', menuOpen);
    if (!menuOpen) return undefined;

    const getFocusable = () => [
      toggleRef.current,
      ...menuRef.current.querySelectorAll('a[href], button:not([disabled])'),
    ];

    getFocusable()[1]?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu({ restoreFocus: true });
        return;
      }
      if (event.key !== 'Tab') return;

      const items = getFocusable();
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = (event) => {
      if (event.matches) closeMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
      root.classList.remove('is-menu-open');
    };
  }, [menuOpen, closeMenu]);

  const handleMenuLink = (event, id) => {
    event.preventDefault();
    closeMenu();
    window.requestAnimationFrame(() => scrollToSection(id));
  };

  return (
    <>
      <header
        className={['site-header', scrolled && 'is-scrolled', menuOpen && 'is-open'].filter(Boolean).join(' ')}
      >
        <div className="container site-header__inner">
          <a href="#home" className="brand" aria-label={`${site.name}, back to top`}>
            <Monogram size={36} className="brand__mark" />
            <span className="brand__name" aria-hidden="true">
              {site.name}
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <ul className="site-nav__list">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="site-nav__link"
                    aria-current={activeId === item.id ? 'location' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header__actions">
            <Button href="#contact" variant="secondary" size="small" className="site-header__cta">
              Let’s Talk
            </Button>

            <button
              ref={toggleRef}
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              <span className="menu-toggle__lines" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className="mobile-menu"
        data-open={menuOpen}
        inert={!menuOpen}
      >
        <div className="container mobile-menu__inner">
          <nav aria-label="Mobile">
            <ol className="mobile-menu__list">
              {navigation.map((item, index) => (
                <li key={item.id} style={{ '--item-index': index }}>
                  <a
                    href={`#${item.id}`}
                    className="mobile-menu__link"
                    aria-current={activeId === item.id ? 'location' : undefined}
                    onClick={(event) => handleMenuLink(event, item.id)}
                  >
                    <span className="mobile-menu__index serif-accent" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mobile-menu__footer">
            <Button href="#contact" onClick={(event) => handleMenuLink(event, 'contact')}>
              Let’s Talk
            </Button>
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
}
