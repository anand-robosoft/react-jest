import { useState, useEffect } from "react";
import User from "../components/User";

export default function UserList() {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .catch((err) => console.log(err));
    if (res.data) {
      setUserData(res.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {userData.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}
