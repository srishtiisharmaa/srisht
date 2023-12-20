import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".columns"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders with a specific class name", () => {
  const { container } = render(<App />);
  const elementWithClassName = container.querySelector(".columns");
  expect(elementWithClassName).toBeInTheDocument();
});

test("displays a welcome message", () => {
  const { getByText } = render(<App />);
  const welcomeMessage = getByText("Welcome to My App");
  expect(welcomeMessage).toBeInTheDocument();
});

test("updates state on button click", () => {
  const { getByText, getByTestId } = render(<App />);
  const button = getByText("Click Me");
  const counter = getByTestId("counter");

  expect(counter).toHaveTextContent("0");

  fireEvent.click(button);

  expect(counter).toHaveTextContent("1");
});

test("renders a list of items", () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  const { getByText } = render(<App items={items} />);

  items.forEach((item) => {
    const itemElement = getByText(item);
    expect(itemElement).toBeInTheDocument();
  });
});


