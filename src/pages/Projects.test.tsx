import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Projects from "./Projects.tsx";

const ProjectsWithRouter = () => (
  <MemoryRouter>
    <Projects />
  </MemoryRouter>
);

describe("Projects", () => {
  it("renders the main page heading", () => {
    render(<ProjectsWithRouter />);
    expect(
      screen.getByRole("heading", { name: "Selected Projects." }),
    ).toBeInTheDocument();
  });

  it("renders NavBar component", () => {
    render(<ProjectsWithRouter />);
    expect(screen.getByText("[rhroberts.dev]")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(<ProjectsWithRouter />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders project headings", () => {
    render(<ProjectsWithRouter />);
    const projectHeadings = screen.getAllByRole("heading", { level: 2 });
    expect(projectHeadings.length).toBeGreaterThan(0);
  });

  it("renders project images", () => {
    render(<ProjectsWithRouter />);
    const images = screen.getAllByRole("img");
    const projectImages = images.filter(
      (img) =>
        img.getAttribute("src")?.includes("wdft") ||
        img.getAttribute("src")?.includes("browsyn") ||
        img.getAttribute("src")?.includes("yatta"),
    );
    expect(projectImages.length).toBeGreaterThan(0);
  });

  it("has clickable project images", () => {
    render(<ProjectsWithRouter />);
    const images = screen.getAllByRole("img");
    const projectImages = images.filter(
      (img) =>
        img.getAttribute("src")?.includes("wdft") ||
        img.getAttribute("src")?.includes("browsyn") ||
        img.getAttribute("src")?.includes("yatta"),
    );

    projectImages.forEach((image) => {
      expect(image.closest("a")).toBeTruthy();
    });
  });

  it("includes external links with proper security attributes", () => {
    render(<ProjectsWithRouter />);

    const externalLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("target") === "_blank");
    expect(externalLinks.length).toBeGreaterThan(0);

    externalLinks.forEach((link) => {
      const rel = link.getAttribute("rel");
      if (rel) {
        expect(rel).toContain("noopener");
      }
    });
  });
});
