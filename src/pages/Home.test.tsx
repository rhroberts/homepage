import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Home from "./Home.tsx";

const HomeWithRouter = () => (
  <MemoryRouter>
    <Home />
  </MemoryRouter>
);

describe("Home", () => {
  it("renders the main page heading", () => {
    render(<HomeWithRouter />);
    expect(
      screen.getByRole("heading", { name: "Hey, there! 👋" }),
    ).toBeInTheDocument();
  });

  it("renders NavBar component", () => {
    render(<HomeWithRouter />);
    expect(screen.getByText("[rhroberts.dev]")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(<HomeWithRouter />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders Contact component", () => {
    render(<HomeWithRouter />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("includes navigation to other pages", () => {
    render(<HomeWithRouter />);

    const projectsLinks = screen.getAllByText(/projects/i);
    expect(projectsLinks.length).toBeGreaterThan(0);

    const resumeLinks = screen.getAllByText(/resume/i);
    expect(resumeLinks.length).toBeGreaterThan(0);
  });

  it("includes external links with proper security attributes", () => {
    render(<HomeWithRouter />);

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
