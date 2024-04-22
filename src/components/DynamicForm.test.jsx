import React from "react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import DynamicForm from "./DynamicForm";

describe("DynamicForm Component", () => {
  const initialFields = {
    name: true,
    surname: true,
    email: true,
    phone: true,
    cv: false,
    comments: false,
    additionalInfo: true,
  };

  beforeEach(() => {
    render(<DynamicForm fields={initialFields} />);
  });

  it("renders text inputs for name, surname, email, and phone", () => {
    expect(screen.getByPlaceholderText("Podaj imię")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Podaj nazwisko")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Podaj Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Numer kontaktowy")).toBeInTheDocument();
  });

  it("updates the name field on change", () => {
    const nameInput = screen.getByPlaceholderText("Podaj imię");
    fireEvent.change(nameInput, { target: { value: "Jan" } });
    expect(nameInput.value).toBe("Jan");
  });

  it("does not render CV and comments inputs", () => {
    expect(screen.queryByPlaceholderText("CV")).toBeNull();
    expect(screen.queryByPlaceholderText("Wiadomość do pracodawcy")).toBeNull();
  });

  it("enables the submit button only if the agreement checkbox is checked", () => {
    const checkbox = screen.getByLabelText(
      "Wyrażam zgodę na przetwarzanie danych w procesie rekrutacji."
    );
    const button = screen.getByRole("button", { name: "Aplikuj" });
    expect(button).toBeDisabled();
    fireEvent.click(checkbox);
    expect(button).not.toBeDisabled();
  });
});
