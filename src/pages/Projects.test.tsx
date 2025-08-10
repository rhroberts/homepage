import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects", () => {
  it("renders the page heading", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: "Selected Projects." }),
    ).toBeInTheDocument();
  });

  it("renders NavBar with Projects as active page", () => {
    render(<Projects />);
    expect(screen.getByText("[rhroberts.dev]")).toBeInTheDocument();
    const projectsLinks = screen.getAllByText("Projects");
    expect(projectsLinks.length).toBeGreaterThan(0);
  });

  it("renders Footer component", () => {
    render(<Projects />);
    expect(screen.getByText(/© 2022/)).toBeInTheDocument();
    expect(screen.getByText("Site source")).toBeInTheDocument();
  });

  describe("Water Data For Texas project", () => {
    it("renders project heading and description", () => {
      render(<Projects />);
      expect(
        screen.getByRole("heading", { name: "Water Data For Texas" }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /website that provides the public with data and analysis/,
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/over 10k weekly active users/),
      ).toBeInTheDocument();
    });

    it("renders project image with correct attributes", () => {
      render(<Projects />);
      const wdftImage = screen.getByAltText("Water Data For Texas");
      expect(wdftImage).toHaveAttribute("src", "/images/wdft.png");

      // Check if image is wrapped in a link
      const imageLink = wdftImage.closest("a");
      expect(imageLink).toHaveAttribute(
        "href",
        "https://waterdatafortexas.org",
      );
      expect(imageLink).toHaveAttribute("target", "_blank");
    });

    it("includes GitHub link with correct attributes", () => {
      render(<Projects />);
      const githubLink = screen.getByRole("link", { name: "GitHub page" });
      expect(githubLink).toHaveAttribute("href", "https://github.com/twdb");
      expect(githubLink).toHaveAttribute("target", "_blank");
      expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("Browsyn project", () => {
    it("renders project heading and description", () => {
      render(<Projects />);
      expect(
        screen.getByRole("heading", { name: "Browsyn" }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/analog synthesizer using the Web Audio API/),
      ).toBeInTheDocument();
      expect(screen.getByText(/TypeScript with React/)).toBeInTheDocument();
    });

    it("renders project image with correct attributes", () => {
      render(<Projects />);
      const browsynImage = screen.getByAltText("Browsyn");
      expect(browsynImage).toHaveAttribute("src", "/images/browsyn.png");

      const imageLink = browsynImage.closest("a");
      expect(imageLink).toHaveAttribute(
        "href",
        "https://github.com/rhroberts/browsyn/",
      );
      expect(imageLink).toHaveAttribute("target", "_blank");
    });

    it("includes demo link", () => {
      render(<Projects />);
      const demoLink = screen.getByRole("link", { name: "here" });
      expect(demoLink).toHaveAttribute(
        "href",
        "https://rhroberts.github.io/browsyn/",
      );
      expect(demoLink).toHaveAttribute("target", "_blank");
      expect(demoLink).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("yatta project", () => {
    it("renders project heading and description", () => {
      render(<Projects />);
      expect(
        screen.getByRole("heading", { name: "yatta" }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Yet Another Time Tracking Application/),
      ).toBeInTheDocument();
      expect(screen.getByText(/implemented in Python/)).toBeInTheDocument();
    });

    it("renders project image with correct attributes", () => {
      render(<Projects />);
      const yattaImage = screen.getByAltText("yatta");
      expect(yattaImage).toHaveAttribute("src", "/images/yatta.png");

      const imageLink = yattaImage.closest("a");
      expect(imageLink).toHaveAttribute(
        "href",
        "https://github.com/rhroberts/yatta",
      );
      expect(imageLink).toHaveAttribute("target", "_blank");
    });

    it("includes Hypermodern Python link", () => {
      render(<Projects />);
      const hypermodernPythonLink = screen.getByRole("link", {
        name: "Hypermodern Python",
      });
      expect(hypermodernPythonLink).toHaveAttribute(
        "href",
        "https://medium.com/@cjolowicz/hypermodern-python-d44485d9d769",
      );
      expect(hypermodernPythonLink).toHaveAttribute("target", "_blank");
      expect(hypermodernPythonLink).toHaveAttribute(
        "rel",
        "noopener noreferrer",
      );
    });

    it("renders italicized click text", () => {
      render(<Projects />);
      expect(screen.getByText("click")).toBeInTheDocument();
      const clickElement = screen.getByText("click");
      expect(clickElement.tagName).toBe("I");
    });
  });

  it("renders all three project images", () => {
    render(<Projects />);
    const images = screen.getAllByRole("img");
    // Should have project images (NavBar and Footer might have images too)
    const projectImages = images.filter(
      (img) =>
        img.getAttribute("alt") === "Water Data For Texas" ||
        img.getAttribute("alt") === "Browsyn" ||
        img.getAttribute("alt") === "yatta",
    );
    expect(projectImages).toHaveLength(3);
  });

  it("has all project images as clickable links", () => {
    render(<Projects />);
    const wdftImage = screen.getByAltText("Water Data For Texas");
    const browsynImage = screen.getByAltText("Browsyn");
    const yattaImage = screen.getByAltText("yatta");

    // All images should be wrapped in links
    expect(wdftImage.closest("a")).toBeTruthy();
    expect(browsynImage.closest("a")).toBeTruthy();
    expect(yattaImage.closest("a")).toBeTruthy();
  });
});
