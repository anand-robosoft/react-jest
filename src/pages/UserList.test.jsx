import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("Display the user list image and name", async () => {
  render(<UserList />);
  const img = await screen.findAllByRole('img');
  expect(img).toHaveLength(6);
  const name = await screen.findAllByRole('name');
  expect(name).toHaveLength(6);
});

