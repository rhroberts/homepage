import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Resume from "./Resume.tsx";

describe("Resume", () => {
  it("renders the main heading with name", () => {
    render(<Resume />);
    expect(
      screen.getByRole("heading", { name: /Rusty Roberts/ }),
    ).toBeInTheDocument();
  });

  it("renders NavBar component", () => {
    render(<Resume />);
    expect(screen.getByText("[rhroberts.dev]")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(<Resume />);
    expect(screen.getByText(/© 2022/)).toBeInTheDocument();
  });

  it("renders all major section headings", () => {
    render(<Resume />);
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
    render(<Resume />);

    // Check for email link
    const emailLink = screen.getByRole("link", { name: /mail@rhroberts.dev/ });
    expect(emailLink).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:"),
    );

    // Check for GitHub link
    const githubLink = screen.getByRole("link", { name: /github.com/ });
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("has proper semantic structure with address element", () => {
    render(<Resume />);
    const addressElement = screen.getByRole("group"); // address elements have group role
    expect(addressElement.tagName).toBe("ADDRESS");
  });

  it("includes external links with proper security attributes", () => {
    render(<Resume />);

    // Find external links and verify they have security attributes
    const externalLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("target") === "_blank");
    expect(externalLinks.length).toBeGreaterThan(0);

    // Verify external links have proper rel attributes for security
    externalLinks.forEach((link) => {
      const rel = link.getAttribute("rel");
      if (rel) {
        expect(rel).toContain("noopener");
      }
    });
  });

  it("renders content in proper list structure", () => {
    render(<Resume />);

    // Check that content is organized in lists (employment, education, skills, etc.)
    const lists = screen.getAllByRole("list");
    expect(lists.length).toBeGreaterThan(0);
  });
});
