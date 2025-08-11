import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "./Contact.tsx";

describe("Contact", () => {
  it("renders contact section title", () => {
    render(<Contact />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders all contact links with correct hrefs", () => {
    render(<Contact />);
    const links = screen.getAllByRole("link");

    const emailLink = links.find((link) =>
      link.getAttribute("href")?.includes("mailto:"),
    );
    const matrixLink = links.find((link) =>
      link.getAttribute("href")?.includes("matrix.to"),
    );
    const githubLink = links.find((link) =>
      link.getAttribute("href")?.includes("github.com"),
    );

    expect(emailLink).toHaveAttribute("href", "mailto:mail@rhroberts.dev");
    expect(emailLink).toHaveAttribute("target", "_blank");

    expect(matrixLink).toHaveAttribute(
      "href",
      "https://matrix.to/#/@rustyr:matrix.org",
    );
    expect(matrixLink).toHaveAttribute("target", "_blank");

    expect(githubLink).toHaveAttribute("href", "https://github.com/rhroberts");
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("renders SVG icons for all contact methods", () => {
    render(<Contact />);
    const svgs = document.querySelectorAll("svg[class*='icon']");
    expect(svgs.length).toBe(3);

    expect(document.querySelector("svg.icon-mail")).toBeInTheDocument();
    expect(document.querySelector("svg.icon-bubble")).toBeInTheDocument();
    expect(document.querySelector("svg.icon-git")).toBeInTheDocument();
  });

  it("includes SVG symbol definitions", () => {
    render(<Contact />);
    expect(document.querySelector("defs")).toBeInTheDocument();
    expect(document.querySelector("symbol#icon-mail")).toBeInTheDocument();
    expect(document.querySelector("symbol#icon-bubble")).toBeInTheDocument();
    expect(document.querySelector("symbol#icon-git")).toBeInTheDocument();
  });
});
