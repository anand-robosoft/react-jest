import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserList from "./UserList";
import { Userprovider } from "../store/UserContext";

test("Display the user list image and name", async () => {
  render(<UserList />, { wrapper: Userprovider });
  const img = await screen.findAllByRole("img");
  expect(img).toHaveLength(6);
  const name = await screen.findAllByRole("name");
  expect(name).toHaveLength(6);
});

test("User is clicked it should increment the vote", async () => {
  const user = userEvent.setup();
  render(<UserList />, { wrapper: Userprovider });
  const img = await screen.findAllByRole("img");
  const vote = await screen.findAllByRole("vote");
  expect(vote[0]).toHaveTextContent("vote: 0");
  await user.click(img[0]);
  expect(vote[0]).toHaveTextContent("vote: 1");
  await user.click(img[0]);
  expect(vote[0]).toHaveTextContent("vote: 2");
  await user.click(img[1]);
  expect(vote[1]).toHaveTextContent("vote: 1");
  expect(vote[1].textContent).toBe("vote: 1");
});
