interface NavBarProps {
  activePage: string;
}

export default function NavBar({ activePage }: NavBarProps) {
  return (
    <>
      <div id="navbar-wrapper">
        <div id="navbar">
          <button id="menu-button" type="button">
            [rhroberts.dev]
          </button>
          <div id="nav-items-wrapper">
            <NavItem
              name="Home"
              href="/index.html"
              current={activePage === "Home"}
            />
            {" • "}
            <NavItem
              name="Projects"
              href="/projects/index.html"
              current={activePage === "Projects"}
            />
            {" • "}
            <NavItem
              name="Resume"
              href="/resume/index.html"
              current={activePage === "Resume"}
            />
          </div>
        </div>
      </div>
      <div id="menu">
        <NavItem
          name="Home"
          href="/index.html"
          current={activePage === "Home"}
        />
        <NavItem
          name="Projects"
          href="/projects/index.html"
          current={activePage === "Projects"}
        />
        <NavItem
          name="Resume"
          href="/resume/index.html"
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
      className={`nav-item ${current ? "nav-active" : "nav-inactive"}`}
    >
      {name}
    </a>
  );
}
