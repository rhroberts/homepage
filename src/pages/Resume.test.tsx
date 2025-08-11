import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Resume from "./Resume.tsx";

const ResumeWithRouter = () => (
  <MemoryRouter>
    <Resume />
  </MemoryRouter>
);

describe("Resume", () => {
  it("renders the main heading with name", () => {
    render(<ResumeWithRouter />);
    expect(
      screen.getByRole("heading", { name: /Rusty Roberts/ }),
    ).toBeInTheDocument();
  });

  it("renders NavBar component", () => {
    render(<ResumeWithRouter />);
    expect(screen.getByText("[rhroberts.dev]")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(<ResumeWithRouter />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders all major section headings", () => {
    render(<ResumeWithRouter />);
    const expectedHeadings = [
      "Employment",
      "Education",
      "Technical Skills",
      "Outreach",
      "Select Publications and Presentations",
    ];

    expectedHeadings.forEach((heading) => {
      expect(
        screen.getByRole("heading", { name: heading }),
      ).toBeInTheDocument();
    });
  });

  it("includes contact information with proper links", () => {
    render(<ResumeWithRouter />);

    const emailLink = screen.getByRole("link", {
      name: /mail @ rhroberts.dev/,
    });
    expect(emailLink).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:"),
    );

    const githubLink = screen.getByRole("link", { name: /github.com/ });
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("has proper semantic structure with address element", () => {
    render(<ResumeWithRouter />);
    const addressElement = screen.getByRole("group");
    expect(addressElement.tagName).toBe("ADDRESS");
  });

  it("includes external links with proper security attributes", () => {
    render(<ResumeWithRouter />);

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

  it("renders content in proper list structure", () => {
    render(<ResumeWithRouter />);

    const lists = screen.getAllByRole("list");
    expect(lists.length).toBeGreaterThan(0);
  });
});
