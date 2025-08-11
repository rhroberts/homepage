import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./main.tsx";

// Mock the page components
vi.mock("./pages/Home", () => ({
  default: () => <div data-testid="home-page">Home Page</div>,
}));

vi.mock("./pages/Projects", () => ({
  default: () => <div data-testid="projects-page">Projects Page</div>,
}));

vi.mock("./pages/Resume", () => ({
  default: () => <div data-testid="resume-page">Resume Page</div>,
}));

describe("App Routing", () => {
  beforeEach(() => {
    // Reset location before each test
    Object.defineProperty(globalThis, "location", {
      value: { pathname: "/" },
      writable: true,
    });
  });

  it("shows loading state initially", () => {
    render(<App />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders Home page for root path", async () => {
    globalThis.location.pathname = "/";
    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });
  });

  it("renders Projects page for /projects path", async () => {
    globalThis.location.pathname = "/projects";
    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("projects-page")).toBeInTheDocument();
    });
  });

  it("renders Resume page for /resume path", async () => {
    globalThis.location.pathname = "/resume";
    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("resume-page")).toBeInTheDocument();
    });
  });

  it("defaults to Home page for unknown paths", async () => {
    globalThis.location.pathname = "/unknown";
    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });
  });
});
