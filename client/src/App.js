import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/nav"
import Jumbotron from "./components/Jumbotron/jumbotron.js"
import Landing from "./pages/Landing"
import Event from "./pages/Event"
import './App.css';
import './assets/turnupMain.png'
import signup from "./components/signup"
import User from "./pages/User"
import Browse from "./pages/Browse";



function App() {
  return (
    <Router>
        <Nav />
        
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/event">
            <Event />
          </Route>
          <Route exact path="/user/:Username">
            <User />
          </Route>
          <Route exact path="/browse">
            <Browse />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
