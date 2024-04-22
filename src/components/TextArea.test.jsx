import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TextArea from "./TextArea";

describe("TextArea Component", () => {
  const placeholderText = "Enter your message";
  const initialText = "Initial value";

  it("renders textarea with provided placeholder and value", () => {
    render(
      <TextArea
        placeholder={placeholderText}
        value={initialText}
        onChange={() => {}}
      />
    );
    const textarea = screen.getByPlaceholderText(placeholderText);
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveValue(initialText);
  });

  it("displays the correct label", () => {
    render(
      <TextArea
        placeholder={placeholderText}
        value={initialText}
        onChange={() => {}}
      />
    );
    expect(screen.getByText("Dodatkowe informacje")).toBeInTheDocument();
  });
});
