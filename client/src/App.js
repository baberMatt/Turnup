import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing"
import './App.css';
import './assets/turnupMain.png'
import signup from "./components/signup"


function App() {
  return (
    <Router>
      <div id="background">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
