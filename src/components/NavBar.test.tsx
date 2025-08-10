import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("renders the site title", () => {
    render(<NavBar activePage="Home" />);
    expect(screen.getByText("[rhroberts.dev]")).toBeInTheDocument();
  });

  it("shows correct active state for Home page", () => {
    render(<NavBar activePage="Home" />);
    const homeLinks = screen.getAllByText("Home");

    homeLinks.forEach((link) => {
      expect(link.className).toContain("navActive");
      expect(link.className).toContain("navItem");
    });
  });

  it("shows correct active state for Projects page", () => {
    render(<NavBar activePage="Projects" />);
    const projectsLinks = screen.getAllByText("Projects");

    projectsLinks.forEach((link) => {
      expect(link.className).toContain("navActive");
    });

    const homeLinks = screen.getAllByText("Home");
    homeLinks.forEach((link) => {
      expect(link.className).toContain("navItem");
      expect(link.className).not.toContain("navActive");
    });
  });

  it("renders all navigation links with correct hrefs", () => {
    render(<NavBar activePage="Home" />);

    const homeLinks = screen.getAllByRole("link", { name: "Home" });
    const projectsLinks = screen.getAllByRole("link", { name: "Projects" });
    const resumeLinks = screen.getAllByRole("link", { name: "Resume" });

    homeLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/");
    });

    projectsLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/projects");
    });

    resumeLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/resume");
    });
  });

  it("renders bullet separators between nav items", () => {
    render(<NavBar activePage="Home" />);
    // Check that bullet characters are present in the document
    expect(document.body.textContent).toContain("•");
  });
});
