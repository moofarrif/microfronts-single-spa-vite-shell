import React from "react";
import { render, screen } from "@testing-library/react";
import ShellApp from "./ShellApp";

test("renders learn react link", () => {
  render(<ShellApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
