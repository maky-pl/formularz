import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  it("renders without crashing", () => {
    render(<Input type="text" value="" onChange={() => {}} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("applies the placeholder correctly", () => {
    const placeholderText = "Enter your name";
    render(
      <Input type="text" placeholder={placeholderText} onChange={() => {}} />
    );
    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  it("shows an asterisk when required", () => {
    render(<Input label="Name" required onChange={() => {}} />);
    expect(screen.getByText(/\*/)).toBeInTheDocument();
  });

  it("adds 'required-empty' class when required but empty after being touched", () => {
    const { getByRole } = render(
      <Input type="text" required value="" onChange={() => {}} />
    );
    const input = getByRole("textbox");
    fireEvent.blur(input);
    expect(input).toHaveClass("required-empty");
  });
});
