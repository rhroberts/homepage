/** @jsx h */

import {
  Fragment,
  h,
  Helmet,
} from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import NavBar from "../components/navbar.tsx";

export default function Resume() {
  return (
    <Fragment>
      <Helmet>
        <title>Resume</title>
      </Helmet>
      <NavBar activePage="Resume" />
      <div id="content">
        <div id="main">
          <div id="resume">
            <h1>Richard (Rusty) H. Roberts</h1>
            <address>
              <a href="mailto:mail@rhroberts.dev">mail @ rhroberts.dev</a>{" "}
              &bullet;
              <a
                href="https://github.com/rhroberts"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/rhroberts
              </a>
              &bullet;
              <a
                href="https://git.sr.ht/~rustyr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                git.sr.ht/~rustyr
              </a>
            </address>
            <em>Currently based in Seattle, WA.</em>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
