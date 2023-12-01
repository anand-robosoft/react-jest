import { render, screen } from "@testing-library/react";
import UserComponent from "./User";

const userMocData = {
  id: 1,
  avatar: "https://reqres.in/img/faces/1-image.jpg",
  first_name: "test_name",
};

test("Display the user image and name", () => {
  render(<UserComponent user={userMocData}/>);
  const img = screen.getByRole("img");
  expect(img).toBeInTheDocument();
  const name = screen.queryByText(/name:/i);
  expect(name).toBeInTheDocument();
});
