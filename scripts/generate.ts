// Monkey-patch require to handle CSS modules
import { createRequire } from "module";

interface ModuleParent {
  filename: string;
}

interface ResolveOptions {
  [key: string]: unknown;
}

const require = createRequire(import.meta.url);
const Module = require("module");
const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (
  request: string,
  parent: ModuleParent,
  isMain: boolean,
  options: ResolveOptions,
) {
  if (request.endsWith(".module.css")) {
    const jsStub = request + ".js";
    const fs = require("fs");
    const path = require("path");
    const stubPath = path.resolve(path.dirname(parent.filename), jsStub);
    if (fs.existsSync(stubPath)) {
      return originalResolveFilename.call(
        this,
        jsStub,
        parent,
        isMain,
        options,
      );
    }
  }
  return originalResolveFilename.call(this, request, parent, isMain, options);
};

import React from "react";
import ReactDOMServer from "react-dom/server";
import { promises as fs } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import { makeHtml } from "../src/utils.ts";
import Home from "../src/pages/Home.tsx";
import Projects from "../src/pages/Projects.tsx";
import Resume from "../src/pages/Resume.tsx";

const distDir = join(process.cwd(), "dist");

const pages = [
  {
    path: "/index.html",
    title: "Home - Rusty Roberts",
    component: React.createElement(Home),
  },
  {
    path: "/projects/index.html",
    title: "Projects - Rusty Roberts",
    component: React.createElement(Projects),
  },
  {
    path: "/resume/index.html",
    title: "Resume - Rusty Roberts",
    component: React.createElement(Resume),
  },
];

async function generateStaticSite() {
  // Ensure directories exist
  await fs.mkdir(join(distDir, "projects"), { recursive: true });
  await fs.mkdir(join(distDir, "resume"), { recursive: true });

  for (const page of pages) {
    const body = ReactDOMServer.renderToStaticMarkup(page.component);
    const head = [`<title>${page.title}</title>`];
    const html = makeHtml(body, head);

    const filePath = join(distDir, page.path);
    await fs.writeFile(filePath, html);
    console.log(`Generated: ${page.path}`);
  }

  console.log("Static site generation complete!");
}

generateStaticSite().catch(console.error);
