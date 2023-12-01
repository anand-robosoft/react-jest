import { createContext, useState } from "react";
import React from "react";
export const User = createContext();

export const Userprovider = (props) => {
  const [userVote, setUserVote] = useState([]);

  return (
    <User.Provider value={[userVote, setUserVote]}>
      {props.children}
    </User.Provider>
  );
};
