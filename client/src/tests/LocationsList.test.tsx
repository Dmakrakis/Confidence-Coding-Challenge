import React from "react";
import { render, screen } from "@testing-library/react";
import LocationsList from "../components/LocationsList";

test("renders LocationsList component at loading state", () => {
  render(<LocationsList />);
  const spanElement = screen.getByText(/Loading Data.../i);
  expect(spanElement).toBeInTheDocument();
  const divElement = screen.getByLabelText("Locations-container");
  expect(divElement).toHaveTextContent("Loading Data...");
  expect(divElement).not.toHaveTextContent("Fetching more locations...");
});
