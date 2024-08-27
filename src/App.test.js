import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders I was change on the feature branch link", () => {
  render(<App />);
  const linkElement = screen.getByText(/I was change on the feature branch/i);
  expect(linkElement).toBeInTheDocument();
});
