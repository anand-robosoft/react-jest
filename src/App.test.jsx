import { render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import App from "./App";

test("log role debug", () => {
  const nav = document.createElement("nav");
  nav.innerHTML = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`;

  logRoles(nav);
});
test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/i);
  expect(headingElement).toBeInTheDocument();
});
