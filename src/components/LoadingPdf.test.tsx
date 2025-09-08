import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoadingPdf from "./LoadingPdf";

describe("LoadingPdf", () => {
  it("renders loading spinner initially", () => {
    render(<LoadingPdf src="/test.pdf" title="Test PDF" />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders iframe with correct props", () => {
    render(<LoadingPdf src="/test.pdf" title="Test PDF" />);
    const iframe = screen.getByTitle("Test PDF");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", "/test.pdf");
  });

  it("applies custom className", () => {
    const { container } = render(
      <LoadingPdf src="/test.pdf" title="Test PDF" className="custom-class" />,
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("hides loading spinner when PDF loads", () => {
    render(<LoadingPdf src="/test.pdf" title="Test PDF" />);

    const iframe = screen.getByTitle("Test PDF");
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

    fireEvent.load(iframe);
    expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
  });

  it("applies loaded class when PDF loads", () => {
    render(<LoadingPdf src="/test.pdf" title="Test PDF" />);

    const iframe = screen.getByTitle("Test PDF");
    expect(iframe).not.toHaveClass(/loaded/);

    fireEvent.load(iframe);
    expect(iframe).toHaveClass(/loaded/);
  });

  it("renders iframe with correct styles", () => {
    render(<LoadingPdf src="/test.pdf" title="Test PDF" />);

    const iframe = screen.getByTitle("Test PDF");
    expect(iframe).toHaveStyle({
      width: "100%",
      height: "100%",
    });
  });
});
