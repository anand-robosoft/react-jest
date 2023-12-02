import { useState, useEffect, useContext } from "react";
import { User } from "../../store/UserContext";
import UserComponent from "../../components/user/User";

export default function UserList() {
  const [userVote] = useContext(User);
  let [userData, setUserData] = useState([]);
  const getData = async (api) => {
    const res = await fetch(api)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    if (res.data) {
      setUserData(res.data);
    }
  };
  // for testing the updated state values directly
  // userData = [{}];
  // console.log(userData);

  useEffect(() => {
    getData("https://reqres.in/api/users?page=1");
  }, []);

  const renderUser = (data) => {
    return data.map((user) => {
      const { id, first_name, avatar } = user;
      const selectedUser = userVote.find((vote) => vote.id === id);
      const vote = (selectedUser && selectedUser.vote) || 0;
      return (
        <UserComponent
          key={id}
          name={first_name}
          id={id}
          image={avatar}
          vote={vote}
        />
      );
    });
  };

  return (
    <>
      <div style={{ display: "flex" }}>{renderUser(userData)}</div>
      <div style={{ margin: "100px", textAlign: "center" }}></div>
    </>
  );
}
