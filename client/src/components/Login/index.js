import React from "react";
import { Button } from 'reactstrap';
import "./style.css"
import Signup from "../signup"

// import UserContext from "../../utils/userContext";

function Login(props) {
  
  return (
    <div id="login">
      <h6>Username</h6>
      <input onChange={event => props.setUserName(event.target.value)}></input>
      <h6>Password</h6>
      <input onChange={event => props.setPassword(event.target.value)}></input>
      <Button onClick={props.handleSignIn}>Log In</Button>
      <Button onClick={props.onClick}>Signup</Button>
      
    </div>
  );
}

export default Login;
