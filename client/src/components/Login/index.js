import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css"

function Login(props) {
  return (
    <div id="login" className=" d-flex justify-content-end flex-row no-wrap">
      <Row>
        <Col md={4} className="px-2">
          <input size="3" value={props.userName} id="userInput" className="input p-1 text-center" placeholder="user name" onChange={event => props.setUserName(event.target.value)}></input>
        </Col>
        <Col md={4} className="px-2">
          <input size="3" value={props.password} id="passInput" className="input p-1 text-center" placeholder="password" type="password" onChange={event => props.setPassword(event.target.value)}></input>
        </Col>
        <Col md={2} className="px-2">
          <button className="btn btn3" onClick={props.handleSignIn}>Log In</button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
