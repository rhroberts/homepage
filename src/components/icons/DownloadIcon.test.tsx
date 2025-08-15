import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import DownloadIcon from "./DownloadIcon.tsx";

describe("DownloadIcon", () => {
  it("renders with default props", () => {
    const { container } = render(<DownloadIcon />);
    const svg = container.querySelector("svg");

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width", "16");
    expect(svg).toHaveAttribute("height", "16");
    expect(svg).toHaveAttribute("fill", "currentColor");
  });

  it("renders with custom dimensions", () => {
    const { container } = render(<DownloadIcon width={24} height={24} />);
    const svg = container.querySelector("svg");

    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
  });

  it("applies custom className", () => {
    const { container } = render(<DownloadIcon className="custom-class" />);
    const svg = container.querySelector("svg");

    expect(svg).toHaveClass("custom-class");
  });

  it("contains the correct path element", () => {
    const { container } = render(<DownloadIcon />);
    const path = container.querySelector("path");

    expect(path).toBeInTheDocument();
    expect(path).toHaveAttribute(
      "d",
      "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",
    );
  });
});
