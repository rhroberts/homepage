/** @jsx h */

import { h, Helmet } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import NavBar from "../components/navbar.tsx";

export default function Resume() {
  return (
    <div id="container">
      <Helmet>
        <title>Resume</title>
      </Helmet>
      <NavBar activePage="Resume" />
      <div id="content">
        <div id="main"></div>
      </div>
    </div>
  );
}
