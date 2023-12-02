import { render, screen } from "@testing-library/react";
import UserComponent from "./User";
import { Userprovider } from "../store/UserContext";

const userMocData = {
  id: 1,
  name: "test_name",
  image: "https://reqres.in/img/faces/1-image.jpg",
  vote: 0,
};

test("Display the user image and name in the component", () => {
  render(<UserComponent {...userMocData} />, { wrapper: Userprovider });
  const card = screen.getByRole("card");
  expect(card).toBeInTheDocument();
  const img = screen.getByRole("img");
  expect(img).toBeInTheDocument();
  const name = screen.queryByText(/name:/i);
  expect(name).toBeInTheDocument();
  const vote = screen.queryByText(/vote/i);
  expect(vote).toHaveTextContent("vote: 0");
});
