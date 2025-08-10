import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("renders the welcome heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Welcome." }),
    ).toBeInTheDocument();
  });

  it("renders personal introduction", () => {
    render(<Home />);
    expect(screen.getByText(/My name is Rusty Roberts/)).toBeInTheDocument();
    expect(
      screen.getByText(/software engineer based in Seattle/),
    ).toBeInTheDocument();
  });

  it("renders professional experience section", () => {
    render(<Home />);
    expect(
      screen.getByText(/Texas Water Development Board/),
    ).toBeInTheDocument();
    expect(screen.getByText(/Python/)).toBeInTheDocument();
    expect(
      screen.getByText(/React applications in TypeScript/),
    ).toBeInTheDocument();
  });

  it("renders hobby projects section", () => {
    render(<Home />);
    expect(
      screen.getByText(/analog-imitating software synthesizer/),
    ).toBeInTheDocument();
    expect(screen.getByText(/hobby video games/)).toBeInTheDocument();
  });

  it("includes external links with proper attributes", () => {
    render(<Home />);

    // Texas Water Development Board link
    const twdbLink = screen.getByRole("link", {
      name: /Texas Water Development Board/,
    });
    expect(twdbLink).toHaveAttribute("href", "https://www.twdb.texas.gov");
    expect(twdbLink).toHaveAttribute("target", "_blank");
    expect(twdbLink).toHaveAttribute("rel", "noopener noreferrer");

    // Browsyn project link
    const browsynLink = screen.getByRole("link", { name: "this" });
    expect(browsynLink).toHaveAttribute(
      "href",
      "https://rhroberts.github.io/browsyn/",
    );
    expect(browsynLink).toHaveAttribute("target", "_blank");

    // GitHub link
    const githubLink = screen.getByRole("link", { name: "GitHub" });
    expect(githubLink).toHaveAttribute("href", "https://github.com/rhroberts");
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("includes internal navigation links", () => {
    render(<Home />);

    const projectsLink = screen.getByRole("link", { name: "projects" });
    expect(projectsLink).toHaveAttribute("href", "/projects");

    const resumeLink = screen.getByRole("link", { name: "resume" });
    expect(resumeLink).toHaveAttribute("href", "/resume");
  });

  it("renders NavBar with Home as active page", () => {
    render(<Home />);
    // NavBar should render with "Home" as active page
    expect(screen.getByText("[rhroberts.dev]")).toBeInTheDocument();
    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks.length).toBeGreaterThan(0);
  });

  it("renders Contact component", () => {
    render(<Home />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(<Home />);
    expect(screen.getByText(/© 2022/)).toBeInTheDocument();
    expect(screen.getByText("Site source")).toBeInTheDocument();
  });

  it("renders closing message", () => {
    render(<Home />);
    expect(screen.getByText("Thanks for stopping by.")).toBeInTheDocument();
  });
});
