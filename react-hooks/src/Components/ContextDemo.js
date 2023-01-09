import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);
const ContextDemo = () => {
  const [userName, setUserName] = useState("");
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <br />
      <br />
      <br />
      <h3>Use Context Hook:</h3>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default ContextDemo;
