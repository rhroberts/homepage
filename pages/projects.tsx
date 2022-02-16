/** @jsx h */

import {
  Fragment,
  h,
  Helmet,
} from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import NavBar from "../components/navbar.tsx";

export default function Projects() {
  return (
    <Fragment>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <NavBar activePage="Projects" />
      <div id="content">
        <div id="main">
          <h1>Selected Projects.</h1>
          <ProjectCard name="yatta" />
        </div>
      </div>
    </Fragment>
  );
}

function ProjectCard(props: { name: string }) {
  const { name } = props;
  return (
    <div class="project-card">
      <h2>{name}</h2>
      <a
        href="https://github.com/rhroberts/yatta"
        target="_blank"
        rel="noopener noreferrer" // why?
      >
        <img src="yatta.png" alt="yatta" />
      </a>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Orci nulla
        pellentesque dignissim enim sit amet venenatis urna cursus. Viverra
        tellus in hac habitasse. Interdum varius sit amet mattis vulputate.
        Tellus in metus vulputate eu scelerisque felis imperdiet proin
        fermentum. Lacus sed turpis tincidunt id aliquet risus feugiat in.
        Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum.
        Volutpat diam ut venenatis tellus in metus. Leo a diam sollicitudin
        tempor id eu nisl nunc. Bibendum est ultricies integer quis auctor elit
        sed vulputate. Non curabitur gravida arcu ac tortor dignissim. Lacinia
        quis vel eros donec. Ut placerat orci nulla pellentesque dignissim enim
        sit. Nulla posuere sollicitudin aliquam ultrices. Placerat orci nulla
        pellentesque dignissim enim sit..
      </p>
    </div>
  );
}
