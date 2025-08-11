import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingImage from "./LoadingImage.tsx";
import { IMAGE_PADDING_RIGHT_REM } from "../constants/viewport.ts";

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

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

    fireEvent.load(img);

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

    fireEvent.error(img);

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

  describe("responsive behavior", () => {
    beforeEach(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1024,
      });
      window.getComputedStyle = vi.fn().mockImplementation(() => ({
        fontSize: "16px",
        getPropertyValue: vi.fn().mockReturnValue("16px"),
      }));
    });

    it("constrains width on small viewport accounting for padding", () => {
      window.innerWidth = 350;

      render(
        <LoadingImage
          src="/test-image.jpg"
          alt="Test image"
          width={400}
          height={250}
        />,
      );

      const container = screen.getByRole("img").parentElement;
      const expectedWidth = 350 - IMAGE_PADDING_RIGHT_REM * 16;

      expect(container?.style.width).toBe(`${expectedWidth}px`);
      expect(container?.style.height).toBe(
        `${Math.round(expectedWidth * (250 / 400))}px`,
      );
    });

    it("adjusts for different font sizes", () => {
      window.innerWidth = 350;
      window.getComputedStyle = vi.fn().mockImplementation(() => ({
        fontSize: "20px",
        getPropertyValue: vi.fn().mockReturnValue("20px"),
      }));

      render(
        <LoadingImage
          src="/test-image.jpg"
          alt="Test image"
          width={400}
          height={250}
        />,
      );

      const container = screen.getByRole("img").parentElement;
      const expectedWidth = 350 - IMAGE_PADDING_RIGHT_REM * 20;

      expect(container?.style.width).toBe(`${expectedWidth}px`);
      expect(container?.style.height).toBe(
        `${Math.round(expectedWidth * (250 / 400))}px`,
      );
    });

    it("responds to window resize", () => {
      render(
        <LoadingImage
          src="/test-image.jpg"
          alt="Test image"
          width={400}
          height={250}
        />,
      );

      let container = screen.getByRole("img").parentElement;
      expect(container?.style.width).toBe("400px");
      expect(container?.style.height).toBe("250px");

      act(() => {
        window.innerWidth = 350;
        window.dispatchEvent(new Event("resize"));
      });

      container = screen.getByRole("img").parentElement;
      const expectedWidth = 350 - IMAGE_PADDING_RIGHT_REM * 16;
      expect(container?.style.width).toBe(`${expectedWidth}px`);
      expect(container?.style.height).toBe(
        `${Math.round(expectedWidth * (250 / 400))}px`,
      );
    });

    it("does not constrain when viewport is larger than image", () => {
      window.innerWidth = 500;

      render(
        <LoadingImage
          src="/test-image.jpg"
          alt="Test image"
          width={400}
          height={250}
        />,
      );

      const container = screen.getByRole("img").parentElement;
      expect(container?.style.width).toBe("400px");
      expect(container?.style.height).toBe("250px");
    });
  });
});
