import React from "react";
import { Button } from 'reactstrap';
import "./style.css"
import Signup from "../signup"

// import UserContext from "../../utils/userContext";

function Login(props) {
  
  return (
    <div id="login">
      <h6>User Name</h6>
      <input></input>
      <h6>Pass Word</h6>
      <input></input>
      <Button>Log In</Button>
      <Button onClick={props.onClick}>Signup</Button>
      
    </div>
  );
}

export default Login;
