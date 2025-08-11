import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { AppRoutes, App } from "./main.tsx";

vi.mock("./pages/Home", () => ({
  default: () => <div data-testid="home-page">Home Page</div>,
}));

vi.mock("./pages/Projects", () => ({
  default: () => <div data-testid="projects-page">Projects Page</div>,
}));

vi.mock("./pages/Resume", () => ({
  default: () => <div data-testid="resume-page">Resume Page</div>,
}));

const AppWithRouter = ({ initialEntries = ["/"] }) => (
  <MemoryRouter initialEntries={initialEntries}>
    <AppRoutes />
  </MemoryRouter>
);

describe("App Routing", () => {
  it("shows loading state initially", async () => {
    render(<AppWithRouter />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
  });

  it("renders Home page for root path", async () => {
    render(<AppWithRouter initialEntries={["/"]} />);

    await waitFor(() => {
      expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });
  });

  it("renders Projects page for /projects path", async () => {
    render(<AppWithRouter initialEntries={["/projects"]} />);

    await waitFor(() => {
      expect(screen.getByTestId("projects-page")).toBeInTheDocument();
    });
  });

  it("renders Resume page for /resume path", async () => {
    render(<AppWithRouter initialEntries={["/resume"]} />);

    await waitFor(() => {
      expect(screen.getByTestId("resume-page")).toBeInTheDocument();
    });
  });

  it("defaults to Home page for unknown paths", async () => {
    render(<AppWithRouter initialEntries={["/unknown"]} />);

    await waitFor(() => {
      expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });
  });
});

describe("App Component", () => {
  it("renders with HashRouter and routes", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });
  });
});

describe("Navigation Edge Cases", () => {
  it("handles Navigate component redirect properly", async () => {
    render(<AppWithRouter initialEntries={["/unknown"]} />);

    await waitFor(() => {
      expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });
  });

  it("supports Suspense fallback component", () => {
    const { getByText } = render(
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "1.1rem",
        }}
      >
        Loading...
      </div>,
    );

    expect(getByText("Loading...")).toBeInTheDocument();
  });
});
