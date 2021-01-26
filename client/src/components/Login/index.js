import React from "react";
import { Button } from 'reactstrap';
import "./style.css"
import Signup from "../signup"
import {toggle} from "../signup/index"
// import UserContext from "../../utils/userContext";

function Login() {
  
  return (
    <div id="login">
      <h6>User Name</h6>
      <input></input>
      <h6>Pass Word</h6>
      <input></input>
      <Button> </Button>
      <Button onClick={toggle}>Signup</Button>
      
    </div>
  );
}

export default Login;
