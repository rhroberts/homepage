import { describe, it, expect } from "vitest";
import { makeHtml } from "./utils.ts";

describe("makeHtml", () => {
  it("generates basic HTML structure with body content", () => {
    const result = makeHtml("Hello, World!");

    expect(result).toContain("<!DOCTYPE html>");
    expect(result).toContain('<html lang="en">');
    expect(result).toContain("Hello, World!");
    expect(result).toContain("</body>");
    expect(result).toContain("</html>");
  });

  it("includes standard head elements", () => {
    const result = makeHtml("test body");

    expect(result).toContain('<meta charset="UTF-8">');
    expect(result).toContain(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    );
    expect(result).toContain('<link rel="stylesheet" href="/styles.css">');
    expect(result).toContain('<script src="/script.js">');
    expect(result).toContain('<link rel="icon" href="/favicon.ico"');
    expect(result).toContain(
      '<link rel="manifest" href="/manifest.webmanifest">',
    );
  });

  it("adds custom head elements when provided", () => {
    const customHead = [
      "<title>Custom Title</title>",
      '<meta name="description" content="Test">',
    ];
    const result = makeHtml("body content", customHead);

    expect(result).toContain("<title>Custom Title</title>");
    expect(result).toContain('<meta name="description" content="Test">');
  });

  it("adds footer elements when provided", () => {
    const customFooter = ['<script>console.log("footer script")</script>'];
    const result = makeHtml("body content", [], customFooter);

    expect(result).toContain('<script>console.log("footer script")</script>');
  });

  it("works with both head and footer elements", () => {
    const head = ["<title>Test Page</title>"];
    const footer = ['<script>console.log("test")</script>'];
    const result = makeHtml("body content", head, footer);

    expect(result).toContain("<title>Test Page</title>");
    expect(result).toContain('<script>console.log("test")</script>');
    expect(result).toContain("body content");
  });

  it("removes HTML comments during minification", () => {
    const bodyWithComments =
      "<!-- This is a comment -->Hello World<!-- Another comment -->";
    const result = makeHtml(bodyWithComments);

    expect(result).not.toContain("<!-- This is a comment -->");
    expect(result).not.toContain("<!-- Another comment -->");
    expect(result).toContain("Hello World");
  });

  it("collapses whitespace during minification", () => {
    const bodyWithExtraWhitespace = `
      Hello
      
      World
      
      Test
    `;
    const result = makeHtml(bodyWithExtraWhitespace);

    // Should collapse multiple spaces/newlines into single spaces
    expect(result).not.toContain("\n      Hello");
    expect(result).not.toContain("World      Test");
    expect(result).toContain("Hello World Test");
  });

  it("handles empty body", () => {
    const result = makeHtml("");

    expect(result).toContain("<!DOCTYPE html>");
    expect(result).toContain("<body>");
    expect(result).toContain("</body>");
  });

  it("handles multiple head elements", () => {
    const multipleHead = [
      "<title>Test</title>",
      '<meta name="author" content="Test Author">',
      '<link rel="stylesheet" href="/custom.css">',
    ];
    const result = makeHtml("test", multipleHead);

    multipleHead.forEach((element) => {
      expect(result).toContain(element);
    });
  });

  it("handles multiple footer elements", () => {
    const multipleFooter = [
      '<script src="/custom1.js"></script>',
      '<script src="/custom2.js"></script>',
    ];
    const result = makeHtml("test", [], multipleFooter);

    multipleFooter.forEach((element) => {
      expect(result).toContain(element);
    });
  });
});
