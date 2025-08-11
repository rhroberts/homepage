import { useState, useEffect, useRef } from "react";
import styles from "./NavBar.module.css";

interface NavBarProps {
  activePage: string;
}

export default function NavBar({ activePage }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 376) {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.navbarWrapper}>
        <div className={styles.navbarContainer} ref={navbarRef}>
          <div className={styles.navbar}>
            <button
              className={styles.menuButton}
              type="button"
              onClick={toggleMenu}
            >
              [rhroberts.dev]
            </button>
            <div className={styles.navItemsWrapper}>
              <NavItem name="Home" href="#/" current={activePage === "Home"} />
              {" • "}
              <NavItem
                name="Projects"
                href="#/projects"
                current={activePage === "Projects"}
              />
              {" • "}
              <NavItem
                name="Resume"
                href="#/resume"
                current={activePage === "Resume"}
              />
            </div>
          </div>
          <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
            <div className={styles.menuContent}>
              <div className={styles.menuItem}>
                <span className={styles.treeChar}>├─ </span>
                <NavItem
                  name="Home"
                  href="#/"
                  current={activePage === "Home"}
                />
              </div>
              <div className={styles.menuItem}>
                <span className={styles.treeChar}>├─ </span>
                <NavItem
                  name="Projects"
                  href="#/projects"
                  current={activePage === "Projects"}
                />
              </div>
              <div className={styles.menuItem}>
                <span className={styles.treeChar}>└─ </span>
                <NavItem
                  name="Resume"
                  href="#/resume"
                  current={activePage === "Resume"}
                />
              </div>
            </div>
          </div>
        </div>
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
