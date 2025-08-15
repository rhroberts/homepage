import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExternalLinkIcon from "./ExternalLinkIcon.tsx";

describe("ExternalLinkIcon", () => {
  it("renders with default props", () => {
    const { container } = render(<ExternalLinkIcon />);
    const svg = container.querySelector("svg");

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("width", "16");
    expect(svg).toHaveAttribute("height", "16");
    expect(svg).toHaveAttribute("fill", "currentColor");
  });

  it("renders with custom dimensions", () => {
    const { container } = render(<ExternalLinkIcon width={24} height={24} />);
    const svg = container.querySelector("svg");

    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
  });

  it("applies custom className", () => {
    const { container } = render(<ExternalLinkIcon className="custom-class" />);
    const svg = container.querySelector("svg");

    expect(svg).toHaveClass("custom-class");
  });

  it("contains the correct path element", () => {
    const { container } = render(<ExternalLinkIcon />);
    const path = container.querySelector("path");

    expect(path).toBeInTheDocument();
    expect(path).toHaveAttribute(
      "d",
      "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",
    );
  });
});
