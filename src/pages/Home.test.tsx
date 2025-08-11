import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home.tsx";

describe("Home", () => {
  it("renders the main page heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Welcome." }),
    ).toBeInTheDocument();
  });

  it("renders NavBar component", () => {
    render(<Home />);
    expect(screen.getByText("[rhroberts.dev]")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(<Home />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders Contact component", () => {
    render(<Home />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("includes navigation to other pages", () => {
    render(<Home />);

    const projectsLinks = screen.getAllByText(/projects/i);
    expect(projectsLinks.length).toBeGreaterThan(0);

    const resumeLinks = screen.getAllByText(/resume/i);
    expect(resumeLinks.length).toBeGreaterThan(0);
  });

  it("includes external links with proper security attributes", () => {
    render(<Home />);

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
