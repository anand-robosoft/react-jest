import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./From";

test("Initial condition", () => {
  render(<Form />);
  const checkBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkBox).not.toBeChecked();

  const submit = screen.getByRole("button", {
    name: /submit/i,
  });
  expect(submit).toBeDisabled();
});

test("Enable checkbox and it should enable button - using fireEvent", () => {
  render(<Form />);
  const checkBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const submit = screen.getByRole("button", {
    name: /submit/i,
  });
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(submit).toBeEnabled();
  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(submit).toBeDisabled();
});

test("Enable checkbox and it should enable button - using userEvent", async () => {
  const user = userEvent.setup();
  render(<Form />);
  const checkBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const submit = screen.getByRole("button", {
    name: /submit/i,
  });
  await user.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(submit).toBeEnabled();
});

test("Hover the Terms and Conditions popover should enable", async () => {
  const user = userEvent.setup();
  render(<Form />);
  const noPopover = screen.queryByText(/no condition/i);
  expect(noPopover).toBeNull();
  const termsTxt = screen.queryByText(/terms and conditions/i);
  await user.hover(termsTxt);
  const popover = screen.queryByText(/no condition/i);
  expect(popover).toBeInTheDocument();
  await user.unhover(termsTxt);
  expect(popover).not.toBeInTheDocument();
});
