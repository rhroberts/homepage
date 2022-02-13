/** @jsx h */

import { h } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

export default function NavBar(props: { activePage: string }) {
  const { activePage } = props;
  return (
    <div id="navbar">
      <div>
        {"["}rhroberts.dev{"]&nbsp;&nbsp;"}
        <NavItem
          name="Home"
          href="/"
          current={activePage === "Home"}
        />
        {" &bull; "}
        <NavItem
          name="Projects"
          href="/projects"
          current={activePage === "Projects"}
        />
        {" &bull; "}
        <NavItem
          name="Resume"
          href="/resume"
          current={activePage === "Resume"}
        />
      </div>
    </div>
  );
}

function NavItem(props: { name: string; href: string; current: boolean }) {
  const { name, href, current } = props;
  return (
    <a href={href} class={current ? "nav-active" : "nav-inactive"}>{name}</a>
  );
}
