import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import NavBar from "./NavBar.tsx";

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
    expect(document.body.textContent).toContain("•");
  });

  it("toggles mobile menu when button is clicked", () => {
    const { container } = render(<NavBar activePage="Home" />);
    const menuButton = screen.getByRole("button", { name: "[rhroberts.dev]" });

    const menus = container.querySelectorAll('div[class*="menu"]');
    const menu = Array.from(menus).find(
      (el) =>
        el.className.includes("menu") && !el.className.includes("menuButton"),
    );

    expect(menu?.className).not.toContain("menuOpen");

    fireEvent.click(menuButton);
    expect(menu?.className).toContain("menuOpen");

    fireEvent.click(menuButton);
    expect(menu?.className).not.toContain("menuOpen");
  });

  it("closes menu when clicking outside", () => {
    const { container } = render(<NavBar activePage="Home" />);
    const menuButton = screen.getByRole("button", { name: "[rhroberts.dev]" });

    const menus = container.querySelectorAll('div[class*="menu"]');
    const menu = Array.from(menus).find(
      (el) =>
        el.className.includes("menu") && !el.className.includes("menuButton"),
    );

    fireEvent.click(menuButton);
    expect(menu?.className).toContain("menuOpen");

    fireEvent.mouseDown(document.body);
    expect(menu?.className).not.toContain("menuOpen");
  });

  it("closes menu when window is resized above mobile breakpoint", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 375,
    });

    const { container } = render(<NavBar activePage="Home" />);
    const menuButton = screen.getByRole("button", { name: "[rhroberts.dev]" });

    const menus = container.querySelectorAll('div[class*="menu"]');
    const menu = Array.from(menus).find(
      (el) =>
        el.className.includes("menu") && !el.className.includes("menuButton"),
    );

    fireEvent.click(menuButton);
    expect(menu?.className).toContain("menuOpen");

    act(() => {
      window.innerWidth = 400;
      window.dispatchEvent(new Event("resize"));
    });

    expect(menu?.className).not.toContain("menuOpen");
  });
});
