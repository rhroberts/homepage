import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

const getActivePageFromPath = (pathname: string): string => {
  switch (pathname) {
    case "/":
      return "Home";
    case "/projects":
      return "Projects";
    case "/resume":
      return "Resume";
    default:
      return "Home";
  }
};

export default function NavBar() {
  const location = useLocation();
  const activePage = getActivePageFromPath(location.pathname);
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
              <NavItem name="Home" to="/" current={activePage === "Home"} />
              {" • "}
              <NavItem
                name="Resume"
                to="/resume"
                current={activePage === "Resume"}
              />
              {" • "}
              <NavItem
                name="Projects"
                to="/projects"
                current={activePage === "Projects"}
              />
            </div>
          </div>
          <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
            <div className={styles.menuContent}>
              <div className={styles.menuItem}>
                <span className={styles.treeChar}>├─ </span>
                <NavItem name="Home" to="/" current={activePage === "Home"} />
              </div>
              <div className={styles.menuItem}>
                <span className={styles.treeChar}>├─ </span>
                <NavItem
                  name="Resume"
                  to="/resume"
                  current={activePage === "Resume"}
                />
              </div>
              <div className={styles.menuItem}>
                <span className={styles.treeChar}>└─ </span>
                <NavItem
                  name="Projects"
                  to="/projects"
                  current={activePage === "Projects"}
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
  to: string;
  current: boolean;
}

function NavItem({ name, to, current }: NavItemProps) {
  return (
    <Link
      to={to}
      className={`${styles.navItem} ${current ? styles.navActive : ""}`}
    >
      {name}
    </Link>
  );
}
