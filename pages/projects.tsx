/** @jsx h */

import {
  FC,
  Fragment,
  h,
  Helmet,
} from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import NavBar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";

export default function Projects() {
  return (
    <Fragment>
      <Helmet>
        <title>Projects - Rusty Roberts</title>
      </Helmet>
      <NavBar activePage="Projects" />
      <div id="content">
        <div id="main">
          <h1>Selected Projects.</h1>
          <ProjectCard
            name="Water Data For Texas"
            imgSrc="wdft.png"
            href="https://waterdatafortexas.org"
          >
            I work on a small team that develops and maintains Water Data For
            Texas, a website that provides the public with data and analysis of
            the state's critical water resources. The site has over 10k weekly
            active users. Several open-source libraries related to the site are
            available on our agency's{" "}
            <a href="https://github.com/twdb" target="_blank">
              GitHub page
            </a>
            . The majority of the site's backend is written in Python, with
            React and (a bit of) Angular used for its various frontend
            applications.
          </ProjectCard>
          <ProjectCard
            name="Browsyn"
            imgSrc="browsyn.png"
            href="https://github.com/rhroberts/browsyn/"
          >
            Browsyn is my ongoing attempt to emulate an analog synthesizer using
            the Web Audio API. It currently features two, individually
            addressable oscillators, an amplitude envelope, a low frequency
            oscillator, and volume and octave controls. It's written in
            TypeScript with React, and makes pleasant use of the virtues of
            scalable vector graphics for the knobs and keyboard. While it's a
            toy a the moment, I have designs to add MIDI input and other
            essentials to make it a competent instrument for audio production.
            You can try a demo of the project{" "}
            <a href="https://rhroberts.github.io/browsyn/" target="_blank">
              here
            </a>
            .
          </ProjectCard>
          <ProjectCard
            name="yatta"
            description="yet another time tracking application"
            imgSrc="yatta.png"
            href="https://github.com/rhroberts/yatta"
          >
            yatta is Yet Another Time Tracking Application. It is implemented in
            Python and uses the <i>click</i> command-line interface toolkit as
            well as some fun TUI libraries for data visualization. yatta is part
            todo application, part timesheet. I wrote it to help myself keep
            track of and document my work, though I hope it will be useful to
            others as well. I also used the project as a way to try out some of
            the Python tooling described in Claudio Jolowicz's excellent{" "}
            <a
              href="https://medium.com/@cjolowicz/hypermodern-python-d44485d9d769"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hypermodern Python
            </a>{" "}
            series.
          </ProjectCard>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

function ProjectCard(props: {
  name: string;
  description?: string;
  href: string;
  imgSrc: string;
  children?: FC;
}) {
  const { name, description, imgSrc, href, children } = props;
  return (
    <div class="project-card">
      <h2>{name}</h2>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img class="project-card-image" src={imgSrc} alt={name} />
      </a>
      <div class="project-card-content">{children}</div>
    </div>
  );
}
