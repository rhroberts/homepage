/** @jsx h */

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import {
  h,
  Helmet,
  renderSSR,
} from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

function App() {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>rhroberts.dev</title>
      </Helmet>
      <h1>Yes. Welcome.</h1>
    </div>
  );
}

const ssr = renderSSR(<App />);
const { body, head, footer } = Helmet.SSR(ssr);

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    ${head.join("\n")}
  </head>
  <body>
    ${body}
    ${footer.join("\n")}
  </body>
</html>
`;

async function handler(req: Request) {
  const { pathname } = new URL(req.url);
  console.log(pathname);
  switch (pathname) {
    case "/favicon.ico": {
      const favicon = await Deno.readFile("./static/favicon.ico");
      return new Response(favicon, {
        headers: {
          "content-type": "image/x-icon",
        },
      });
    }
    case "/":
      return new Response(html, {
        headers: {
          "content-type": "text/html",
        },
      });
    default:
      return new Response("Not found.", { status: 404 });
  }
}

console.log("Listening on http://localhost:8000");
serve(handler);
