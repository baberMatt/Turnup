import React, { useState, } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Food1 from '../../assets/food1.jpg'
import Food2 from '../../assets/food2.jpg'
import Pcake from '../../assets/pancakes.jpg'
import "./style.css"


// import UserContext from "../../utils/userContext";

function Jumbotron(props) {
    


    return (
        <div id="jumbo">
            <Row noGutters id="jumboMain">
                <Col lg={12} id="jumboBG">
                    <img className="jumboImg" src={Food2} />
                </Col>
                {/* <Col lg={12} className=" ">
                    <img className="jumboImg" src={Food2} />
                </Col>
                <Col lg={12} className=" ">
                    <img className="jumboImg" src={Pcake} />
                </Col> */}
                <Row id="jumboContent" className="d-flex justify-content-center">
                    <Col lg={3} className="mt-5" >
                        <h4>Got a pop up? We'll...</h4>
                        <h1 className="display-2">Turnup</h1>
                        <br></br>
                        <hr className="jumboHR"></hr>
                        <br></br>
                        <h6>Ever been talking to a friend, and they tell you about this amazing bowl of ramen they had...
                            You ask where, and they so "oh it was at this pop up, you missed it!" ... Well never again.
                            We're here to help you keep an eye on what pop ups might be turning up in your area.
                        </h6>
                        <br></br>
                        <hr className="jumboHR"></hr>
                        <br></br>
                        <h4>Sign up today and see what's poppin'</h4>
                        <button onClick={props.toggleSignUp}  className="btn btn1 signUp">Sign Up!</button>
                    </Col>
                    <Col lg={5}>
                        
                    </Col>
                </Row>
    
            </Row>


        </div>
    );

}

export default Jumbotron;