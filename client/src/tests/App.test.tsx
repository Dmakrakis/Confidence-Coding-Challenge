import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders react App component", () => {
  render(<App />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toBeInTheDocument();
});
