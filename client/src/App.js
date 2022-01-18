import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import API from "./utils/api/API";
import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing";
import Event from "./pages/Event";
import NotFound from "./pages/NotFound.js";
import User from "./pages/User";
import Browse from "./pages/Browse";
import Signup from "./components/Signup/Signup";
import Alert from "./components/Alert/Alert.js";
import Attendees from "./components/Attendees/Attendess.js";
import Hostevent from "./components/Hostevent/Hostevent.js";
import './App.css';

function App() {
  const [windowSize, setwindowSize] = useState(window.innerWidth);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [showWarning, setShowWarning] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [briefDetails, setBriefDetails] = useState("");
  const [details, setDetails] = useState("");
  const [mainCat, setMainCat] = useState("");
  const [subCat1, setSubCat1] = useState("");
  const [subCat2, setSubCat2] = useState("");
  const [location, setLocation] = useState("");
  const [initDate, setInitDate] = useState({});
  const [redirect, setRedirect] = useState(null);
  const [user, setUser] = useState({ Username: "user", hosting: [], attending: [] });
  const [isLogged, setIsLogged] = useState(false);
  const [loginInit, setLoginInit] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalHost, setModalHost] = useState(false);
  const [modalAttendees, setModalAttendees] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);
  const [eventInFocus, setEventInFocus] = useState({ _id: "", attendees: [], menu: [], images: {} });
  const [imageForUpload, setImageForUpload] = useState();
  const [alertProps, setAlertProps] = useState("");

  const toggleSignUp = () => setModalSignUp(!modalSignUp);
  const toggleHost = () => setModalHost(!modalHost);
  const toggleAttendees = () => setModalAttendees(!modalAttendees);
  const toggleAlert = () => setModalAlert(!modalAlert);
  
  useEffect(() => {
    let checkLogged = sessionStorage.getItem("isLogged");
    let loadUser = sessionStorage.getItem("user");
    if (checkLogged) {
      setIsLogged(true);
      API.getUser(loadUser)
        .then(res => {
          setUser(res.data)
        })
        .catch(err => console.log(err));
    };
  }, []);

  function handleSignIn() {
    if (userName !== "" && password !== "") {
      let userCreds = {
        username: userName,
        password: password
      };
      setUserName("");
      setPassword("");
      API.signIn(userCreds)
        .then(user => {
          if (user.data !== "incorrect username") {
            setIsLogged(true);
            sessionStorage.setItem("isLogged", "true");
            sessionStorage.setItem("user", user.data._id);
            API.getUser(user.data._id)
              .then(res => {
                setUser(res.data);
                setRedirect(userName);
                setRedirect(null);
              })
              .catch(err => console.log(err));
          } else {
            setAlertProps("badLogin");
            toggleAlert();
          }
        })
        .catch(err => console.log(err));
    }
    else {
      setAlertProps("badLogin");
      toggleAlert();
    };
  };

  function uploadImage(picType) {
    let imageFormObj = new FormData();
    imageFormObj.append("imageName", "multer-image-" + Date.now());
    imageFormObj.append("imageData", imageForUpload);

    switch (picType) {
      case "profile":
        imageFormObj.append("type", "profile")
        API.postProfileImage(user._id, imageFormObj)
          .then(data => {
            if (data.data.success) {
              alert("Image has been successfully uploaded using multer");
            }
          })
          .catch(err => {
            alert("Error while uploading image using multer");
          })
          .then(() => { window.location.reload(false); })
        break;
      case "banner":
        imageFormObj.append("banner", eventInFocus.images.banner);
        imageFormObj.append("thumb", eventInFocus.images.thumb);
        imageFormObj.append("type", "banner");
        API.postEventImage(eventInFocus._id, imageFormObj)
          .then(data => {
            if (data.data.success) {
              alert("Image has been successfully uploaded using multer");
            }
          })
          .catch(err => {
            alert("Error while uploading image using multer");
          })
          .then(() => { window.location.reload(false); })
        break;
      case "thumb":
        imageFormObj.append("banner", eventInFocus.images.banner);
        imageFormObj.append("thumb", eventInFocus.images.thumb);
        imageFormObj.append("type", "thumb");
        API.postEventImage(eventInFocus._id, imageFormObj)
          .then(data => {
            if (data.data.success) {
              alert("Image has been successfully uploaded using multer");
            }
          })
          .catch(err => {
            alert("Error while uploading image using multer");
          })
          .then(() => { window.location.reload(false); })
      default:
        break;
    };
  };

  function logOut() {
    setIsLogged(false);
    sessionStorage.clear();
    window.location.href = '/';
  };

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
  };

  function handleSignUpSubmit() {

    if (!userName || !email || !password || !passConfirm) {
      setShowWarning("Please fill out all values...");
      setTimeout(() => {
        setShowWarning("");
      }, 1800);
      return;
    };

    if (!validateEmail(email)) {
      setShowWarning("Not a proper email...");
      setTimeout(() => {
        setShowWarning("");
      }, 1800);
      return;
    };

    if (!checkPassword(password)) {
      setShowWarning("Try another password...");
      setTimeout(() => {
        setShowWarning("");
      }, 1800);
      return;
    };

    if (password !== passConfirm) {
      setShowWarning("Passwords do not match...");
      setTimeout(() => {
        setShowWarning("");
      }, 1800);
      return;
    };

    if (userName && email && password && passConfirm) {
      API.saveUser({
        Username: userName,
        email: email,
        Password: password
      })
        .then(res => {
          toggleSignUp();
          handleSignIn();
          setAlertProps("welcome");
          toggleAlert();
        })
        .catch(err => {
          let checkErr = err.response.data.error;
          if (checkErr.hasOwnProperty('Username')) {
            setShowWarning("Username has already been taken");
            setTimeout(() => {
              setShowWarning("");
            }, 1800);
            return;
          };

          if (checkErr.hasOwnProperty('email')) {
            setShowWarning("Email has already been taken");
            setTimeout(() => {
              setShowWarning("");
            }, 1800);
            return;
          };
        });
    };
  };

  function deleteUser() {
    let usersID = user._id;
    setIsLogged(false);
    sessionStorage.clear();
    setUser({ Username: "user", hosting: [], attending: [] });
    toggleAlert();
    window.location.href = "/";

    API.deleteUser(usersID)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  function handleHostFormSubmit() {
    if (!eventName || !briefDetails || !eventType || !mainCat || !location) {
      setShowWarning("Please fill out all required values...");
      setTimeout(() => {
        setShowWarning("");
      }, 1800);
      return;
    };

    let eventString = eventName.replace(/\s/g, '').toLowerCase();
    if (eventName && briefDetails && eventType && mainCat && location && initDate) {
      var dateFormat = require("dateformat");
      let formattedDate = (dateFormat(initDate, "dddd, mmmm, dS, yyyy"));
      API.saveEvent({
        eventName: eventName,
        eventString: eventString,
        hosts: user._id,
        attendees: { guest: user._id },
        briefDetails: briefDetails,
        details: details,
        eventType: eventType,
        category: {
          first: mainCat,
          second: subCat1,
          third: subCat2
        },
        images: {
          banner: "none",
          thumb: "none"
        },
        location: location,
        datesOpen: formattedDate
      })
        .then(res => {
          console.log("successful event Post")
          toggleHost();
          makeHost(eventString);
        })
        .catch(err => {
          console.log(err.response);
          let checkErr = err.response.data.error;
          if (checkErr.hasOwnProperty('eventName')) {
            setShowWarning("This even name already exists.");
            setTimeout(() => {
              setShowWarning("");
            }, 1800);
          }
        });
    };

    function makeHost(eventString) {
      API.getEventstring({ eventString: eventString })
        .then(res => {
          API.updateUser(user._id, { $push: { hosting: res.data._id } })
          window.location.href = '/event/' + res.data.eventString;
        })
        .catch(err => console.log(err));
    };
  };

  function deleteEvent() {
    toggleAlert();
    API.deleteEvent(eventInFocus._id)
      .then(res => window.location.href = '/user/' + user.Username)
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Nav
        user={user}
        isLogged={isLogged}
        logOut={logOut}
        userName={userName}
        password={password}
        setUserName={setUserName}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
        setAlertProps={setAlertProps}
        toggleAlert={toggleAlert}
      />
      <Signup
        modalSignUp={modalSignUp}
        toggleSignUp={toggleSignUp}
        setUserName={setUserName}
        setEmail={setEmail}
        setPassword={setPassword}
        showWarning={showWarning}
        setPassConfirm={setPassConfirm}
        handleSignUpSubmit={handleSignUpSubmit}
      />
      <Hostevent
        modalHost={modalHost}
        eventType={eventType}
        mainCat={mainCat}
        showWarning={showWarning}
        setEventName={setEventName}
        setEventType={setEventType}
        setBriefDetails={setBriefDetails}
        setDetails={setDetails}
        setMainCat={setMainCat}
        setSubCat1={setSubCat1}
        setSubCat2={setSubCat2}
        setLocation={setLocation}
        setInitDate={setInitDate}
        toggleHost={toggleHost}
        handleHostFormSubmit={handleHostFormSubmit}
      />
      <Attendees
        eventInFocus={eventInFocus}
        modalAttendees={modalAttendees}
        toggleAttendees={toggleAttendees}
      />
      <Alert
        alert={alertProps}
        modalAlert={modalAlert}
        toggleAlert={toggleAlert}
        deleteUser={deleteUser}
        deleteEvent={deleteEvent}
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
                windowSize={windowSize}
                setImageForUpload={setImageForUpload}
                uploadImage={uploadImage}
                setEventInFocus={setEventInFocus}
                toggleAttendees={toggleAttendees}
                toggleAlert={toggleAlert}
                setAlertProps={setAlertProps}
              />
            </Route>
            <Route exact path="/user/:Username">
              <User
                user={user}
                isLogged={isLogged}
                loginInit={loginInit}
                windowSize={windowSize}
                setImageForUpload={setImageForUpload}
                uploadImage={uploadImage}
                setUser={setUser}
                toggleHost={toggleHost}
                setAlertProps={setAlertProps}
                toggleAlert={toggleAlert}
              />
            </Route>
            <Route exact path="/user/*">
              <NotFound />
            </Route>
            <Route exact path="/browse">
              <Browse />
            </Route>
            <Route exact path="*" >
              <NotFound />
            </Route>
          </Switch>
        }
      </Router>
    </div>
  );
};

export default App;