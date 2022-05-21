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
        <title>Resume - Rusty Roberts</title>
      </Helmet>
      <NavBar activePage="Resume" />
      <div id="content">
        <div id="main">
          <div id="resume">
            <h1>
              Rusty Roberts
              <img
                src="/icon.svg"
                style="width:32px;margin-left:10px;transform:translateY(2px);"
              >
              </img>
            </h1>
            <address>
              <a href="mailto:mail@rhroberts.dev">mail @ rhroberts.dev</a>
              &bullet;
              <a
                href="https://github.com/rhroberts"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/rhroberts
              </a>
            </address>
            <em>Currently based in Seattle, WA.</em>
            <h2>Employment</h2>
            <ul>
              <li>
                Programmer IV,{" "}
                <b>Texas Water Development Board</b>, Austin, TX (2019-Present)
              </li>
              <ul>
                <li>
                  Lead a small team to develop and maintain{" "}
                  <a
                    href="https://waterdatafortexas.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Water Data For Texas
                  </a>{" "}
                  using an open-source web stack.
                </li>
                <li>
                  Administer multiple production Linux servers running on AWS,
                  managing upgrades and deployment processes.
                </li>
                <li>
                  Contribute to upstream projects such as{" "}
                  <a
                    href="https://github.com/ulmo-dev/ulmo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ulmo
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://github.com/twdb/sdi/tree/py3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sdi
                  </a>.
                </li>
              </ul>
              <li>
                Graduate Research Assistant,{" "}
                <b>The University of Texas at Austin</b> (2016-2019)
                <ul>
                  <li>
                    Conducted research on emerging materials for electronic
                    devices, which included writing Python applications for
                    analyzing and visualizing scientific data.
                  </li>
                  <li>
                    Led and participated in projects that included members from
                    several different research groups and disciplines.
                  </li>
                </ul>
              </li>
              <li>
                Engineering Writer,{" "}
                <b>Glosten, Inc.</b>, Seattle, WA (2014-2016)
              </li>
              <ul>
                <li>
                  Wrote and edited documentation, technical specifications,
                  white papers, and marketing materials.
                </li>
                <li>
                  Supported engineering efforts by developing technical drawings
                  and performing regulatory research.
                </li>
              </ul>
            </ul>
            <h2>Education</h2>
            <ul>
              <li>
                <i>M.S.E.</i>, Materials Science and Engineering,{" "}
                <b>The University of Texas at Austin</b> (2019)
              </li>
              <li>
                <i>B.S.</i>, Materials Science and Engineering,{" "}
                <b>Columbia University</b> (2014)
              </li>
            </ul>
            <h2>Technical Skills</h2>
            <ul>
              <li>
                Extensive experience using Python for backend web development
                and scientific computing.
              </li>
              <li>
                Knowledgeable in designing web APIs using with Flask, FastAPI,
                and other frameworks.
              </li>
              <li>
                Experience building responsive, data-driven web frontends using
                TypeScript and React.
              </li>
              <li>
                Comfortable providing Linux server administration in production
                environments, including on cloud platforms such as AWS.
              </li>
            </ul>
            <h2>Outreach</h2>
            <ul>
              <li>
                Robotics and Coding Club, <b>Cunningham Elementary School</b>
                {" "}
                (2018-2019)
              </li>
              <ul>
                <li>
                  Collaborated with a small team of UT graduate students
                  developing curriculum for and teaching a robotics after-school
                  program.
                </li>
              </ul>
              <li>
                Research Experience for Teachers,{" "}
                <b>NSF NASCENT Center at UT-Austin</b> (2017)
                <ul>
                  <li>
                    Mentored middle and high school science teachers on research
                    projects related to nanotechnology and helped develop new
                    curriculum for their students.
                  </li>
                </ul>
              </li>
            </ul>
            <h2>Select Publications and Presentations</h2>
            <p>
              R. H. Roberts, J.-F. Lin, and D. Akinwande. High-Pressure
              Vibrational and Optoelectronic Properties of Mono- and Multi-Layer
              Rhenium Disulfide (presentation).{" "}
              <i>March Meeting of the American Physical Society</i>, Los
              Angeles, 2018.
            </p>
            <p>
              M. Wiesner, R. H. Roberts, J.-F. Lin, D. Akinwande, T. Hesjedal,
              L. B. Duffy, S. Wang, Y. Song, J. Jenczyk, S. Jurga, and B. Mroz.
              The effect of substrate and surface plasmons on symmetry breaking
              at the substrate interface of the topological insulator Bi2Te3.
              {" "}
              <i>Scientific Reports</i>, 9(1):6147, 2019.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
