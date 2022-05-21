/** @jsx h */

import {
  Fragment,
  h,
  Helmet,
} from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import NavBar from "../components/navbar.tsx";
import Contact from "../components/contact.tsx";
import Footer from "../components/footer.tsx";

export default function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>Home - Rusty Roberts</title>
      </Helmet>
      <NavBar activePage="Home" />
      <div id="content">
        <div id="main">
          <h1>Welcome.</h1>
          <p>
            My name is Rusty Roberts. I'm a materials scientist turned software
            engineer based in Seattle, Washington. I write web and desktop
            applications. I am an ardent open-source and free software
            enthusiast, and by extension a fan of the Linux ecosystem.
          </p>
          <p>
            Professionally, I develop full-stack web applications for the{" "}
            <a href="https://www.twdb.texas.gov" target="_blank">
              Texas Water Development Board
            </a>{" "}
            and maintain the servers they run on. For backend work, my language
            of choice is often Python and I have experience in frameworks like
            Flask and FastAPI. For frontend work, I have experience writing
            modern React applications in TypeScript. I enjoy learning new
            languages and technologies, and am always open to using the best
            tool for the task at hand.
          </p>
          <p>
            Unprofessionally, I enjoy making things that combine music and code,
            like{" "}
            <a href="https://rhroberts.github.io/browsyn/" target="_blank">
              this
            </a>{" "}
            analog-imitating software synthesizer built on the Web Audio API. Or
            producing music and contributing audio-related code for{" "}
            <a href="https://github.com/dmarc3/bakken" target="_blank">
              hobby video games
            </a>.
          </p>
          <p>
            From here, you can read about a few select{" "}
            <a href="/projects">projects</a> of mine, view my{" "}
            <a href="/resume">resume</a>, our checkout my public repositories on
            {" "}
            <a href="https://github.com/rhroberts" target="_blank">GitHub</a>.
          </p>
          <p>
            Thanks for stopping by.
          </p>
          <Contact />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
