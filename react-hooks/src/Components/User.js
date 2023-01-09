import { useContext } from "react";
import { AppContext } from "./ContextDemo";

const User = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h4>User :: {userName}</h4>
    </div>
  );
};

export default User;
