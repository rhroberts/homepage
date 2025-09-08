import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Resume from "./Resume.tsx";

const ResumeWithRouter = () => (
  <MemoryRouter>
    <Resume />
  </MemoryRouter>
);

describe("Resume", () => {
  it("renders the main heading", () => {
    render(<ResumeWithRouter />);
    expect(
      screen.getByRole("heading", { name: "Resume." }),
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

  it("includes download PDF button", () => {
    render(<ResumeWithRouter />);
    const downloadButton = screen.getByLabelText("Download PDF");
    expect(downloadButton).toHaveAttribute(
      "download",
      "rusty-roberts-resume.pdf",
    );
    expect(downloadButton).toHaveAttribute("href", "/documents/resume.pdf");
  });

  it("includes open in new tab button", () => {
    render(<ResumeWithRouter />);
    const viewButton = screen.getByLabelText("Open in New Tab");
    expect(viewButton).toHaveAttribute("target", "_blank");
    expect(viewButton).toHaveAttribute("rel", "noopener noreferrer");
    expect(viewButton).toHaveAttribute("href", "/documents/resume.pdf");
  });

  it("renders PDF iframe viewer", () => {
    render(<ResumeWithRouter />);
    const iframe = screen.getByTitle("Rusty Roberts Resume");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", "/documents/resume.pdf");
  });

  describe("responsive behavior", () => {
    let mockInnerWidth: number;

    beforeEach(() => {
      mockInnerWidth = 1024; // desktop by default
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: mockInnerWidth,
      });
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    it("shows text and icons on desktop viewport", () => {
      // Set desktop width
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1024,
      });

      render(<ResumeWithRouter />);

      // Should show text content on desktop
      expect(screen.getByText("Download PDF")).toBeInTheDocument();
      expect(screen.getByText("Open in New Tab")).toBeInTheDocument();

      // Should also have icons with the buttonIcon class
      const container = screen.getByLabelText("Download PDF");
      expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("shows only icons on mobile viewport", () => {
      // Set mobile width
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 320,
      });

      render(<ResumeWithRouter />);

      // Should not show text content on mobile
      expect(screen.queryByText("Download PDF")).not.toBeInTheDocument();
      expect(screen.queryByText("Open in New Tab")).not.toBeInTheDocument();

      // But buttons should still be accessible by aria-label
      expect(screen.getByLabelText("Download PDF")).toBeInTheDocument();
      expect(screen.getByLabelText("Open in New Tab")).toBeInTheDocument();
    });

    it("responds to window resize events", () => {
      // Start with desktop
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1024,
      });

      render(<ResumeWithRouter />);

      // Should show text initially
      expect(screen.getByText("Download PDF")).toBeInTheDocument();

      // Simulate resize to mobile
      act(() => {
        Object.defineProperty(window, "innerWidth", {
          writable: true,
          configurable: true,
          value: 320,
        });
        window.dispatchEvent(new Event("resize"));
      });

      // Should no longer show text
      expect(screen.queryByText("Download PDF")).not.toBeInTheDocument();

      // But buttons should still be accessible
      expect(screen.getByLabelText("Download PDF")).toBeInTheDocument();
    });

    it("cleans up event listener on unmount", () => {
      const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

      const { unmount } = render(<ResumeWithRouter />);

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        "resize",
        expect.any(Function),
      );
    });
  });

  describe("accessibility", () => {
    it("has proper aria-labels for screen readers", () => {
      render(<ResumeWithRouter />);

      const downloadButton = screen.getByLabelText("Download PDF");
      const viewButton = screen.getByLabelText("Open in New Tab");

      expect(downloadButton).toHaveAttribute("aria-label", "Download PDF");
      expect(viewButton).toHaveAttribute("aria-label", "Open in New Tab");
    });

    it("has proper semantic structure", () => {
      render(<ResumeWithRouter />);

      // Should have a main heading
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();

      // Should have proper link roles
      const links = screen.getAllByRole("link");
      expect(links.length).toBeGreaterThan(2); // At least download and view buttons plus nav links
    });
  });

  describe("PDF container styling", () => {
    it("applies correct CSS classes", () => {
      render(<ResumeWithRouter />);

      const pdfContainer = screen.getByTitle(
        "Rusty Roberts Resume",
      ).parentElement;
      expect(pdfContainer?.className).toMatch(/_imageContainer_/);

      const iframe = screen.getByTitle("Rusty Roberts Resume");
      expect(iframe.className).toMatch(/_image_/);
    });
  });

  describe("button styling and behavior", () => {
    it("applies correct CSS classes to buttons", () => {
      render(<ResumeWithRouter />);

      const downloadButton = screen.getByLabelText("Download PDF");
      const viewButton = screen.getByLabelText("Open in New Tab");

      expect(downloadButton.className).toMatch(/_downloadButton_/);
      expect(viewButton.className).toMatch(/_viewButton_/);
    });

    it("has correct download attribute", () => {
      render(<ResumeWithRouter />);

      const downloadButton = screen.getByLabelText("Download PDF");
      expect(downloadButton).toHaveAttribute(
        "download",
        "rusty-roberts-resume.pdf",
      );
    });

    it("opens external link with proper security attributes", () => {
      render(<ResumeWithRouter />);

      const viewButton = screen.getByLabelText("Open in New Tab");
      expect(viewButton).toHaveAttribute("target", "_blank");
      expect(viewButton).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
