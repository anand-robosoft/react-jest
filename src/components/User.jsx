import { useContext } from "react";
import { User } from "../store/UserContext";

export default function UserComponent(props) {
  const [userVote, setUserVote] = useContext(User);
  const { user = {} } = props;
  const { id, first_name, avatar } = user;

  const onClick = () => {
    setUserVote((pre) => {
      const userIdx = pre.reduce((acc, user, i) => {
        if (user && user.id && user.id === id) {
          acc = i;
        }
        return acc;
      }, -1);
      if (userIdx === -1) {
        return [...pre, { name: first_name, vote: 1, id }];
      }
      pre[userIdx].vote += 1;
      return [...pre];
    });
  };

  return (
    <div key={id} onClick={onClick}>
      {first_name && <div role="name">name: {first_name}</div>}
      {avatar && <img src={avatar} alt={`user ${first_name}`} role={"img"} />}
    </div>
  );
}
