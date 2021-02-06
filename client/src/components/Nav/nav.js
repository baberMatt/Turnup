import React, { useState, } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Turnupicon from '../../assets/turnupIcon.png'
import "./style.css"
import Signup from "../signup";
import Login from "../Login"


// import UserContext from "../../utils/userContext";

function Nav(props) {
    


    return (
        <div id="nav">
            <Row className="navRow d-flex justify-content-center">
                <Col lg={1} className="navTab text-center d-flex align-items-center ">
                    <a href="/browse" className="m-auto">Browse</a>
                </Col>
                <Col lg={1} className="navTab text-center d-flex align-items-center ">
                    <a href="#" className="m-auto">Home</a>
                </Col>
                
                    <img id="icon" className="img-fluid " src={Turnupicon} />
               
                <Col lg={1} className="navTab text-center d-flex align-items-center ">
                    <a href="#" className="m-auto">Search</a>
                </Col>
                <Col lg={1} className="navTab text-center d-flex align-items-center ">
                    <a href="#" className="m-auto">About Us</a>
                </Col>
                <Col lg={3} className="loginCol">
                    <Login />
                </Col>
            </Row>

        </div>
    );

}

export default Nav;