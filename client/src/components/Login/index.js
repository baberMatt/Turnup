import React from "react";
import Button from "../Button"
import "./style.css"
// import UserContext from "../../utils/userContext";

function Login() {
  
  return (
    <div id="login">
      <h6>User Name</h6>
      <input></input>
      <h6>Pass Word</h6>
      <input></input>
      <Button /> <Button />
      
    </div>
  );
}

export default Login;
