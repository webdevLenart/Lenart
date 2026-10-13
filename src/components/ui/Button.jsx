import ExternalLink from './ExternalLink.jsx';
import './Button.css';

/**
 * Link styled as a button. Every call to action on the site navigates
 * somewhere, so buttons are always rendered as anchors.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'default',
  icon: Icon,
  iconLeading: IconLeading,
  external = false,
  className = '',
  children,
  ...props
}) {
  const classes = ['button', `button--${variant}`, size !== 'default' && `button--${size}`, className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {IconLeading ? <IconLeading className="button__icon-leading" size={18} aria-hidden="true" /> : null}
      <span>{children}</span>
      {Icon ? <Icon className="button__icon" size={18} strokeWidth={2} aria-hidden="true" /> : null}
    </>
  );

  if (external) {
    return (
      <ExternalLink href={href} className={classes} {...props}>
        {content}
      </ExternalLink>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {content}
    </a>
  );
}
