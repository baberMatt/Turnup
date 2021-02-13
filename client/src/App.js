import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import API from "./utils/api/API";
// import { UserContext } from "./utils/userContext.js"
import Nav from "./components/Nav/nav"
import Landing from "./pages/Landing"
import Event from "./pages/Event"
import './App.css';
import Signup from "./components/signup/signup"
import Attendees from "./components/Attendees/Attendess.js"
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
  const [user, setUser] = useState({ Username: "user", hosting: [], attending: [] });
  const [isLogged, setIsLogged] = useState(false);
  const [loginInit, setLoginInit] = useState(false)
  
  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalHost, setModalHost] = useState(false);
  const [modalAttendees, setModalAttendees] = useState(false);


  const [eventInFocus, setEventInFocus] = useState({ attendees: [] });

  const toggleSignUp = () => setModalSignUp(!modalSignUp);
  const toggleHost = () => setModalHost(!modalHost);
  const toggleAttendees = () => setModalAttendees(!modalAttendees);

  const history = useHistory();
  
  useEffect(() => {
    let checkLogged = sessionStorage.getItem("isLogged")
    let loadUser = sessionStorage.getItem("user")
    if (checkLogged) {
      setIsLogged(true)
      API.getUser(loadUser)
        .then(res => {
          setUser(res.data) 
        })
        .catch(err => console.log(err));
    }
  }, [])

  function handleSignIn() {
    if (userName && password) {
      // passport authenticate
      API.signIn({
        username: userName,
        password: password
      })
        .then(user => {
          setIsLogged(true);
          sessionStorage.setItem("isLogged", "true")
          sessionStorage.setItem("user", user.data._id )
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

 
  
  

  function logOut() {
    setIsLogged(false)
    sessionStorage.clear();
    window.location.href = '/';
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

  //  ---- This function creates validates and creates a new Event object in the DB, then gets the newly formed event id, and relates it to the user that hosted ----//
  function handleHostFormSubmit() {
  

    let eventString = eventName.replace(/\s/g, '').toLowerCase();
    if (eventName && briefDetails && details && eventType && mainCat && location) {


      API.saveEvent({
        eventName: eventName,
        eventString: eventString,
        hosts: user._id,
        attendees: {guest: user._id},
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
    } else {
      alert("We were not able to host your event")
    }


    API.getEventstring({ eventString: eventString })
      .then(res => {
          API.updateUser(user._id, { $push: { hosting: res.data._id } })
          window.location.href = '/event/' + res.data.eventString;
      })
      .catch(err => console.log(err));
    
    
  };
  

  return (
    <div>
      
      <Nav
        user={user}
        isLogged={isLogged}
        logOut={logOut}
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
        handleSignUpSubmit={handleSignUpSubmit}
      />
      <Hostevent
        modalHost={modalHost}
        eventType={eventType}
        mainCat={mainCat}
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
      <Attendees
        eventInFocus={eventInFocus}
        modalAttendees={modalAttendees}
        toggleAttendees={toggleAttendees}
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
                isLogged={isLogged}
                eventInFocus={eventInFocus}
                setEventInFocus={setEventInFocus}
                toggleAttendees={toggleAttendees}
              />
            </Route>
            <Route exact path="/user/:Username">
              <User
                user={user}
                isLogged={isLogged}
                loginInit={loginInit}
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