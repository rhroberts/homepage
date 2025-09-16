import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContactIcons from "./ContactIcons.tsx";

describe("ContactIcons", () => {
  it("includes SVG symbol definitions", () => {
    render(<ContactIcons />);
    expect(document.querySelector("defs")).toBeInTheDocument();
    expect(document.querySelector("symbol#icon-mail")).toBeInTheDocument();
    expect(document.querySelector("symbol#icon-bubble")).toBeInTheDocument();
    expect(document.querySelector("symbol#icon-git")).toBeInTheDocument();
  });

  it("renders hidden SVG element", () => {
    render(<ContactIcons />);
    const svg = document.querySelector("svg[aria-hidden='true']");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveStyle("position: absolute");
    expect(svg).toHaveStyle("width: 0");
    expect(svg).toHaveStyle("height: 0");
  });
});
