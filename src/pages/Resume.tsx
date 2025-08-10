import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <>
      <NavBar activePage="Resume" />
      <div id="content">
        <div id="main">
          <div className={styles.resume}>
            <h1>
              Rusty Roberts
              <img
                src="/icon.svg"
                style={{
                  width: "32px",
                  marginLeft: "10px",
                  transform: "translateY(2px)",
                }}
                alt="Site icon"
              />
            </h1>
            <address>
              <a href="mailto:mail@rhroberts.dev">mail@rhroberts.dev</a>
              {" • "}
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
                Programmer IV, <b>Texas Water Development Board</b>, Austin, TX
                (Nov. 2021 - Present)
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
                  Support cloud infrastructure for web, database, and auxiliary
                  services.
                </li>
              </ul>
              <li>
                Programmer III, <b>Texas Water Development Board</b>, Austin, TX
                (Dec. 2019 - Nov. 2021)
              </li>
              <ul>
                <li>
                  Full-stack web developer for{" "}
                  <a
                    href="https://waterdatafortexas.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Water Data For Texas
                  </a>{" "}
                  and internal scientific tools.
                </li>
                <li>
                  Contributed to upstream geographic and hydrographic software
                  packages.
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
                </ul>
              </li>
              <li>
                Engineering Writer, <b>Glosten, Inc.</b>, Seattle, WA
                (2014-2016)
              </li>
              <ul>
                <li>
                  Wrote and edited documentation, technical specifications, and
                  marketing materials.
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
              <li>
                <i>B.A.</i>, Natural and Mathematical Sciences,{" "}
                <b>Whitman College</b> (2014, Dual-degree program with CU)
              </li>
            </ul>
            <h2>Technical Skills</h2>
            <ul>
              <li>
                Backend web development and scientific programming in Python (3
                years)
              </li>
              <li>
                RESTful APIs with Flask, FastAPI, and other frameworks (2 years)
              </li>
              <li>
                Frontend web development with JavaScript/TypeScript and React (2
                years)
              </li>
              <li>
                Relational databases (PostgreSQL, sqlite) and object-relational
                mapping tools (2 years)
              </li>
              <li>
                Provisioning and deployment automation with Ansible (2 years)
              </li>
              <li>
                Linux server administration on cloud platforms such as AWS (2
                years)
              </li>
            </ul>
            <h2>Outreach</h2>
            <ul>
              <li>
                Robotics and Coding Club, <b>Cunningham Elementary School</b>{" "}
                (2018-2019)
              </li>
              <ul>
                <li>
                  Collaborated with a small team of UT graduate students to
                  develop curriculum for and teach a robotics after-school
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
              at the substrate interface of the topological insulator Bi
              <sub>2</sub>Te<sub>3</sub>. <i>Scientific Reports</i>, 9(1):6147,
              2019.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
