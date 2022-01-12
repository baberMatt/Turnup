import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Turnupicon from '../../assets/turnupIcon.png'
import Login from "../Login"
import "./style.css"

function Nav(props) {

    function about(e) {
        e.preventDefault();
        props.setAlertProps("about")
        props.toggleAlert()
    }

    return (
        <div id="nav">
            <Row noGutters className="navRow d-flex mt-2 justify-content-between">
                <Col lg={3} className="navTab text-center d-flex align-items-center ml-2  ">
                    <img className="mx-1" src="https://img.icons8.com/color/60/000000/facebook.png" />
                    <img className="mx-1" src="https://img.icons8.com/fluency/60/000000/instagram-new.png" />
                    <img className="mx-1" src="https://img.icons8.com/fluency/60/000000/twitter.png" />
                </Col>
                <Col lg={3} className="navTab text-center  p-0">
                    <Row className="d-flex align-items-center">
                        <Col lg={3} className="navTab text-center ">
                            <a href="/" ><img id="icon" className="img-fluid " src={Turnupicon} /> </a>
                        </Col>
                        <Col lg={3} className="navTab text-center ">
                            <a href="/" onClick={e => about(e)} className="m-auto">About</a>
                        </Col>

                        <Col lg={3} className="navTab text-center ">
                            <a href="/browse" className="m-auto">Browse</a>

                        </Col>

                        <Col lg={3} className="navTab text-center ">
                            <a href="#" className="m-auto">Search</a>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className=" loginCol p-0">
                    {!props.isLogged ? "" : <a href={"/user/" + props.user.Username}><button className="mt-1 btn btn3">Profile</button></a>}
                    {!props.isLogged ?
                        <Login
                            userName={props.userName}
                            password={props.password}
                            setUserName={props.setUserName}
                            setPassword={props.setPassword}
                            handleSignIn={props.handleSignIn}
                        />
                        : <button onClick={props.logOut} className="ml-1 btn btn3">Log Out</button>}
                </Col>
            </Row>

        </div>
    );
}

export default Nav;
