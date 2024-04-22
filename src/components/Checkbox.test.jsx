import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox Component", () => {
  it("renders the checkbox with its label", () => {
    render(
      <Checkbox label="Accept Terms" checked={false} onChange={() => {}} />
    );
    expect(screen.getByLabelText("Accept Terms")).toBeInTheDocument();
  });

  it("displays the correct initial checked state", () => {
    render(
      <Checkbox label="Already Agreed" checked={true} onChange={() => {}} />
    );
    const checkbox = screen.getByLabelText("Already Agreed");
    expect(checkbox).toBeChecked();
  });
});
