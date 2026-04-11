import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Todo from "./Todo";

describe("Todo App", () => {
  it("Отображается заголовок TODO", () => {
    render(<Todo />);
    expect(screen.getByText(/todo/i)).toBeInTheDocument();
  });

  it("Можно вводить текст в input", () => {
    render(<Todo />);
    const input = screen.getAllByRole("textbox")[0];

    fireEvent.change(input, { target: { value: "Test task" } });

    expect(input.value).toBe("Test task");
  });

  it("Нельзя добавить пустую задачу", () => {
    render(<Todo />);
    const button = screen.getAllByRole("button", { name: /добавить/i })[0];
    const itemsBefore = screen.getAllByRole("listitem").length;

    fireEvent.click(button);

    const itemsAfter = screen.getAllByRole("listitem").length;
    expect(itemsAfter).toBe(itemsBefore);
  });

  it("Добавляется новая задача", () => {
    render(<Todo />);

    const input = screen.getAllByRole("textbox")[0];
    const button = screen.getAllByRole("button", { name: /добавить/i })[0];

    fireEvent.change(input, { target: { value: "Новая задача" } });
    fireEvent.click(button);

    expect(screen.getByText("Новая задача")).toBeInTheDocument();
  });

  it("Задача переключается в выполненную", () => {
    render(<Todo />);

    const item = screen.getAllByText(/сделать домашку/i)[0];
    fireEvent.click(item);

    expect(item).toHaveStyle("text-decoration: line-through");
  });
});