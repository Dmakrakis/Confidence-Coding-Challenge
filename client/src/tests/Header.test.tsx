import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders Header title", () => {
  render(<Header />);
  const headerElement = screen.getByText(/Confidence - Locations/i);
  expect(headerElement).toBeInTheDocument();
});
