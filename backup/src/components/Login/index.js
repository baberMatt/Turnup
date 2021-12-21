import React from "react";
import { Button } from 'reactstrap';
import "./style.css"
import Signup from "../signup/signup"

// import UserContext from "../../utils/userContext";

function Login(props) {

  return (
    <div id="login" className=" d-flex flex-row no-wrap">
      <table>
        <tr>
          <td><input size="3" className="input" onChange={event => props.setUserName(event.target.value)}></input></td>
          <td><input size="3" className="input" type="password" onChange={event => props.setPassword(event.target.value)}></input></td>
          <td><button className="btn btn2" onClick={props.handleSignIn}>Log In</button></td>
        </tr>
      </table>
      
      
    </div>
  );
}

export default Login;
