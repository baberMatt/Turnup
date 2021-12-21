
import React, { useState, useEffect } from "react";

import API from "../utils/api/API";
// import { Link } from "react-router-dom";
import Login from "../components/Login"
import SearchQuick from "../components/SearchQuick/searchQuick.js"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Pizza from '../assets/pizzaFeature.png'
import Jumbotron from '../components/Jumbotron/jumbotron.js'
import Nav from '../components/Nav/nav.js'
import floatImg from '../assets/landingFloat.png'
import cloud1 from '../assets/cloud1.png'
import cloud2 from '../assets/cloud2.png'
import cloud3 from '../assets/cloud3.png'
import plane from '../assets/plane.png'
import '../App.css';




function Landing(props) {
 
  
  
  useEffect(() => {
    
  }, [])
  
  

  

  // function signIn() {
  //   {
  //     API.getUsers()
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));
  //   }
  // }

  // signIn();
  


  return (
    
    <div id="landingPage d-flex">
      {/* <button className="btn btn3 mt-5" onClick={props.toggleSignUp}>Sing Up</button> */}
      <h1 id="turnupTitle" className="">Turnup</h1>
      <img id="float" className="img-fluid " src={floatImg} />
      <img id="cloud1" className="img-fluid cloud1fly " src={cloud1} />
      <img id="cloud2" className="img-fluid cloud2fly" src={cloud2} />
      <img id="cloud3" className="img-fluid cloud3fly" src={cloud3} />
      <img id="cloud4" className="img-fluid cloud4fly" src={cloud1} />
      <img id="plane" className="img-fluid planeFly" onClick={props.toggleSignUp} src={plane} />
      
      
      {/* <Jumbotron 
      toggleSignUp={props.toggleSignUp}
      /> */}
      {/* <Container fluid className="p-0" id="landingContent" >

        <Row id="landing1" className="d-flex pt-5 justify-content-center">

          <Col lg={9} className=" pt-2 justify-content-center">
            <h1 className="header">Now hosting pop ups of all kinds {">>"} </h1>
            <h6 className="bodyText">Becoming more and more popular over the last couple years, from new makers trying to build a name for themselves to established entrepenuers edging for that extra bit of exposure... Pop up events are every where now, and it used to be so hard to keep track of just what is happening out there, and when and where they just might be. Turnup is here to help. Serving as a platform for hosting, makers all kinds are welcome. From pizzaiolos to noodle diddlers, from woodworkers to apothecaries... If you are putting on a limited time event for people to check out your products, and you need a space to promote it and track guests then we are the platform for you. Check us out and see whats poppin'!</h6>
          </Col>

        </Row>
        <Row id="landing2" className="d-flex pt-5 justify-content-center">

          <Col lg={3} className="ml-5 mr-3 pt-5 justify-content-center mainCol">
            
          </Col>
          <Col lg={4} id="featureContent" className="ml-5">

          </Col>
        </Row>
        <Row id="landing3" className="d-flex pt-5 justify-content-center">

          <Col lg={9} className=" d-flex flex-column align-items-end">
            <h1 className="header">{"<<"} Ghost Kitchens coming soon!</h1>
            <h6 className="bodyText">The effect covid has had on many industry is being real. None more real then the many fields in entertainment, concerts and other live performances, sports and particulary dining. Many Americans have curtailed the once common practice of going out to eat one or twice a week, and although the chains and fast casual joints might be able to withstand the hit... a lot of the independents have had to adapt. Thus the ghost kitchen was born. If your not familiar, the concept is basically just a delivery/pickup only food concept that focus on selling there offerings through digital platforms. And we soon hope to be an aggregator of these various "spectres" ... well keep ya posted here!  </h6>
          </Col>
        </Row>

      </Container> */}
    </div>
  );
}


export default Landing;
