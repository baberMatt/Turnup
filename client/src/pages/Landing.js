
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import API from "../utils/api/API";
// import { Link } from "react-router-dom";
import Login from "../components/Login"
import Signup from "../components/signup"
import SearchQuick from "../components/SearchQuick/searchQuick.js"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css';




function Landing() {
  const [userName, setUserName] = useState("user");
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("pass");
  
  let history = useHistory();
  function handleFormSubmit(event) {
    // event.preventDefault();
    if (userName && email && password ) {
      API.saveUser({
        username: userName,
        email: email,
        password: password
      })
        .then(res => console.log("succefuls Post"))
        .catch(err => console.log(err));
    }
  };
  
  function handleSignIn() {
    if (userName && password ) {
      API.signIn({
        Username: userName,
        Password: password
      })
        .then(res => {console.log(res.config.data)
        history.push("/user/" + userName)

        })
        .catch(err => console.log(err));
    }
  }

  // function signIn() {
  //   {
  //     API.getUsers()
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));
  //   }
  // }

  // signIn();
  
  
  
      return (
    <div id="pageBackground">
      <Signup 
       setUserName={setUserName}
       setEmail={setEmail}
       setPassword={setPassword}
       handleSignIn={handleSignIn}
       handleFormSubmit={handleFormSubmit}
      />
      <Row id="landingContent" className="d-flex justify-content-around">
        <Col lg={2} className="p-5">
          <SearchQuick />
        </Col>
        <Col lg={8} className="justify-content-center">
          <h1 className="display-1 text-center">Welcome to Turnup</h1>
          <img src="https://d3eti1f83v6uwr.cloudfront.net/ZfvppZI-58Yguuk_WZS-H3mu_QA=/fit-in/1280x1280/uploads.thevendry.co/155/1557421030164_IMG_2131.jpg"></img>
        </Col>
      </Row>
    </div>
  );
}


export default Landing;
