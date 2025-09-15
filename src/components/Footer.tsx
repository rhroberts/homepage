import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        © 2025 • Rusty Roberts •{" "}
        <a
          href="https://github.com/rhroberts/homepage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site source
        </a>
        {" • "}
        <a href="#/">
          <img
            src="/icon_darkbg.svg"
            alt="favicon"
            className={styles.favicon}
          />
        </a>
      </footer>
    </div>
  );
}
