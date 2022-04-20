import React from "react";
import { render, screen } from "@testing-library/react";
import { LoadingComponent } from "../components/LoadingComponent";

test("loading component test", () => {
  render(<LoadingComponent />);
  const spanElement = screen.getByText(/Loading Data.../i);
  expect(spanElement).toBeInTheDocument();
});
