import React from "react";
import floatImg from '../assets/landingFloat.png'
import cloud1 from '../assets/cloud1.png'
import cloud2 from '../assets/cloud2.png'
import cloud3 from '../assets/cloud3.png'
import plane from '../assets/plane.png'
import '../App.css';

function Landing(props) {
 
  return (
    <div id="landingPage d-flex">
      <h1 id="turnupTitle" className="">Turnup</h1>
      <img id="float" className="img-fluid " src={floatImg} />
      <img id="cloud1" className="img-fluid cloud1fly " src={cloud1} />
      <img id="cloud2" className="img-fluid cloud2fly" src={cloud2} />
      <img id="cloud3" className="img-fluid cloud3fly" src={cloud3} />
      <img id="cloud4" className="img-fluid cloud4fly" src={cloud1} />
      <img id="plane" className="img-fluid planeFly" onClick={props.toggleSignUp} src={plane} />
    </div>
  );
};

export default Landing;
