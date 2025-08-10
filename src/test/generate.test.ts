import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { promises as fs } from "node:fs";
import { join } from "node:path";
import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

describe("Static Site Generation", () => {
  const testDistDir = join(process.cwd(), "test-dist");

  beforeAll(async () => {
    // Clean up any existing test-dist directory
    try {
      await fs.rm(testDistDir, { recursive: true, force: true });
    } catch (error) {
      // Directory doesn't exist, ignore
    }
  });

  afterAll(async () => {
    // Clean up test directory
    try {
      await fs.rm(testDistDir, { recursive: true, force: true });
    } catch (error) {
      // Ignore cleanup errors
    }
  });

  it("generates all required HTML files", async () => {
    // Run the generate script
    await execAsync("npm run generate");

    // Check that all expected files exist
    const distDir = join(process.cwd(), "dist");
    const indexFile = join(distDir, "index.html");
    const projectsFile = join(distDir, "projects", "index.html");
    const resumeFile = join(distDir, "resume", "index.html");

    expect(
      await fs
        .access(indexFile)
        .then(() => true)
        .catch(() => false),
    ).toBe(true);
    expect(
      await fs
        .access(projectsFile)
        .then(() => true)
        .catch(() => false),
    ).toBe(true);
    expect(
      await fs
        .access(resumeFile)
        .then(() => true)
        .catch(() => false),
    ).toBe(true);
  });

  it("generates valid HTML with correct titles", async () => {
    const distDir = join(process.cwd(), "dist");

    const indexHtml = await fs.readFile(join(distDir, "index.html"), "utf-8");
    const projectsHtml = await fs.readFile(
      join(distDir, "projects", "index.html"),
      "utf-8",
    );
    const resumeHtml = await fs.readFile(
      join(distDir, "resume", "index.html"),
      "utf-8",
    );

    // Check that HTML is valid (contains DOCTYPE and has basic structure)
    expect(indexHtml).toMatch(/<!DOCTYPE html>/i);
    expect(projectsHtml).toMatch(/<!DOCTYPE html>/i);
    expect(resumeHtml).toMatch(/<!DOCTYPE html>/i);

    // Check titles
    expect(indexHtml).toContain("<title>Home - Rusty Roberts</title>");
    expect(projectsHtml).toContain("<title>Projects - Rusty Roberts</title>");
    expect(resumeHtml).toContain("<title>Resume - Rusty Roberts</title>");
  });

  it("includes navigation with correct links", async () => {
    const distDir = join(process.cwd(), "dist");
    const indexHtml = await fs.readFile(join(distDir, "index.html"), "utf-8");

    // Check that navigation links use correct paths
    expect(indexHtml).toContain('href="/index.html"');
    expect(indexHtml).toContain('href="/projects/index.html"');
    expect(indexHtml).toContain('href="/resume/index.html"');
  });

  it("includes expected content on each page", async () => {
    const distDir = join(process.cwd(), "dist");

    const indexHtml = await fs.readFile(join(distDir, "index.html"), "utf-8");
    const projectsHtml = await fs.readFile(
      join(distDir, "projects", "index.html"),
      "utf-8",
    );
    const resumeHtml = await fs.readFile(
      join(distDir, "resume", "index.html"),
      "utf-8",
    );

    // Check key content
    expect(indexHtml).toContain("Welcome.");
    expect(indexHtml).toContain("My name is Rusty Roberts");

    expect(projectsHtml).toContain("Selected Projects.");
    expect(projectsHtml).toContain("Water Data For Texas");
    expect(projectsHtml).toContain("Browsyn");

    expect(resumeHtml).toContain("Rusty Roberts");
    expect(resumeHtml).toContain("Employment");
    expect(resumeHtml).toContain("Texas Water Development Board");
  });

  it("includes contact section with proper links", async () => {
    const distDir = join(process.cwd(), "dist");
    const indexHtml = await fs.readFile(join(distDir, "index.html"), "utf-8");

    expect(indexHtml).toContain("mailto:mail@rhroberts.dev");
    expect(indexHtml).toContain("https://github.com/rhroberts");
    expect(indexHtml).toContain("https://matrix.to/#/@rustyr:matrix.org");
  });
});
