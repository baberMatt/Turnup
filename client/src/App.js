import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import API from "./utils/api/API";
import Nav from "./components/Nav/nav"
import Landing from "./pages/Landing"
import Event from "./pages/Event"
import './App.css';
import './assets/turnupMain.png'
import Signup from "./components/signup/signup"
import Hostevent from "./components/Hostevent/Hostevent.js"
import User from "./pages/User"
import Browse from "./pages/Browse";



function App() {

  const [userName, setUserName] = useState("user");
  const [password, setPassword] = useState("pass");
  const [email, setEmail] = useState("email");

  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [briefDetails, setBriefDetails] = useState("");
  const [details, setDetails] = useState("");
  const [mainCat, setMainCat] = useState("");
  const [subCat1, setSubCat1] = useState("");
  const [subCat2, setSubCat2] = useState("");
  const [location, setLocation] = useState("");

  const [redirect, setRedirect] = useState(null);
  const [userID, setUserID] = useState("");
  const [user, setUser] = useState({});
  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalHost, setModalHost] = useState(false);

  const [eventInFocus, setEventInFocus] = useState({});

  const toggleSignUp = () => setModalSignUp(!modalSignUp);
  const toggleHost = () => setModalHost(!modalHost);

  function handleSignIn() {
    if (userName && password) {
      // passport authenticate
      API.signIn({
        username: userName,
        password: password
      })
        .then(user => {
          API.updateUser(user.data._id, { islogged: true })

          API.getUser(user.data._id)
            .then(res => {
              setUser(res.data)
              setRedirect(userName);
              setRedirect(null);
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }

  }

  function handleSignUpSubmit() {
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

  function handleHostFormSubmit() {
    // event.preventDefault();

    if (eventName && briefDetails && details && eventType && mainCat && location) {

      let eventString = eventName.replace(/\s/g, '').toLowerCase();
      API.saveEvent({
        eventName: eventName,
        eventString: eventString,
        host: user._id,
        briefDetails: briefDetails,
        details: details,
        eventType: eventType,
        category: {
          first: mainCat,
          second: subCat1,
          third: subCat2
        },
        location: location
      })
        .then(res => console.log("successful event Post"))
        .catch(err => console.log(err));
    }
    API.getEventname({ eventName: eventName })
      .then(res => {
        
        API.updateUser(user._id, {hosting: [...res.data.hosting, res.data._id]})
      })
     
        
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Nav
        setUserName={setUserName}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
      />
      <Signup
        modalSignUp={modalSignUp}
        toggleSignUp={toggleSignUp}
        setUserName={setUserName}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
        handleFormSubmit={handleSignUpSubmit}
      />
      <Hostevent
        modalHost={modalHost}
        setEventName={setEventName}
        setEventType={setEventType}
        setBriefDetails={setBriefDetails}
        setDetails={setDetails}
        setMainCat={setMainCat}
        setSubCat1={setSubCat1}
        setSubCat2={setSubCat2}
        setLocation={setLocation}
        toggleHost={toggleHost}
        handleHostFormSubmit={handleHostFormSubmit}
      />
      <Router>
        {redirect ? <Redirect to={{ pathname: "/user/" + redirect }} /> :

          <Switch>
            <Route exact path="/">
              <Landing
                toggleSignUp={toggleSignUp}
              />
            </Route>
            <Route exact path="/event/:currentEvent">
              <Event 
               user={user}
               eventInFocus={eventInFocus}
               setEventInFocus={setEventInFocus}
              />
            </Route>
            <Route exact path="/user/:Username">
              <User
                user={user}
                setUser={setUser}
                toggleHost={toggleHost}
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