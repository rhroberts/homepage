import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingImage from "./LoadingImage.tsx";

describe("LoadingImage", () => {
  it("shows loading spinner initially", () => {
    render(
      <LoadingImage
        src="/test-image.jpg"
        alt="Test image"
        width={400}
        height={250}
      />,
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("hides spinner and shows image after loading", () => {
    render(
      <LoadingImage
        src="/test-image.jpg"
        alt="Test image"
        width={400}
        height={250}
      />,
    );

    const img = screen.getByRole("img");

    // Initially spinner should be visible
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

    // Simulate image load
    fireEvent.load(img);

    // Spinner should be gone after load
    expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <LoadingImage
        src="/test-image.jpg"
        alt="Test image"
        className="custom-class"
        width={400}
        height={250}
      />,
    );

    const container = screen.getByRole("img").parentElement;
    expect(container).toHaveClass("custom-class");
  });

  it("handles image error", () => {
    render(
      <LoadingImage
        src="/bad-image.jpg"
        alt="Test image"
        width={400}
        height={250}
      />,
    );

    const img = screen.getByRole("img");

    // Simulate image error
    fireEvent.error(img);

    // Spinner should be gone after error
    expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
  });

  it("sets correct dimensions", () => {
    render(
      <LoadingImage
        src="/test-image.jpg"
        alt="Test image"
        width={300}
        height={200}
      />,
    );

    const container = screen.getByRole("img").parentElement;
    expect(container).toHaveStyle({ width: "300px", height: "200px" });
  });

  it("uses default dimensions", () => {
    render(<LoadingImage src="/test-image.jpg" alt="Test image" />);

    const container = screen.getByRole("img").parentElement;
    expect(container).toHaveStyle({ width: "400px", height: "250px" });
  });
});
