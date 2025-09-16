import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.footerText}>ⓒ 2025 • Rusty Roberts</span>
          <span className={styles.footerText}>•</span>
          <div className={styles.contactIcons}>
            <a href="mailto:mail@rhroberts.dev" aria-label="Email">
              <svg className={`${styles.contactIcon} icon-mail`}>
                <use xlinkHref="#icon-mail"></use>
              </svg>
            </a>
            <a
              href="https://matrix.to/#/@rustyr:matrix.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Matrix"
            >
              <svg className={`${styles.contactIcon} icon-bubble`}>
                <use xlinkHref="#icon-bubble"></use>
              </svg>
            </a>
            <a
              href="https://github.com/rhroberts"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg className={`${styles.contactIcon} icon-git`}>
                <use xlinkHref="#icon-git"></use>
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.footerRight}>
          <a
            href="https://github.com/rhroberts/homepage"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.footerText} ${styles.footerLink}`}
          >
            Site source
          </a>
          <span className={styles.footerText}>•</span>
          <a href="#/" aria-label="Go to home page">
            <img src="/icon_darkbg.svg" alt="Home" className={styles.favicon} />
          </a>
        </div>
      </footer>
    </div>
  );
}
