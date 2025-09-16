import { ReactNode } from "react";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import LoadingImage from "../components/LoadingImage.tsx";
import ContactIcons from "../components/ContactIcons.tsx";
import styles from "./Projects.module.css";

// Import images as assets
import wdftImage from "../assets/images/wdft.png";
import browsynImage from "../assets/images/browsyn.png";
import yattaImage from "../assets/images/yatta.png";

export default function Projects() {
  return (
    <>
      <ContactIcons />
      <NavBar />
      <div id="content">
        <div id="main">
          <h1>Selected Projects.</h1>
          <ProjectCard
            name="Water Data For Texas"
            imgSrc={wdftImage}
            href="https://waterdatafortexas.org"
          >
            I worked on a small team that developed and maintained Water Data
            For Texas, a website that provides the public with data and analysis
            of the state's critical water resources. At the time, the site had
            over 10k weekly active users. Several open-source libraries related
            to the site are available on the agency's{" "}
            <a
              href="https://github.com/twdb"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub page
            </a>
            . The majority of the site's backend was written in Python and the
            frontend was built with TypeScript and React.
          </ProjectCard>
          <ProjectCard
            name="Browsyn"
            imgSrc={browsynImage}
            href="https://github.com/rhroberts/browsyn/"
          >
            Browsyn is a hobby project to emulate an analog synthesizer using
            the Web Audio API. It currently features two individually
            addressable oscillators, an amplitude envelope, a low frequency
            oscillator, and volume and octave controls. The interface makes
            pleasant use of scalable vector graphics for the knobs and keyboard.
            While it's mostly just a toy at the moment, I hope to add MIDI input
            and other essentials to make it a competent instrument for audio
            production. You can try a demo of the project{" "}
            <a
              href="https://rhroberts.github.io/browsyn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Try Browsyn synthesizer demo"
            >
              here
            </a>
            .
          </ProjectCard>
          <ProjectCard
            name="yatta"
            imgSrc={yattaImage}
            href="https://github.com/rhroberts/yatta"
          >
            yatta is Yet Another Time Tracking Application. It is implemented in
            Python and uses the <i>click</i> command-line interface toolkit as
            well as some fun TUI libraries for data visualization. yatta is part
            to-do application, part timesheet. I wrote it to help myself keep
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
    </>
  );
}

interface ProjectCardProps {
  name: string;
  href: string;
  imgSrc: string;
  children?: ReactNode;
}

function ProjectCard({ name, imgSrc, href, children }: ProjectCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${name} project`}
      >
        <LoadingImage src={imgSrc} alt={name} width={400} height={250} />
      </a>
      <div className={styles.projectCardContent}>{children}</div>
    </div>
  );
}
