import React, { useContext } from "react";
import { AppContext } from "../App";

const Logout = () => {
  const { userName } = useContext(AppContext);
  const { setLogin } = useContext(AppContext);
  return (
    <div>
      <h3>Welcome {userName}</h3>
      <button class="btn btn-danger m-3" onClick={() => setLogin(true)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
