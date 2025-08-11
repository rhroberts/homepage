import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./main.tsx";

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
    Object.defineProperty(globalThis, "location", {
      value: { pathname: "/", hash: "" },
      writable: true,
    });
  });

  it("shows loading state initially", async () => {
    render(<App />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
  });

  it("renders Home page for root hash", async () => {
    globalThis.location.hash = "#/";
    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });
  });

  it("renders Projects page for #/projects hash", async () => {
    globalThis.location.hash = "#/projects";
    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("projects-page")).toBeInTheDocument();
    });
  });

  it("renders Resume page for #/resume hash", async () => {
    globalThis.location.hash = "#/resume";
    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("resume-page")).toBeInTheDocument();
    });
  });

  it("defaults to Home page for unknown hashes", async () => {
    globalThis.location.hash = "#/unknown";
    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });
  });
});
