import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument(); // match component text
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a todo..."); // match component
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(button);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Build a Todo App");
  const deleteBtn = screen.getByText("Delete", { selector: "button" });

  fireEvent.click(deleteBtn);

  expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
});
