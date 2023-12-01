import { useState, useEffect, useContext } from "react";
import { User } from "../store/UserContext";
import UserComponent from "../components/User";

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
  // userData = [{}];
  // console.log(userData);

  useEffect(() => {
    getData("https://reqres.in/api/users?page=1");
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        {userData.map((user) => (
          <UserComponent user={user} key={user.id} />
        ))}
      </div>
      <div style={{ margin: "100px", textAlign: "center" }}>
        {userVote.map(({ name, vote, id }) => (
          <div key={id}>
            <div>
              {name} {vote} vote{vote > 1 ? "s" : ""}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
