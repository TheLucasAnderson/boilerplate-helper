import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders a heading with the correct text", () => {
    render(<App />);
    const textElement = screen.getByText("Web View - Boilerplate Helper");
    expect(textElement).not.toBe(null);
  });
});
