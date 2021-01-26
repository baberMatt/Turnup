
import React, { useState, useEffect } from "react";
import API from "../utils/api/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Login from "../components/Login"
import Signup from "../components/signup"




function Landing() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="test">
      <Login />
      <Signup />
    </div>
  );
}


export default Landing;
