import css from './Footer.module.css';

export function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.content}>
          <p className={css.email}>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </p>
          <div className={css.social}>
            <a href="#" aria-label="Twitter">
              Twitter
            </a>
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" aria-label="GitHub">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

