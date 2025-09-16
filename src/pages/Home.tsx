import NavBar from "../components/NavBar.tsx";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <NavBar />
      <div id="content">
        <div id="main">
          <h1>Hey, there! 👋</h1>
          <p>
            My name is Rusty Roberts. I'm a senior software engineer based in
            Seattle, Washington, currently seeking new opportunities. Primarily
            a backend engineer who can work across the full web stack, I'm
            experienced in designing and building applications in microservice
            architectures.
          </p>
          <p>
            Most recently, I worked at{" "}
            <a
              href="https://www.leveltenenergy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LevelTen Energy
            </a>
            , where I helped lead a platform rearchitecture to modernize and
            scale a marketplace that facilitates renewable energy transactions
            between large energy buyers and utility-scale wind and solar
            developers. Previously, I developed data-intensive applications at
            the{" "}
            <a
              href="https://www.twdb.texas.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Texas Water Development Board
            </a>
            , supporting the state's water resource management. I have extensive
            experience with Python, TypeScript, Node.js, Angular, and various
            cloud platforms.
          </p>
          <p>
            Outside of work, I enjoy making things that combine music and code,
            like{" "}
            <a
              href="https://rhroberts.github.io/browsyn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Try Browsyn synthesizer demo"
            >
              this
            </a>{" "}
            analog-imitating software synthesizer built on the Web Audio API, or
            producing music for and collaborating on{" "}
            <a
              href="https://github.com/dmarc3/bakken"
              target="_blank"
              rel="noopener noreferrer"
            >
              hobby video games
            </a>
            . Away from the keyboard, you'll find me wrenching on and riding
            bicycles, often with my toddler in tow.
          </p>
          <p>
            From here, you can view my <a href="#/resume">resume</a>, read about
            a few select <a href="#/projects">projects</a> of mine, or check out
            my public repositories on{" "}
            <a
              href="https://github.com/rhroberts"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p>
            Thanks for stopping by.{" "}
            <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
              🚴
            </span>
          </p>
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}
