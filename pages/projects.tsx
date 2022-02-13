/** @jsx h */

import { h, Helmet } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import NavBar from "../components/navbar.tsx";

export default function Home() {
  return (
    <div class="container">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <NavBar activePage="Projects" />
      <div class="content">
        <div id="main"></div>
      </div>
    </div>
  );
}
