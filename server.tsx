/** @jsx h */

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import {
  Component,
  h,
  Helmet,
  renderSSR,
} from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import Home from "./pages/home.tsx";
import Projects from "./pages/projects.tsx";
import Resume from "./pages/resume.tsx";
import { makeHtml } from "./utils.ts";

const cacheMaxAge = 86400;

// serve basic png assets
async function servePNG(path: string) {
  const image = await Deno.readFile(path);
  return new Response(image, {
    headers: {
      "content-type": "image/png",
      "cache-control": `max-age=${cacheMaxAge}`,
    },
  });
}

// serve up a JSX template as HTML
function serveTemplate(template: Component) {
  const ssr = renderSSR(template);
  const { body, head, footer } = Helmet.SSR(ssr);
  const html = makeHtml(body, head, footer);

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": `max-age=${cacheMaxAge}`,
    },
  });
}

// route requests
async function handler(req: Request) {
  const { pathname } = new URL(req.url);
  const now = new Date();
  console.log(`[${now.toLocaleString()}] ${req.method}: ${pathname}`);
  switch (pathname) {
    case "/": {
      return serveTemplate(<Home />);
    }
    case "/projects": {
      return serveTemplate(<Projects />);
    }
    case "/resume": {
      return serveTemplate(<Resume />);
    }
    case "/script.js": {
      const script = await Deno.readFile("./static/script.js");
      return new Response(script, {
        headers: {
          "content-type": "application/javascript",
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
    // images for projects page
    case "/yatta.png": {
      return servePNG("./static/images/yatta.png");
    }
    case "/wdft.png": {
      return servePNG("./static/images/wdft.png");
    }
    case "/browsyn.png": {
      return servePNG("./static/images/browsyn.png");
    }
    // custom web font
    case "/font-regular": {
      const font = await Deno.readFile(
        "./static/fonts/NationalPark-Regular.otf",
      );
      return new Response(font, {
        headers: {
          "content-type": "font/otf",
          "cache-control": `max-age=${cacheMaxAge}`,
        },
      });
    }
    // web manifest; specifies pwa icons, unlikely to be used for this site...
    case "/manifest.webmanifest": {
      const manifest = await Deno.readFile("./static/manifest.webmanifest");
      return new Response(manifest, {
        headers: {
          "content-type": "application/manifest+json",
          "cache-control": `max-age=${cacheMaxAge}`,
        },
      });
    }
    // favicon madness
    case "/favicon.ico": {
      const favicon = await Deno.readFile("./static/favicon.ico");
      return new Response(favicon, {
        headers: {
          "content-type": "image/x-icon",
          "cache-control": `max-age=${cacheMaxAge}`,
        },
      });
    }
    case "/icon.svg": {
      const icon = await Deno.readFile("./static/icon.svg");
      return new Response(icon, {
        headers: {
          "content-type": "image/svg+xml",
          "cache-control": `max-age=${cacheMaxAge}`,
        },
      });
    }
    case "/apple-touch-icon.png":
      return servePNG("./static/apple-touch-icon.png");
    case "/icon-192.png":
      return servePNG("./static/icon-192.png");
    case "/icon-512.png":
      return servePNG("./static/icon-512.png");
    // fallback to 404
    default:
      return new Response("<h1>Not found.</h1>", {
        status: 404,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
  }
}

console.log("Listening on http://localhost:8000");
serve(handler);
