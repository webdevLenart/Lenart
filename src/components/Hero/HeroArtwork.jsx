/**
 * Decorative hero composition: an arch with a rising sun over ruled lines,
 * and a small code card describing what the site is about. Purely visual,
 * so it is hidden from assistive technology.
 */
export default function HeroArtwork({ audience }) {
  const typed = `'for ${audience}'`;

  return (
    <figure className="artwork" aria-hidden="true">
      <div className="artwork__stage">
        <div className="artwork__arch">
          <span className="artwork__sun" />
          <span className="artwork__horizon" />
          <span className="artwork__lines">
            <span />
            <span />
            <span />
            <span />
            <span />
          </span>
        </div>

        <span className="artwork__measure">
          <span className="artwork__measure-label">design × code</span>
        </span>

        <div className="artwork__card">
          <div className="artwork__card-bar">
            <span className="artwork__dots">
              <span />
              <span />
              <span />
            </span>
            <span className="artwork__file">lenart.js</span>
          </div>
          <pre className="artwork__code">
            <code>
              <span className="tok-key">const</span> lenart = {'{'}
              {'\n'}  focus: [<span className="tok-str">'web'</span>, <span className="tok-str">'front-end'</span>, <span className="tok-str">'ai'</span>],
              {'\n'}  builds: <span className="tok-str">'for the web'</span>,
              {'\n'}  creates:{' '}
              <span key={audience} className="tok-str artwork__typed" style={{ '--chars': typed.length }}>
                {typed}
              </span>
              ,<span className="artwork__caret" />
              {'\n'}{'}'};
            </code>
          </pre>
        </div>

        <span className="artwork__chip">
          <span className="artwork__chip-swatch" />
          Aa
        </span>
      </div>
      <figcaption className="artwork__caption">
        <span className="serif-accent">Fig. 01</span> — where design meets code
      </figcaption>
    </figure>
  );
}
