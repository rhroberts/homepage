/** @jsx h */

import {
  Fragment,
  h,
  Helmet,
} from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import NavBar from "../components/navbar.tsx";
import Contact from "../components/contact.tsx";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
            nulla pellentesque dignissim enim sit amet venenatis urna cursus.
            Viverra tellus in hac habitasse. Interdum varius sit amet mattis
            vulputate. Tellus in metus vulputate eu scelerisque felis imperdiet
            proin fermentum. Lacus sed turpis tincidunt id aliquet risus feugiat
            in. Mauris in aliquam sem fringilla ut morbi tincidunt augue
            interdum. Volutpat diam ut venenatis tellus in metus. Leo a diam
            sollicitudin tempor id eu nisl nunc. Bibendum est ultricies integer
            quis auctor elit sed vulputate. Non curabitur gravida arcu ac tortor
            dignissim. Lacinia quis vel eros donec. Ut placerat orci nulla
            pellentesque dignissim enim sit. Nulla posuere sollicitudin aliquam
            ultrices. Placerat orci nulla pellentesque dignissim enim sit..
          </p>
          <Contact />
        </div>
      </div>
    </Fragment>
  );
}
