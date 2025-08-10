import styles from "./NavBar.module.css";

interface NavBarProps {
  activePage: string;
}

export default function NavBar({ activePage }: NavBarProps) {
  return (
    <>
      <div className={styles.navbarWrapper}>
        <div className={styles.navbar}>
          <button className={styles.menuButton} type="button">
            [rhroberts.dev]
          </button>
          <div className={styles.navItemsWrapper}>
            <NavItem name="Home" href="/" current={activePage === "Home"} />
            {" • "}
            <NavItem
              name="Projects"
              href="/projects"
              current={activePage === "Projects"}
            />
            {" • "}
            <NavItem
              name="Resume"
              href="/resume"
              current={activePage === "Resume"}
            />
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <NavItem name="Home" href="/" current={activePage === "Home"} />
        <NavItem
          name="Projects"
          href="/projects"
          current={activePage === "Projects"}
        />
        <NavItem
          name="Resume"
          href="/resume"
          current={activePage === "Resume"}
        />
      </div>
    </>
  );
}

interface NavItemProps {
  name: string;
  href: string;
  current: boolean;
}

function NavItem({ name, href, current }: NavItemProps) {
  return (
    <a
      href={href}
      className={`${styles.navItem} ${current ? styles.navActive : ""}`}
    >
      {name}
    </a>
  );
}
