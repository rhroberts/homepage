import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.footerText}>© 2025 • Rusty Roberts</span>
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
