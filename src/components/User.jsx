import { useContext } from "react";
import { User } from "../store/UserContext";

export default function UserComponent(props) {
  const [, setUserVote] = useContext(User);
  const { id, name, image, vote } = props;

  const onClick = () => {
    setUserVote((pre) => {
      const userIdx = pre.reduce((acc, user, i) => {
        if (user && user.id && user.id === id) {
          acc = i;
        }
        return acc;
      }, -1);
      if (userIdx === -1) {
        return [...pre, { vote: 1, id }];
      }
      pre[userIdx].vote += 1;
      return [...pre];
    });
  };

  return (
    <div role="card" key={id} onClick={onClick}>
      {image && <img src={image} alt={`user ${name}`} />}
      {name && <div role={"name"}>name: {name}</div>}
      <div role={"vote"}>vote: {vote}</div>
    </div>
  );
}
