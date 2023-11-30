export default function User(props) {
  const { user = {} } = props;
  const { id, first_name, avatar } = user;
  return (
    <div key={id}>
      {avatar && <img src={avatar} alt={`user ${first_name}`} role={"img"} />}
      {first_name && <div role="name">name: {first_name}</div>}
    </div>
  );
}
