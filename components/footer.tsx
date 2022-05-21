/** @jsx h */

import { h } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

export default function Footer() {
  return (
    <div id="footer-wrapper">
      <footer>
        &#169; 2022 &bullet; Rusty Roberts &bullet;{" "}
        <a
          href="https://github.com/rhroberts/homepage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site source
        </a>
      </footer>
    </div>
  );
}
