import "./App.css";
import React, { useState, createContext } from "react";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

export const AppContext = createContext(null);

function App() {
  const [login, setLogin] = useState(true);
  const [userName, setuserName] = useState("");
  let comp;
  if (login) {
    comp = <Login />;
  } else {
    comp = <Logout />;
  }
  return (
    <AppContext.Provider
      value={{ login, setLogin, userName, setuserName }}
      className="App"
    >
      <div id="container">
        <div className="inner">{comp}</div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
