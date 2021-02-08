import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import API from "./utils/api/API";
import Nav from "./components/Nav/nav"
import Landing from "./pages/Landing"
import Event from "./pages/Event"
import './App.css';
import './assets/turnupMain.png'
import Signup from "./components/signup/signup"
import User from "./pages/User"
import Browse from "./pages/Browse";



function App() {

  const [userName, setUserName] = useState("user");
  const [password, setPassword] = useState("pass");
  const [email, setEmail] = useState("email");
  const [redirect, setRedirect] = useState(null);
  const [userID, setUserID] = useState("");
  const [user, setUser] = useState({});
  const [modal, setModal] = useState(false);
  

  const toggle = () => setModal(!modal);

  function handleSignIn() {
    if (userName && password) {
      API.signIn({
        username: userName,
        password: password
      })
        .then(user => {
          API.updateUser(user.data._id, {islogged: true})
          
          API.getUser(user.data._id)
            .then( res => {
            setUser(res.data)
            setRedirect(userName);
            setRedirect(null);  
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
     
  }

  function handleFormSubmit(event) {
    // event.preventDefault();
    if (userName && email && password) {
      API.saveUser({
        username: userName,
        email: email,
        password: password
      })
        .then(res => console.log("succefuls Post"))
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <Nav
        setUserName={setUserName}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
      />
      <Signup
       modal={modal}
       toggle={toggle}
       setUserName={setUserName}
       setEmail={setEmail}
       setPassword={setPassword}
       handleSignIn={handleSignIn}
       handleFormSubmit={handleFormSubmit}
      />
      <Router>
        {redirect ? <Redirect to={{ pathname: "/user/" + redirect }} /> :

          <Switch>
            <Route exact path="/">
              <Landing
              toggle={toggle}
              />
            </Route>
            <Route exact path="/event">
              <Event />
            </Route>
            <Route exact path="/user/:Username">
              <User
                user={user}
                setUser={setUser}
              />
            </Route>
            <Route exact path="/browse">
              <Browse />
            </Route>
          </Switch>

        }
      </Router>
    </div>
  );

}

export default App;