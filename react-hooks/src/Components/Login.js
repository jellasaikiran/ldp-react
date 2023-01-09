import React, { useContext } from "react";
import { AppContext } from "./ContextDemo";

const Login = () => {
  const { setUserName } = useContext(AppContext);
  const update = (event) => {
    setUserName(event.target.value);
  };
  return (
    <div>
      <input onChange={update}></input>
    </div>
  );
};

export default Login;
