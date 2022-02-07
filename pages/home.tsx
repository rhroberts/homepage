/** @jsx h */

import { h, Helmet } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>rhroberts.dev</title>
      </Helmet>
      <h1>Yes. Welcome.</h1>
    </div>
  );
}
