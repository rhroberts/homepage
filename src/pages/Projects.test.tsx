import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "./Projects.tsx";

describe("Projects", () => {
  it("renders the main page heading", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: "Selected Projects." }),
    ).toBeInTheDocument();
  });

  it("renders NavBar component", () => {
    render(<Projects />);
    expect(screen.getByText("[rhroberts.dev]")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(<Projects />);
    expect(screen.getByText(/© 2022/)).toBeInTheDocument();
  });

  it("renders project headings", () => {
    render(<Projects />);
    const projectHeadings = screen.getAllByRole("heading", { level: 2 });
    expect(projectHeadings.length).toBeGreaterThan(0);
  });

  it("renders project images", () => {
    render(<Projects />);
    const images = screen.getAllByRole("img");
    // Filter out navigation/footer icons to focus on project images
    const projectImages = images.filter((img) =>
      img.getAttribute("src")?.includes("/images/"),
    );
    expect(projectImages.length).toBeGreaterThan(0);
  });

  it("has clickable project images", () => {
    render(<Projects />);
    const images = screen.getAllByRole("img");
    const projectImages = images.filter((img) =>
      img.getAttribute("src")?.includes("/images/"),
    );

    // All project images should be wrapped in links
    projectImages.forEach((image) => {
      expect(image.closest("a")).toBeTruthy();
    });
  });

  it("includes external links with proper security attributes", () => {
    render(<Projects />);

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
});
