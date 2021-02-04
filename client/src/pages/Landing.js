
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import API from "../utils/api/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Login from "../components/Login"
import Signup from "../components/signup"





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
    <div className="test">
      <Signup 
       setUserName={setUserName}
       setEmail={setEmail}
       setPassword={setPassword}
       handleSignIn={handleSignIn}
       handleFormSubmit={handleFormSubmit}
      />
      <p>hi im: {userName}</p>
    </div>
  );
}


export default Landing;
