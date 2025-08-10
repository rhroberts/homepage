import React from "react";
import ReactDOMServer from "react-dom/server";
import { promises as fs } from "node:fs";
import { join } from "node:path";
import process from "node:process";
import { makeHtml } from "./utils.ts";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Resume from "./pages/Resume.tsx";

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
