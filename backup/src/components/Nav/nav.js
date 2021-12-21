import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Turnupicon from '../../assets/turnupIcon.png'
import "./style.css"

import Login from "../Login"
import App from "../../App.js"


// import UserContext from "../../utils/userContext";

function Nav(props) {





    return (
        <div id="nav">
            <Row noGutters className="navRow d-flex justify-content-center">
                <Col lg={1} className="navTab text-center d-flex align-items-center ">
                    {/* <a href="#" className="m-auto">Search</a> */}
                </Col>

                <Col lg={1} className="navTab text-center d-flex align-items-center ">
                    <a href="/" className="m-auto">Home</a>
                </Col>

                <img id="icon" className="img-fluid " src={Turnupicon} />

                <Col lg={1} className="navTab text-center d-flex align-items-center ">
                    <a href="/browse" className="m-auto">Browse</a>
                </Col>
                
                <Col lg={1} className="navTab text-center d-flex align-items-center ">
                    {/* <a href="#" className="m-auto">About Us</a> */}
                </Col>
                <Col lg={2} className=" loginCol p-0">
                    {!props.isLogged ? "" : <a href={"/user/" + props.user.Username}><button className="btn btn1">Profile</button></a>}
                    {!props.isLogged ?
                        <Login
                           
                            setUserName={props.setUserName}
                            setPassword={props.setPassword}
                            handleSignIn={props.handleSignIn}
                        />
                        : <button onClick={props.logOut} className="ml-1 btn btn1">Log Out</button>}
                </Col>
            </Row>

        </div>
    );

}

export default Nav;