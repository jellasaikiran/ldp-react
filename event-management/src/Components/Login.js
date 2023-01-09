import React, { useContext, useState } from "react";
import { AppContext } from "../App";

const Login = () => {
  const { setuserName } = useContext(AppContext);
  const { setLogin } = useContext(AppContext);
  const { userName } = useContext(AppContext);
  const [password, setpassword] = useState("");
  const [valid, setvalid] = useState(false);
  const inputStyle = {
    margin: "10px",
    padding: "5px",
  };
  
  let comp;
  let pStyle = {
    color: "red",
  };
  if (valid) {
    comp = <p style={pStyle}>Please Enter Valid Credentails</p>;
  }
  const call = () => {
    console.log(userName);
    console.log(password);
    if (userName !== "" && password !== "") {
      setLogin(false);
      setvalid(false);
    } else {
      setvalid(true);
    }
  };
  return (
    <>
      <h2>Login..</h2>
      {comp}
      <form onSubmit={call}>
        <input
          style={inputStyle}
          placeholder="Username "
          onChange={(e) => setuserName(e.target.value)}
          type={"text"}
        />{" "}
        <br />
        <input
          style={inputStyle}
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
          type={"password"}
          required
        />{" "}
        <br />
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
