/** @jsx h */

import { Fragment, h } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

export default function NavBar(props: { activePage: string }) {
  const { activePage } = props;
  return (
    <Fragment>
      <div id="navbar-wrapper">
        <div id="navbar">
          <button id="menu-button">
            {"["}rhroberts.dev{"]&nbsp; "}
          </button>
          <div id="nav-items-wrapper">
            <NavItem
              name="Home"
              href="/"
              current={activePage === "Home"}
            />
            {"&nbsp;&bull;&nbsp;"}
            <NavItem
              name="Projects"
              href="/projects"
              current={activePage === "Projects"}
            />
            {"&nbsp;&bull;&nbsp;"}
            <NavItem
              name="Resume"
              href="/resume"
              current={activePage === "Resume"}
            />
          </div>
        </div>
      </div>
      <div id="menu">
        <NavItem
          name="Home"
          href="/"
          current={activePage === "Home"}
        />
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
    </Fragment>
  );
}

function NavItem(props: { name: string; href: string; current: boolean }) {
  const { name, href, current } = props;
  return (
    <a
      href={href}
      class={`nav-item ${current ? "nav-active" : "nav-inactive"}`}
    >
      {name}
    </a>
  );
}
