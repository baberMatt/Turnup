import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom"
import API from "./utils/api/API";
import Nav from "./components/Nav/nav"
import Landing from "./pages/Landing"
import Event from "./pages/Event"
import './App.css';
import './assets/turnupMain.png'
import signup from "./components/signup"
import User from "./pages/User"
import Browse from "./pages/Browse";



function App() {
  const [userName, setUserName] = useState("user");
  const [password, setPassword] = useState("pass");
  const [redirect, setRedirect] = useState(null);
  const [user, setUser] = useState({});


  function handleSignIn() {
    if (userName && password) {
      API.signIn({
        username: userName,
        password: password
      })
        .then(user => {
          setUser(user.data)
          setRedirect(userName);

          setRedirect(null)
          // window.location.replace("/")
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div>
        <Nav
                setUserName={setUserName}
                setPassword={setPassword}
                handleSignIn={handleSignIn}
              />  
        <Router>
        {redirect ? <Redirect to={{ pathname: "/user/" + redirect }} /> :
        
          <Switch>
            <Route exact path="/">
              
              <Landing />
            </Route>
            <Route exact path="/event">
              <Event />
            </Route>
            <Route exact path="/user/:Username">
              <User 
                user={user}
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