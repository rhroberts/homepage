/** @jsx h */

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import {
  h,
  Helmet,
  renderSSR,
} from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import Home from "./pages/home.tsx";
import Projects from "./pages/projects.tsx";
import Resume from "./pages/resume.tsx";
import { makeHtml } from "./utils.ts";

const cacheMaxAge = 86400;

async function handler(req: Request) {
  const { pathname } = new URL(req.url);
  const now = new Date();
  console.log(`[${now.toLocaleString()}] ${req.method}: ${pathname}`);
  switch (pathname) {
    default:
      return new Response("<h1>Not found.</h1>", {
        status: 404,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    case "/": {
      const ssr = renderSSR(<Home />);
      const { body, head, footer } = Helmet.SSR(ssr);
      const html = makeHtml(body, head, footer);

      return new Response(html, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": `max-age=${cacheMaxAge}`,
        },
      });
    }
    case "/projects": {
      const ssr = renderSSR(<Projects />);
      const { body, head, footer } = Helmet.SSR(ssr);
      const html = makeHtml(body, head, footer);

      return new Response(html, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": `max-age=${cacheMaxAge}`,
        },
      });
    }
    case "/resume": {
      const ssr = renderSSR(<Resume />);
      const { body, head, footer } = Helmet.SSR(ssr);
      const html = makeHtml(body, head, footer);

      return new Response(html, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": `max-age=${cacheMaxAge}`,
        },
      });
    }
    case "/styles.css": {
      const styles = await Deno.readFile("./static/styles.css");
      return new Response(styles, {
        headers: {
          "content-type": "text/css; charset=utf-8",
          "cache-control": `max-age=${cacheMaxAge}`,
        },
      });
    }
    case "/favicon.ico": {
      const favicon = await Deno.readFile("./static/favicon.ico");
      return new Response(favicon, {
        headers: {
          "content-type": "image/x-icon",
        },
      });
    }
    case "/font-regular": {
      const font = await Deno.readFile(
        "./static/fonts/NationalPark-Regular.otf",
      );
      return new Response(font, {
        headers: {
          "content-type": "font/otf",
        },
      });
    }
  }
}

console.log("Listening on http://localhost:8000");
serve(handler);
