import React from "react";
import { render, screen } from "@testing-library/react";
import LocationCard from "../components/LocationCard";

test("renders Location Details", () => {
  const dataPoint = {
    id: 1010,
    address: {
      addressLine1: "adLine1",
      addressLine2: "adLine2",
      city: "testCity",
      state: "testState",
      zip: "testZip",
    },
    locationDetails: "TestDetails",
    locationType: "testType",
  };

  render(<LocationCard dataPoint={dataPoint} />);
  const divElements = screen.getAllByLabelText("Location Point");
  expect(divElements[0]).toHaveTextContent(dataPoint.address.addressLine1);
  expect(divElements[0]).toHaveTextContent(dataPoint.locationType);
  expect(divElements[0]).toHaveClass("container");
});
